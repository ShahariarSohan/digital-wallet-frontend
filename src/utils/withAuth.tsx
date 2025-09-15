

import { useMyInfoQuery } from "@/redux/features/auth/auth.api";
import type { TRole } from "@/types/interface";
import type { ComponentType } from "react";
import { Navigate } from "react-router";

export const withAuth = (Component: ComponentType, requiredRole?: TRole) => {
    return function AuthWrapper() {
        const { data,isLoading } = useMyInfoQuery(undefined);
        const loggedInData = data?.data;
        const loggedInEmail = loggedInData?.email;
        if (!isLoading && !loggedInEmail) {
            return <Navigate to="/login"></Navigate>
        }
        if (requiredRole && !isLoading && requiredRole !== loggedInData?.role) {
            return <Navigate to="/unauthorized"></Navigate>;
        }
        return <Component></Component>
    }
}