import { DashboardPage, TablesPage } from "../pages/index";
import { DASHBOARD_ROUTE, TABLES_ROUTE } from "./consts";

export const MainLayoutRouts = [
  {
    title: "Tables",
    path: TABLES_ROUTE,
    Component: TablesPage,
  },
  {
    title: "Dashboard",
    path: DASHBOARD_ROUTE,
    Component: DashboardPage,
  },
];
