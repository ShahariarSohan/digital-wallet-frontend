import { role } from "@/constants/role";
import { adminSidebar } from "@/routes/adminSidebar";
import { agentSidebar } from "@/routes/agentSidebar";
import { userSidebar } from "@/routes/userSidebar";
import type { TRole } from "@/types/interface";

export const generateSidebarItems = (userRole: TRole) => {
  switch (userRole) {
    case role.admin:
      return [...adminSidebar];
    case role.agent:
      return [...agentSidebar];
    case role.user:
      return [...userSidebar];
    default:
      return [];
  }
};
