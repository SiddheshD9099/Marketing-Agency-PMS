import { Badge } from "@/components/ui/badge";

interface StatusBadgeProps {
  status:
    | "Planning"
    | "In Progress"
    | "Review"
    | "Delivered";
}

const variants = {
  Planning: "bg-gray-200 text-black",
  "In Progress": "bg-blue-500 text-white",
  Review: "bg-yellow-500 text-white",
  Delivered: "bg-green-600 text-white",
};

export function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <Badge className={variants[status]}>
      {status}
    </Badge>
  );
}