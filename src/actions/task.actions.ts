"use server";

import { revalidatePath } from "next/cache";

import { createTask } from "@/lib/repositories/task.repository";
import { taskSchema } from "@/lib/validations/task";

export async function createTaskAction(
  formData: FormData
) {
  const values = {
    campaign_id: formData.get("campaign_id"),
    title: formData.get("title"),
    description: formData.get("description"),
    assignee_id: formData.get("assignee_id"),
    priority: formData.get("priority"),
    status: formData.get("status"),
    due_date: formData.get("due_date"),
  };

  const parsed =
    taskSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
    };
  }

  await createTask(parsed.data);

  revalidatePath(
    `/dashboard/campaigns/${parsed.data.campaign_id}`
  );

  return {
    success: true,
  };
}