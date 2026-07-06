import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  value: number;
}

export function ProgressBar({
  value,
}: ProgressBarProps) {
  return (
    <div className="space-y-2">
      <Progress value={value} />

      <p className="text-xs text-muted-foreground">
        {value}% Complete
      </p>
    </div>
  );
}