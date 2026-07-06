"use server";

import { revalidatePath } from "next/cache";

import { createCampaign } from "@/lib/repositories/campaign.repository";
import { campaignSchema } from "@/lib/validations/campaign";

export async function createCampaignAction(formData: FormData) {
  const values = {
    campaign_name: formData.get("campaign_name"),
    client_name: formData.get("client_name"),
    status: formData.get("status"),
    progress: Number(formData.get("progress")),
    deadline: formData.get("deadline"),
  };

  const result = campaignSchema.safeParse(values);

  if (!result.success) {
    throw new Error("Invalid campaign data");
  }

  await createCampaign(result.data);

  revalidatePath("/dashboard/campaigns");
}