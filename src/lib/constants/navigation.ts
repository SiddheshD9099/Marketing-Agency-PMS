import {
  IconLayoutDashboard,
  IconBriefcase,
  IconChecklist,
  IconUsersGroup,
  IconUser,
} from "@tabler/icons-react";

export const navigation = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: IconLayoutDashboard,
  },
  {
    title: "Campaigns",
    href: "/dashboard/campaigns",
    icon: IconBriefcase,
  },
  {
    title: "Tasks",
    href: "/dashboard/tasks",
    icon: IconChecklist,
  },
  {
    title: "Workload",
    href: "/dashboard/workload",
    icon: IconUsersGroup,
  },
  {
    title: "Client Dashboard",
    href: "/dashboard/client",
    icon: IconUser,
  },
];