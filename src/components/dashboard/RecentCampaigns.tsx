import Link from "next/link";
import { DashboardCard } from "@/components/ui/dashboard-card";

export default function RecentCampaigns({
  campaigns,
}: {
  campaigns: any[];
}) {
  return (
    <DashboardCard>
      <h2 className="mb-5 text-xl font-semibold">
        Recent Campaigns
      </h2>

      <div className="space-y-4">
        {campaigns.slice(0, 5).map((campaign) => (
          <Link
            key={campaign.id}
            href={`/dashboard/campaigns/${campaign.id}`}
            className="block rounded-lg border p-4 transition hover:bg-slate-50"
          >
            <h3 className="font-medium">
              {campaign.campaign_name}
            </h3>

            <p className="text-sm text-muted-foreground">
              {campaign.client_name}
            </p>
          </Link>
        ))}
      </div>
    </DashboardCard>
  );
}