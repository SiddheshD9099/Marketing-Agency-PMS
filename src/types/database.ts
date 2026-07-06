export interface User {
  id: string;
  full_name: string;
  email: string;
  role:
    | "Account Manager"
    | "Designer"
    | "SEO Specialist"
    | "Content Writer"
    | "Client";
  avatar: string | null;
  capacity: number;
  created_at: string;
}

export interface Campaign {
  id: string;
  client_name: string;
  campaign_name: string;
  owner_id: string | null;
  status:
    | "Planning"
    | "In Progress"
    | "Review"
    | "Delivered";
  progress: number;
  deadline: string;
  created_at: string;
}

export interface Task {
  id: string;
  campaign_id: string;
  title: string;
  description: string | null;
  assignee_id: string | null;
  priority: "Low" | "Medium" | "High";
  status: "Todo" | "In Progress" | "Review" | "Done";
  due_date: string;
  created_at: string;
}