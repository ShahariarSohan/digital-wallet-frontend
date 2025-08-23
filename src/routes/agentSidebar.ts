

import type { ISiderbar } from "@/types/interface";

import AgentOverview from "@/pages/agent/AgentOverview";
import AgentTransactions from "@/pages/agent/AgentTransactions";
import AgentProfile from "@/pages/agent/AgentProfile";
import CashIn from "@/pages/agent/Cashin";
import CashOut from "@/pages/agent/Cashout";

export const agentSidebar: ISiderbar[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/agent/overview",
        Component: AgentOverview,
      },
    ],
  },
  {
    title: "Wallet Operations",

    items: [
      {
        title: "Cash in",
        url: "/agent/cashin",
        Component: CashIn,
      },
      {
        title: "Cash out",
        url: "/agent/cashout",
        Component: CashOut,
      },
    ],
  },
  {
    title: "Transactions",
    items: [
      {
        title: "With Users",
        url: "/agent/transactions",
        Component: AgentTransactions,
      },
    ],
  },
  {
    title: "Profile",

    items: [
      {
        title: "Update",
        url: "/agent/profile",
        Component: AgentProfile,
      },
    ],
  },
];