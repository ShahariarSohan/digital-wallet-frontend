import type { ComponentType } from "react";

export type TRole = "user" | "admin" | "agent";
export interface ISiderbar{
    title: string;
    items: {
        title: string;
        url: string;
        Component:ComponentType
    }[]
}