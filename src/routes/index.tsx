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

import { createBrowserRouter } from "react-router";
import { adminSidebar } from "./adminSidebar";
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
    Component: DashboardLayout,
    path: "/admin",
    children: [...generateRoutes(adminSidebar)],
  },
  {
    Component: DashboardLayout,
    path: "/agent",
  },
  {
    Component: DashboardLayout,
    path: "/agent",
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
]);

export default router;
