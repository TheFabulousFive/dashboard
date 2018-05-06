import Dashboard from "views/Dashboard/Dashboard";
// import Notifications from "views/Notifications/Notifications";
import FanEngagement from "views/FanEngagement/FanEngagement";
import FestivalProfile from "views/FestivalProfile/FestivalProfile";
import Maps from "views/Maps/Maps";

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
    name: "Fan Engagement",
    icon: "pe-7s-note2",
    component: FanEngagement
  },
  {
    path: "/maps",
    name: "Fan Activity Map",
    icon: "pe-7s-map-marker",
    component: Maps },
  { redirect: true, path: "/", to: "/dashboard", name: "Dashboard" }
];

export default dashboardRoutes;
