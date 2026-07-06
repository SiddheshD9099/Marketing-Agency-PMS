import { DashboardCard } from "@/components/ui/dashboard-card";
import { Badge } from "@/components/ui/badge";
import {
  ListTodo,
  Clock3,
  CircleCheckBig,
  TriangleAlert,
} from "lucide-react";

import { getAllTasks } from "@/lib/repositories/task.repository";



export default async function TasksPage() {
  const tasks = await getAllTasks();

  const total = tasks.length;
  const completed = tasks.filter((t: any) => t.status === "Done").length;
  const inProgress = tasks.filter(
    (t: any) => t.status === "In Progress"
  ).length;
  const overdue = tasks.filter((t: any) => {
    if (!t.due_date || t.status === "Done") return false;
    return new Date(t.due_date) < new Date();
  }).length;

  const priorityVariant = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive";
      case "Medium":
        return "secondary";
      default:
        return "outline";
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
  <ListTodo className="h-8 w-8 text-primary" />

  <div>
    <h1 className="text-3xl font-bold">
      Tasks
    </h1>

    <p className="text-muted-foreground">
      Track work across all campaigns.
    </p>
  </div>
</div>

      <div className="grid gap-4 md:grid-cols-4">
        <DashboardCard>
            <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-muted-foreground">Total Tasks</p>
                <p className="mt-2 text-3xl font-bold">{total}</p>
            </div>
            <ListTodo className="h-9 w-9 text-muted-foreground" />
            </div>
        </DashboardCard>

        <DashboardCard>
            <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-muted-foreground">In Progress</p>
                <p className="mt-2 text-3xl font-bold">{inProgress}</p>
            </div>
            <Clock3 className="h-9 w-9 text-blue-500" />
            </div>
        </DashboardCard>

        <DashboardCard>
            <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="mt-2 text-3xl font-bold">{completed}</p>
            </div>
            <CircleCheckBig className="h-9 w-9 text-green-500" />
            </div>
        </DashboardCard>

        <DashboardCard>
            <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-muted-foreground">Overdue</p>
                <p className="mt-2 text-3xl font-bold">{overdue}</p>
            </div>
            <TriangleAlert className="h-9 w-9 text-red-500" />
            </div>
        </DashboardCard>
        </div>

      {tasks.length === 0 ? (
  <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20 text-center">
    <h3 className="text-xl font-semibold">
      No tasks available
    </h3>

    <p className="mt-2 text-muted-foreground">
      Create a task to start tracking work.
    </p>
  </div>
) : (
        <div className="grid gap-4">
          {tasks.map((task: any) => (
            <DashboardCard key={task.id}>
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold">{task.title}</h2>

                  {task.description && (
                    <p className="text-sm text-muted-foreground">
                      {task.description}
                    </p>
                  )}

                  <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                    <span>
                      <strong>Campaign:</strong> {task.campaign_name}
                    </span>

                    <span>
                      <strong>Assignee:</strong> {task.assignee_name}
                    </span>

                    <span>
                      <strong>Due:</strong>{" "}
                      {task.due_date
                        ? new Date(task.due_date).toLocaleDateString()
                        : "No deadline"}
                    </span>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Badge variant={priorityVariant(task.priority)}>
                    {task.priority}
                  </Badge>

                  <Badge variant="secondary">
                    {task.status}
                  </Badge>
                </div>
              </div>
            </DashboardCard>
          ))}
        </div>
      )}
    </div>
  );
}