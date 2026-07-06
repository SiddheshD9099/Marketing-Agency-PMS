import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  children: React.ReactNode;
  className?: string;
}

export function DashboardCard({
  children,
  className,
}: DashboardCardProps) {
  return (
    <Card
      className={cn(
        "transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
}