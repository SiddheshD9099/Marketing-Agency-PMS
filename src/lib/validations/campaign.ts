import { z } from "zod";

export const campaignSchema = z.object({
  campaign_name: z
    .string()
    .min(3, "Campaign name is required"),

  client_name: z
    .string()
    .min(2, "Client name is required"),

  status: z.enum([
    "Planning",
    "In Progress",
    "Review",
    "Delivered",
  ]),

  progress: z
    .number()
    .min(0)
    .max(100),

  deadline: z.string(),
});

export type CampaignFormData =
  z.infer<typeof campaignSchema>;