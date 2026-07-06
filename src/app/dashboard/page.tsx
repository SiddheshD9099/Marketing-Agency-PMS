import {
  Briefcase,
  ClipboardList,
  Users,
  CheckCircle,
} from "lucide-react";

import { MetricCard } from "@/components/ui/metric-card";
import { getCampaigns } from "@/lib/repositories/campaign.repository";
import { getTeamWorkload } from "@/lib/repositories/user.repository";
import { LayoutDashboard } from "lucide-react";

export default async function DashboardPage() {
  const campaigns = await getCampaigns();
  const users = await getTeamWorkload();

  const totalTasks = users.reduce(
  (sum: number, user: any) => sum + user.taskCount,
  0
  );

  const completed = campaigns.filter(
    (c) => c.status === "Delivered"
  ).length;

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
  <LayoutDashboard className="h-8 w-8 text-primary" />

  <div>
    <h1 className="text-3xl font-bold tracking-tight">
      Dashboard
    </h1>

    <p className="text-muted-foreground">
      Overview of campaigns, tasks and performance.
    </p>
  </div>
</div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          title="Campaigns"
          value={campaigns.length}
          icon={<Briefcase className="h-8 w-8 text-blue-500" />}
        />

        <MetricCard
          title="Tasks"
          value={totalTasks}
          icon={<ClipboardList className="h-8 w-8 text-orange-500" />}
        />

        <MetricCard
          title="Team Members"
          value={users.length}
          icon={<Users className="h-8 w-8 text-violet-500" />}
        />

        <MetricCard
          title="Completed"
          value={completed}
          icon={<CheckCircle className="h-8 w-8 text-green-500" />}
        />
      </div>
    </div>
  );
}