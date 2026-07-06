"use client";

import { useFormStatus } from "react-dom";

import { createCampaignAction } from "@/actions/campaign.actions";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending}
    >
      {pending ? "Creating..." : "Create Campaign"}
    </Button>
  );
}

export default function CreateCampaignDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create Campaign</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-xl">
        <DialogHeader>
          <DialogTitle>Create Campaign</DialogTitle>
        </DialogHeader>

        <form action={createCampaignAction} className="space-y-4">

          <Input
            name="campaign_name"
            placeholder="Campaign Name"
            required
          />

          <Input
            name="client_name"
            placeholder="Client Name"
            required
          />

          <select
            name="status"
            className="w-full rounded-md border px-3 py-2"
            defaultValue="Planning"
          >
            <option>Planning</option>
            <option>In Progress</option>
            <option>Review</option>
            <option>Delivered</option>
          </select>

          <Input
            name="progress"
            type="number"
            defaultValue={0}
            min={0}
            max={100}
          />

          <Input
            name="deadline"
            type="date"
            required
          />



          <SubmitButton />

        </form>
      </DialogContent>
    </Dialog>
  );
}