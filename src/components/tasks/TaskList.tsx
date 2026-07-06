import {
  CalendarDays,
  User,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

export default function TaskList({
  tasks,
}: {
  tasks: any[];
}) {
  return (
    <div className="space-y-4">

      {tasks.map((task) => (

        <div
          key={task.id}
          className="rounded-xl border bg-white p-5 transition hover:shadow-md"
        >
          <div className="flex items-start justify-between">

            <div className="space-y-2">

              <h3 className="font-semibold">
                {task.title}
              </h3>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">

                <User size={14} />

                {task.users?.full_name ?? "Unassigned"}

              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">

                <CalendarDays size={14} />

                {task.due_date}

              </div>

            </div>

            <div className="space-y-2 text-right">

              <Badge>
                {task.priority}
              </Badge>

              <br />

              <Badge variant="secondary">
                {task.status}
              </Badge>

            </div>

          </div>
        </div>

      ))}

    </div>
  );
}