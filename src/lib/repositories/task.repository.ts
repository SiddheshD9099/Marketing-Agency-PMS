import { createClient } from "@/lib/supabase/server";

export async function getTasks(campaignId: string) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("tasks")
    .select(`
      *,
      users (
        full_name
      )
    `)
    .eq("campaign_id", campaignId)
    .order("created_at");

  if (error) throw error;

  return data;
}

export async function createTask(task: {
  campaign_id: string;
  title: string;
  description?: string;
  assignee_id: string;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "In Progress" | "Review" | "Done";
  due_date: string;
}) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("tasks")
    .insert(task);

  if (error) {
    throw error;
  }

  return true;
}

export async function getAllTasks() {
  const supabase = await createClient();

  const { data: tasks, error } = await supabase
    .from("tasks")
    .select("*")
    .order("due_date");

  if (error) throw error;

  const { data: campaigns } = await supabase
    .from("campaigns")
    .select("id, campaign_name");

  const { data: users } = await supabase
    .from("users")
    .select("id, full_name");

  return tasks.map((task) => ({
    ...task,
    campaign_name:
      campaigns?.find((c) => c.id === task.campaign_id)?.campaign_name ??
      "Unknown Campaign",
    assignee_name:
      users?.find((u) => u.id === task.assignee_id)?.full_name ??
      "Unassigned",
  }));
}