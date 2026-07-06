import { createClient } from "@/lib/supabase/server";

export async function getTeamWorkload() {
  const supabase = await createClient();

  const [{ data: users, error: userError }, { data: tasks, error: taskError }] =
    await Promise.all([
      supabase.from("users").select("*"),
      supabase.from("tasks").select("id, assignee_id"),
    ]);

  if (userError) throw userError;
  if (taskError) throw taskError;

  return users.map((user) => {
    const assignedTasks = tasks.filter(
      (task) => task.assignee_id === user.id
    );

    return {
      ...user,
      taskCount: assignedTasks.length,
      workload:
        user.capacity > 0
          ? Math.min((assignedTasks.length / user.capacity) * 100, 100)
          : 0,
    };
  });
}