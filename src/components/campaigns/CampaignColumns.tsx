"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Campaign } from "@/types/database";
import { StatusBadge } from "@/components/ui/status-badge";
import { ProgressBar } from "@/components/ui/progress-bar";

export const campaignColumns: ColumnDef<Campaign>[] = [
  {
    accessorKey: "campaign_name",
    header: "Campaign",
  },
  {
    accessorKey: "client_name",
    header: "Client",
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <StatusBadge status={row.original.status} />
    ),
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: ({ row }) => (
      <div className="w-40">
        <ProgressBar value={row.original.progress} />
      </div>
    ),
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
  },
];