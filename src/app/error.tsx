"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.error(error);

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="max-w-md text-center">
        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-3 text-muted-foreground">
          An unexpected error occurred. Please try again.
        </p>

        <Button
          onClick={reset}
          className="mt-6"
        >
          Try Again
        </Button>
      </div>
    </div>
  );
}