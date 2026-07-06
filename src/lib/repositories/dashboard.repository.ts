import { getCampaigns } from "./campaign.repository";
import { getAllTasks } from "./task.repository";
import { getTeamWorkload } from "./user.repository";

export async function getDashboardData() {
  const [campaigns, tasks, users] = await Promise.all([
    getCampaigns(),
    getAllTasks(),
    getTeamWorkload(),
  ]);

  return {
    campaigns,
    tasks,
    users,
  };
}