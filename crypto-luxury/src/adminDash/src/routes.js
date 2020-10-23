
import Dashboard from "./views/Dashboard/Dashboard.js";
import LoginPage from "./views/Pages/LoginPage.js";

import TeamPage from "./views/Pages/TeamPage.js";
import ProjectManager from "./views/Pages/ProductManager";
import Tickets from "./views/Pages/Tickets";
import DevTickets from "./views/Pages/DevTickets";
import SubscriberPage from "./views/Pages/SubcriberPage";

// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import Login from '@material-ui/icons/VpnKey';
import GroupIcon from '@material-ui/icons/Group';
import BuildIcon from '@material-ui/icons/Build';
import HealingIcon from '@material-ui/icons/Healing';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import CallMergeIcon from '@material-ui/icons/CallMerge';
import EmailIcon from '@material-ui/icons/AlternateEmail';

var dashRoutes = [
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: Login,
    component: LoginPage,
    layout: "/admin"
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/productmanager",
    name: "Product Manager",
    rtlName: "لوحة القيادة",
    icon: BuildIcon,
    component: ProjectManager,
    layout: "/admin"
  },
  {
    path: "/team",
    name: "Team",
    rtlName: "لوحة القيادة",
    icon: GroupIcon,
    component: TeamPage,
    layout: "/admin"
  },
  {
    collapse: true,
    name: "Ticket Center",
    rtlName: "المكونات",
    icon: HealingIcon,
    state: "componentsCollapse",
    views: [
      {
        path: "/tickets",
        name: "Help Tickets",
        rtlName: "وصفت",
        icon: AssignmentLateIcon,
        rtlMini: "ب",
        component: Tickets,
        layout: "/admin"
      },
      {
        path: "/devtickets",
        name: "Dev Tickets",
        rtlName: "وصفت",
        icon: CallMergeIcon,
        rtlMini: "ب",
        component: DevTickets,
        layout: "/admin"
      },
      {
        path: "/subscribers",
        name: "Subscribers",
        rtlName: "وصفت",
        icon: EmailIcon,
        rtlMini: "ب",
        component: SubscriberPage,
        layout: "/admin"
      }
    ]
  },
]

export default dashRoutes;
