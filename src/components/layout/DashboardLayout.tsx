import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { AppSidebar } from "../AppSidebar";
import { Link, Outlet } from "react-router";

import { Home } from "lucide-react";

export default function Dashboard() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex w-full h-16 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex items-center gap-5">
            <SidebarTrigger className="-ml-1" />
            <Link to="/">
              {" "}
              <Home className="font-bold" size={17}></Home>
            </Link>
          </div>
          <Separator
            orientation="vertical"
            className="mr-2 data-[orientation=vertical]:h-4"
          />
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet></Outlet>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
