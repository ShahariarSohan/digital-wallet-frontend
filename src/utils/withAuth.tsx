import { useMyInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types/interface";
import type { ComponentType } from "react";
import { Navigate, useLocation } from "react-router";

export const withAuth = (Component: ComponentType, ...requiredRole: TRole[]) => {
  return function AuthWrapper() {
    const location = useLocation();
    const { data, isLoading } = useMyInfoQuery(undefined);
    const loggedInData = data?.data;
    const loggedInEmail = loggedInData?.email;
    if (!isLoading && !loggedInEmail) {
      return <Navigate to="/login" state={{pathname:location.pathname }} replace></Navigate>;
    }
    if (requiredRole && !isLoading && !requiredRole.includes(loggedInData?.role)) {
      return <Navigate to="/unauthorized"></Navigate>;
    }
    return <Component></Component>;
  };
};
