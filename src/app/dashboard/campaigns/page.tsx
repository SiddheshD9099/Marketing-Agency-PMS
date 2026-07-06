import CampaignGrid from "@/components/campaigns/CampaignGrid";
import CampaignStats from "@/components/campaigns/CampaignStats";
import CampaignToolbar from "@/components/campaigns/CampaignToolbar";
import { Megaphone } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

import { getCampaigns } from "@/lib/repositories/campaign.repository";

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();

  return (
    <div className="space-y-8">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">
  <Megaphone className="h-8 w-8 text-primary" />

  <SectionHeader
    title="Campaigns"
    description="Manage all active marketing campaigns."
  />
</div>

        <CampaignToolbar />

      </div>

      {campaigns.length === 0 ? (
  <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
    <h3 className="text-xl font-semibold">No campaigns found</h3>
    <p className="mt-2 text-muted-foreground">
      Create your first campaign to get started.
    </p>
  </div>
) : (
  <CampaignGrid campaigns={campaigns} />
)}


    </div>
  );
}