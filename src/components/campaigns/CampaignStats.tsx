import {
  Briefcase,
  CircleDashed,
  CircleCheckBig,
  Clock3,
} from "lucide-react";

import { MetricCard } from "@/components/ui/metric-card";
import { Campaign } from "@/types/database";

interface Props {
  campaigns: Campaign[];
}

export default function CampaignStats({
  campaigns,
}: Props) {
  const active = campaigns.length;

  const inProgress = campaigns.filter(
    (c) => c.status === "In Progress"
  ).length;

  const review = campaigns.filter(
    (c) => c.status === "Review"
  ).length;

  const delivered = campaigns.filter(
    (c) => c.status === "Delivered"
  ).length;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <MetricCard
        title="Active Campaigns"
        value={active}
        icon={<Briefcase className="h-8 w-8 text-blue-500" />}
      />

      <MetricCard
        title="In Progress"
        value={inProgress}
        icon={<Clock3 className="h-8 w-8 text-orange-500" />}
      />

      <MetricCard
        title="Review"
        value={review}
        icon={<CircleDashed className="h-8 w-8 text-yellow-500" />}
      />

      <MetricCard
        title="Delivered"
        value={delivered}
        icon={<CircleCheckBig className="h-8 w-8 text-green-500" />}
      />
    </div>
  );
}