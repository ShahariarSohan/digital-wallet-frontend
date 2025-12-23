import type { TRole } from "@/types/interface";



export function getRedirectPath(role: TRole | string): string {
  switch (role) {
    case "admin":
      return "/admin/overview";
    case "agent":
      return "/agent/overview";
    case "user":
      return "/user/overview";
    default:
      return "/"; 
  }
}
