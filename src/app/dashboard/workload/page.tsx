import { DashboardCard } from "@/components/ui/dashboard-card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { getTeamWorkload } from "@/lib/repositories/user.repository";
import { Users } from "lucide-react";

export default async function WorkloadPage() {
  const members = await getTeamWorkload();

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
  <Users className="h-8 w-8 text-primary" />

  <div>
    <h1 className="text-3xl font-bold">
      Team Workload
    </h1>

    <p className="text-muted-foreground">
      Monitor capacity across your team.
    </p>
  </div>
</div>

      <div className="grid gap-4">
        {members.map((member: any) => {
          const utilization = Math.round(member.workload);

          const status =
            utilization >= 100
              ? "Overloaded"
              : utilization >= 80
              ? "Busy"
              : "Available";

          return (
            <DashboardCard key={member.id}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="font-semibold">{member.full_name}</h2>
                    <p className="text-sm text-muted-foreground">
                      {member.taskCount} / {member.capacity} tasks assigned
                    </p>
                  </div>

                  <Badge
                    variant={
                        status === "Overloaded"
                        ? "destructive"
                        : "secondary"
                    }
                    >
                    {status}
                  </Badge>
                </div>

                <Progress value={utilization} />

                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Utilization</span>
                  <span>{utilization}%</span>
                </div>
              </div>
            </DashboardCard>
          );
        })}
      </div>
    </div>
  );
}