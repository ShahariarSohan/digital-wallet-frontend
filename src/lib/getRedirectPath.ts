import type { TRole } from "@/types/interface";



export function getRedirectPath(role: TRole | string): string {
  switch (role) {
    case "admin":
      return "/admin";
    case "agent":
      return "/agent";
    case "user":
      return "/user";
    default:
      return "/"; 
  }
}
