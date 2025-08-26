import UserProfile from "@/pages/user/UserProfile";
import Deposit from "@/pages/user/Deposit";
import SendMoney from "@/pages/user/SendMoney";
import UserOverview from "@/pages/user/UserOverview";
import UserTransactions from "@/pages/user/UserTransactions";
import Withdraw from "@/pages/user/Withdraw";
import type { ISiderbar } from "@/types/interface";

export const userSidebar: ISiderbar[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/user/overview",
        Component:UserOverview ,
      },
    ],
  },
    {
      title: "Wallet Operations",

      items: [
        {
          title: "Deposit",
          url: "/user/deposit",
          Component: Deposit,
        },
        {
          title: "Withdraw",
          url: "/user/withdraw",
          Component: Withdraw,
        },
        {
          title: "Send Money",
          url: "/user/sendmoney",
          Component: SendMoney,
        },
      ],
    },
  {
    
    title:"Transactions",
    items: [
      {
        title: "My Transactions",
        url: "/user/transactions",
        Component: UserTransactions,
      },
    ],
  },
  {
    title: "Profile",

    items: [
      {
        title: "Info",
        url: "/user/profile",
        Component: UserProfile,
      },
    ],
  },
];