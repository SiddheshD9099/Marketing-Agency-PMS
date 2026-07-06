"use client";

import { Plus } from "lucide-react";
import CreateCampaignDialog from "./CreateCampaignDialog";

export default function CampaignToolbar() {
  return (
    <div className="flex items-center justify-end">
      <CreateCampaignDialog />
    </div>
  );
}