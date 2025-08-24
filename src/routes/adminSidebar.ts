
import AdminManagement from "@/pages/admin/AgentManagement";
import AdminOverview from "@/pages/admin/AdminOverview";
import UserManagement from "@/pages/admin/UserManagement";
import type { ISiderbar } from "@/types/interface";
import AllTransactions from "@/pages/admin/AllTransactions";
import AdminProfile from "@/pages/admin/AdminProfile";

export const adminSidebar: ISiderbar[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/admin/overview",
        Component: AdminOverview,
      },
    ],
  },
  {
    title: "Management",

    items: [
      {
        title: "Users",
        url: "/admin/users",
        Component: UserManagement,
      },
      {
        title: "Agents",
        url: "/admin/agents",
        Component: AdminManagement,
      },
    ],
  },
  {
    title: "Transactions",

    items: [
      {
        title: "All Transactions",
        url: "/admin/transactions",
        Component: AllTransactions,
      },
    ],
  },
  {
    title: "Profile",

    items: [
      {
        title: "Info",
        url: "/admin/profile",
        Component: AdminProfile,
      },
    ],
  },
];