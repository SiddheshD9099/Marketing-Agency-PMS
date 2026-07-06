import { createClient } from "@/lib/supabase/server";
import { Campaign } from "@/types/database";

export async function getCampaigns(): Promise<Campaign[]> {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaigns")
    .select("*")
    .order("created_at", {
      ascending: false,
    });

  if (error) {
    console.error(error);

    return [];
  }

  return data;
}

export async function createCampaign(
  campaign: {
    campaign_name: string;
    client_name: string;
    status: "Planning" | "In Progress" | "Review" | "Delivered";
    progress: number;
    deadline: string;
  }
) {
  const supabase = await createClient();

  const { data: manager } = await supabase
    .from("users")
    .select("id")
    .eq("role", "Account Manager")
    .limit(1)
    .single();

  const { error } = await supabase.from("campaigns").insert({
    ...campaign,
    owner_id: manager?.id ?? null,
  });

  if (error) {
    throw error;
  }
}

export async function getCampaignById(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaigns")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function getCampaignDetails(id: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaigns")
    .select(`
      *,
      users (
        full_name,
        role
      ),
      tasks (
        id,
        title,
        priority,
        status,
        due_date,
        users (
          full_name
        )
      )
    `)
    .eq("id", id)
    .single();

  if (error) {
    throw error;
  }

  return data;
}