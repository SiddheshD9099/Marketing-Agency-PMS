import { notFound } from "next/navigation";
import TaskList from "@/components/tasks/TaskList";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { ProgressBar } from "@/components/ui/progress-bar";
import { StatusBadge } from "@/components/ui/status-badge";
import { SectionHeader } from "@/components/ui/section-header";

import { getCampaignDetails } from "@/lib/repositories/campaign.repository";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function CampaignDetailsPage({
  params,
}: Props) {
  const { id } = await params;

  const campaign = await getCampaignDetails(id);

  if (!campaign) {
    notFound();
  }

  return (
    <div className="space-y-8">

      <SectionHeader
        title={campaign.campaign_name}
        description={campaign.client_name}
      />

      <DashboardCard>

        <div className="space-y-6">

          <div className="flex items-center justify-between">

            <StatusBadge
              status={campaign.status}
            />

            <p className="text-sm text-muted-foreground">
              Owner: {campaign.users?.full_name ?? "Unassigned"}
            </p>

          </div>

          <ProgressBar
            value={campaign.progress}
          />

        </div>

      </DashboardCard>

        <DashboardCard>
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-xl font-semibold">
            Tasks
            </h2>

            <button className="rounded-lg bg-black px-4 py-2 text-white hover:bg-neutral-800">
            + Add Task
            </button>
        </div>

        <TaskList tasks={campaign.tasks} />
        </DashboardCard>

    </div>
  );
}