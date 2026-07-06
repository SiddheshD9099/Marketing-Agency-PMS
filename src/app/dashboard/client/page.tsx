import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { DashboardCard } from "@/components/ui/dashboard-card";
import { getClientDashboard } from "@/lib/repositories/client.repository";
import { Building2, Briefcase, CheckCircle2, Activity } from "lucide-react";

export default async function ClientDashboardPage() {
  const campaigns = await getClientDashboard();

  const totalCampaigns = campaigns.length;

  const activeCampaigns = campaigns.filter(
    (c: any) => c.status === "Active"
  ).length;

  const completedCampaigns = campaigns.filter(
    (c: any) => c.status === "Completed"
  ).length;

  const avgProgress =
    campaigns.length === 0
      ? 0
      : Math.round(
          campaigns.reduce(
            (sum: number, c: any) => sum + c.progress,
            0
          ) / campaigns.length
        );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Building2 className="h-8 w-8 text-primary" />

        <div>
          <h1 className="text-3xl font-bold">
            Client Dashboard
          </h1>

          <p className="text-muted-foreground">
            View client campaigns and delivery progress.
          </p>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <DashboardCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Campaigns
              </p>

              <p className="mt-2 text-3xl font-bold">
                {totalCampaigns}
              </p>
            </div>

            <Briefcase className="h-8 w-8 text-muted-foreground" />
          </div>
        </DashboardCard>

        <DashboardCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Active
              </p>

              <p className="mt-2 text-3xl font-bold">
                {activeCampaigns}
              </p>
            </div>

            <Activity className="h-8 w-8 text-blue-500" />
          </div>
        </DashboardCard>

        <DashboardCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Completed
              </p>

              <p className="mt-2 text-3xl font-bold">
                {completedCampaigns}
              </p>
            </div>

            <CheckCircle2 className="h-8 w-8 text-green-500" />
          </div>
        </DashboardCard>

        <DashboardCard>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">
                Avg Progress
              </p>

              <p className="mt-2 text-3xl font-bold">
                {avgProgress}%
              </p>
            </div>

            <Activity className="h-8 w-8 text-orange-500" />
          </div>
        </DashboardCard>
      </div>

      {/* Empty State */}
      {campaigns.length === 0 ? (
        <DashboardCard>
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <Building2 className="mb-4 h-12 w-12 text-muted-foreground" />

            <h2 className="text-xl font-semibold">
              No client campaigns
            </h2>

            <p className="mt-2 text-muted-foreground">
              Client campaigns will appear here once they are created.
            </p>
          </div>
        </DashboardCard>
      ) : (
        <div className="space-y-6">
          {campaigns.map((campaign: any) => (
            <DashboardCard key={campaign.id}>
              <div className="space-y-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-xl font-semibold">
                      {campaign.campaign_name}
                    </h2>

                    <p className="text-muted-foreground">
                      {campaign.client_name}
                    </p>
                  </div>

                  <Badge variant="secondary">
                    {campaign.status}
                  </Badge>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>Progress</span>
                    <span>{campaign.progress}%</span>
                  </div>

                  <Progress value={campaign.progress} />
                </div>

                <div>
                  <h3 className="mb-3 font-semibold">
                    Upcoming Tasks
                  </h3>

                  {campaign.tasks.length === 0 ? (
                    <p className="text-sm text-muted-foreground">
                      No upcoming tasks.
                    </p>
                  ) : (
                    <div className="space-y-2">
                      {campaign.tasks.map((task: any) => (
                        <div
                          key={task.id}
                          className="flex items-center justify-between rounded-lg border p-3"
                        >
                          <div>
                            <p className="font-medium">
                              {task.title}
                            </p>

                            <p className="text-xs text-muted-foreground">
                              Due{" "}
                              {task.due_date
                                ? new Date(
                                    task.due_date
                                  ).toLocaleDateString()
                                : "No deadline"}
                            </p>
                          </div>

                          <Badge variant="secondary">
                            {task.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </DashboardCard>
          ))}
        </div>
      )}
    </div>
  );
}