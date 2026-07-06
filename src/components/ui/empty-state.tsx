import { Inbox } from "lucide-react";

interface EmptyStateProps {
  title: string;
  description: string;
}

export function EmptyState({
  title,
  description,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed py-20">
      <Inbox className="mb-4 h-10 w-10 text-gray-400" />

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <p className="mt-2 max-w-sm text-center text-muted-foreground">
        {description}
      </p>
    </div>
  );
}