import React from "react";
import Dashboard from "../pages/Dashboard";
import Invoices from "../pages/Invoices";


export interface IRoute {
    path: string;
    name: string;
    component: React.FC
    children?: IRoute[];
}

export const routes: IRoute[] = [
    {
        path: '',
        name: "Dashboard",
        component: Dashboard,
    },
    {
        path: "/invoices",
        name: "Invoices",
        component: Invoices,
    }
];
