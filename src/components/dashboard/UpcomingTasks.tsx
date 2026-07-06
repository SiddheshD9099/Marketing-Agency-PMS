import { DashboardCard } from "@/components/ui/dashboard-card";

export default function UpcomingTasks({
  tasks,
}: {
  tasks: any[];
}) {
  return (
    <DashboardCard>
      <h2 className="mb-5 text-xl font-semibold">
        Upcoming Tasks
      </h2>

      <div className="space-y-3">
        {tasks.slice(0, 5).map((task) => (
          <div
            key={task.id}
            className="rounded-lg border p-3"
          >
            <h3 className="font-medium">
              {task.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {task.due_date}
            </p>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}