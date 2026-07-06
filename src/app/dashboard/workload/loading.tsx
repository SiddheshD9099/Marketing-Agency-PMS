import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-10 w-56" />

      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton
          key={i}
          className="h-28 rounded-xl"
        />
      ))}
    </div>
  );
}