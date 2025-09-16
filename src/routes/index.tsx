import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import FAQ from "@/pages/FAQ";
import Features from "@/pages/Features";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";

import { createBrowserRouter, Navigate } from "react-router";
import { adminSidebar } from "./adminSidebar";
import { agentSidebar } from "./agentSidebar";
import { userSidebar } from "./userSidebar";
import Unauthorized from "@/pages/Unauthorized";
import { withAuth } from "@/utils/withAuth";
import { role } from "@/constants/role";
import type { TRole } from "@/types/interface";
import ForgetPassword from "@/pages/ForgetPassword";
import ResetPassword from "@/pages/ResetPassword";
import GetResetPassword from "@/pages/GetResetPassword";
import VerifyOtp from "@/pages/VerifyOtp";

const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        Component: Home,
        index: true,
      },
      {
        Component: About,
        path: "about",
      },
      {
        Component: Features,
        path: "features",
      },
      {
        Component: FAQ,
        path: "faq",
      },
      {
        Component: Contact,
        path: "contact",
      },
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.admin as TRole),
    path: "/admin",
    children: [
      { index: true, element: <Navigate to="/admin/overview" /> },
      ...generateRoutes(adminSidebar),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.agent as TRole),
    path: "/agent",
    children: [
      { index: true, element: <Navigate to="/agent/overview" /> },
      ...generateRoutes(agentSidebar),
    ],
  },
  {
    Component: withAuth(DashboardLayout, role.user as TRole),
    path: "/user",
    children: [
      { index: true, element: <Navigate to="/user/overview" /> },
      ...generateRoutes(userSidebar),
    ],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: withAuth(Unauthorized, ...(Object.values(role) as TRole[])),
    path: "/unauthorized",
  },
  {
    Component: withAuth(ForgetPassword, ...(Object.values(role) as TRole[])),
    path: "/forget-password",
  },
  {
    Component: withAuth(ResetPassword, ...(Object.values(role) as TRole[])),
    path: "/reset-password",
  },
  {
    Component: withAuth(GetResetPassword, ...(Object.values(role) as TRole[])),
    path: "/get-reset-link",
  },
  {
    Component: withAuth(VerifyOtp, ...(Object.values(role) as TRole[])),
    path: "/verify",
  },
]);

export default router;
