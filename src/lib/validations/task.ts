import { z } from "zod";

export const taskSchema = z.object({
  campaign_id: z.string().uuid(),

  title: z.string().min(3),

  description: z.string().optional(),

  assignee_id: z.string().uuid(),

  priority: z.enum([
    "Low",
    "Medium",
    "High",
  ]),

  status: z.enum([
    "Todo",
    "In Progress",
    "Review",
    "Done",
  ]),

  due_date: z.string(),
});

export type TaskForm =
  z.infer<typeof taskSchema>;