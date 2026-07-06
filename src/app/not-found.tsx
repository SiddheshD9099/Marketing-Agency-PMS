import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="text-center">
        <h1 className="text-5xl font-bold">
          404
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>

        <Link href="/dashboard">
          <Button className="mt-6">
            Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}