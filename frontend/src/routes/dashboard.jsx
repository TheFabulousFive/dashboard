import Dashboard from "views/Dashboard/Dashboard";
// import Notifications from "views/Notifications/Notifications";
import FanEngagement from "views/FanEngagement/FanEngagement";
import FestivalProfile from "views/FestivalProfile/FestivalProfile";
import Maps from "views/Maps/Maps";

const rootUrl = '/dashboard';

export const DASHBOARD_COMPONENTS = {
  'Dashboard': Dashboard,
  'FestivalProfile': FestivalProfile,
  'Maps': Maps,
  'FanEngagement': FanEngagement,
};

const dashboardRoutes = [
  {
    path: `${rootUrl}/`,
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: DASHBOARD_COMPONENTS.Dashboard,
  },
  {
    path: `${rootUrl}/festival-profile/`,
    name: "Festival Profile",
    icon: "pe-7s-user",
    component: DASHBOARD_COMPONENTS.FestivalProfile,
  },
  {
    path: `${rootUrl}/engagement/`,
    name: "Fan Engagement",
    icon: "pe-7s-note2",
    component: DASHBOARD_COMPONENTS.FanEngagement,
  },
  {
    path: `${rootUrl}/activity-map/`,
    name: "Fan Activity Map",
    icon: "pe-7s-map-marker",
    component: DASHBOARD_COMPONENTS.Maps,
  },
];

export default dashboardRoutes;
