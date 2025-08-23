import { useAdminInfoQuery, useAgentInfoQuery, useUserInfoQuery } from "@/redux/features/auth.api";
import type { TRole } from "@/types/interface";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
    return function AuthWrapper() {
         const { data: agentData,isLoading:agentLoading } = useAgentInfoQuery(undefined);
          const { data: userData ,isLoading:userLoading} = useUserInfoQuery(undefined);
        const { data: adminData, isLoading: adminLoading } = useAdminInfoQuery(undefined);
        const loading = adminLoading || userLoading || agentLoading;
        const loggedInData=agentData?.data || userData?.data || adminData?.data;
        const loggedInEmail = loggedInData?.email;
        if (!loading && !loggedInEmail) {
            return <Navigate to="/login"></Navigate>
        }
        if (requiredRole && !loading && requiredRole !== loggedInData?.role) {
            return <Navigate to="/unauthorized"></Navigate>;
        }
        return <Component></Component>
    }
}