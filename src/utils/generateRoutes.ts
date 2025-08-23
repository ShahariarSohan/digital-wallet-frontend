import type { ISiderbar } from "@/types/interface";


export const generateRoutes = (SidebarItems: ISiderbar[]) => {
    return SidebarItems.flatMap((section) => section.items.map(route => ({
        path: route.url,
        Component:route.Component,
    })))
}