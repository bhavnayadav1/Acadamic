import Dashboard from "./views/Dashboard";
import UserProfile from "./views/UserProfile";
import TableList from "./views/TableList";
import Typography from "./views/Typography";
import Icons from "./views/Icons";
import Notifications from "./views/Notifications";

const dashboardRoutes = [
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "nc-icon nc-alien-33",
  //   component: Upgrade,
  //   layout: "/admin",
  // },
  {
    path: "/notifications",
    name: "Dashboard",
    icon: "fa fa-desktop",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/dashboard",
    name: "Assignment",
    icon: "fa fa-address-book",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Test",
    icon: "fa fa-address-card",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/table",
    name: "Courses",
    icon: "fa fa-table",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/typography",
    name: "Time Table",
    icon: "fa fa-calendar",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/icons",
    name: "Result",
    icon: "fa fa-graduation-cap",
    component: Icons,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
