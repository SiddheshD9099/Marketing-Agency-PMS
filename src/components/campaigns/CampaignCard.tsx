import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { Campaign } from "@/types/database";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StatusBadge } from "@/components/ui/status-badge";


interface CampaignCardProps {
  campaign: Campaign;
}

export default function CampaignCard({
  campaign,
}: CampaignCardProps) {
    return (
    <Link href={`/dashboard/campaigns/${campaign.id}`}>
        <DashboardCard className="group cursor-pointer border transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
        <div className="space-y-5">
            <div className="flex items-start justify-between">
            <div>
                <h2 className="line-clamp-1 text-lg font-semibold">
                {campaign.campaign_name}
                </h2>

                <p className="line-clamp-1 text-sm text-muted-foreground">
                {campaign.client_name}
                </p>
            </div>

            <StatusBadge status={campaign.status} />
            </div>

            <div className="space-y-2">
  <div className="flex justify-between text-sm">
    <span className="text-muted-foreground">Progress</span>
    <span className="font-medium">{campaign.progress}%</span>
  </div>

  <ProgressBar value={campaign.progress} />
</div>

            <div className="flex items-center justify-between border-t pt-4 text-sm text-muted-foreground">
            <CalendarDays size={16} />

            <span className="font-medium">
                Due{" "}
                {new Date(campaign.deadline).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
                })}
            </span>
            </div>
        </div>
        </DashboardCard>
    </Link>
    );
}