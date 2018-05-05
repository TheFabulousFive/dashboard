import Dashboard from "views/Dashboard/Dashboard";
import FestivalProfile from "views/FestivalProfile/FestivalProfile";
import Maps from "views/Maps/Maps";
import TableList from "views/TableList/TableList";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard
  },
  {
    path: "/user",
    name: "Festival Profile",
    icon: "pe-7s-user",
    component: FestivalProfile
  },
  {
    path: "/table",
    name: "Live Engagement",
    icon: "pe-7s-note2",
    component: TableList
  },
  { 
    name: "Fan Engagement",
    icon: "pe-7s-note2",
    component: TableList
  },
  {
    path: "/maps",
    name: "Fan Activity Map",
    icon: "pe-7s-map-marker"
    component: Maps },
  
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
