import { Campaign } from "@/types/database";
import CampaignCard from "./CampaignCard";

interface CampaignGridProps {
  campaigns: Campaign[];
}

export default function CampaignGrid({
  campaigns,
}: CampaignGridProps) {
  if (campaigns.length === 0) {
    return (
      <p className="text-center text-muted-foreground py-10">
        No campaigns found.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {campaigns.map((campaign) => (
        <CampaignCard
          key={campaign.id}
          campaign={campaign}
        />
      ))}
    </div>
  );
}