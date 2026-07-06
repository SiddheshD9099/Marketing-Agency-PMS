import { createClient } from "@/lib/supabase/server";

export async function getClientDashboard() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("campaigns")
    .select(`
      *,
      tasks (
        id,
        title,
        status,
        due_date
      )
    `)
    .order("deadline");

  if (error) throw error;

  return data;
}