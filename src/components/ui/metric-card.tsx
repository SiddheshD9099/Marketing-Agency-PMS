import { DashboardCard } from "./dashboard-card";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export function MetricCard({
  title,
  value,
  icon,
}: MetricCardProps) {
  return (
    <DashboardCard>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">
            {title}
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {value}
          </h2>
        </div>

        {icon}
      </div>
    </DashboardCard>
  );
}