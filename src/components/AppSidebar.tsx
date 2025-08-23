import * as React from "react";


import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router";
import Logo from "@/assets/icons/Logo";
import { generateSidebarItems } from "@/utils/generateSidebarItems";
import { useAdminInfoQuery, useAgentInfoQuery, useUserInfoQuery } from "@/redux/features/auth.api";



// This is sample data.


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { data: agentData } = useAgentInfoQuery(undefined);
    const { data: userData } = useUserInfoQuery(undefined);
  const { data: adminData } = useAdminInfoQuery(undefined);
  const role =
    agentData?.data?.role || userData?.data?.role || adminData?.data?.role;
  const data = {
    versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
    navMain: generateSidebarItems(role),
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div className="flex items-center gap-1 text-primary">
          <Logo></Logo> <h1 className=" text-xl font-bold italic">Pay</h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
