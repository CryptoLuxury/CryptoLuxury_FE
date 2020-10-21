import Buttons from "./views/Components/Buttons.js";
import Calendar from "./views/Calendar/Calendar.js";
import Charts from "./views/Charts/Charts.js";
import Dashboard from "./views/Dashboard/Dashboard.js";
import ErrorPage from "./views/Pages/ErrorPage.js";
import ExtendedForms from "./views/Forms/ExtendedForms.js";
import ExtendedTables from "./views/Tables/ExtendedTables.js";
import FullScreenMap from "./views/Maps/FullScreenMap.js";
import GoogleMaps from "./views/Maps/GoogleMaps.js";
import GridSystem from "./views/Components/GridSystem.js";
import Icons from "./views/Components/Icons.js";
import LockScreenPage from "./views/Pages/LockScreenPage.js";
import LoginPage from "./views/Pages/LoginPage.js";
import Notifications from "./views/Components/Notifications.js";
import Panels from "./views/Components/Panels.js";
import PricingPage from "./views/Pages/PricingPage.js";
import Orders from "./views/Pages/OrderPage.js";
import RTLSupport from "./views/Pages/RTLSupport.js";
import ReactTables from "./views/Tables/ReactTables.js";
import RegisterPage from "./views/Pages/RegisterPage.js";
import RegularForms from "./views/Forms/RegularForms.js";
import RegularTables from "./views/Tables/RegularTables.js";
import SweetAlert from "./views/Components/SweetAlert.js";
import TimelinePage from "./views/Pages/Timeline.js";
import Typography from "./views/Components/Typography.js";
import UserProfile from "./views/Pages/UserProfile.js";
import ValidationForms from "./views/Forms/ValidationForms.js";
import VectorMap from "./views/Maps/VectorMap.js";
import Widgets from "./views/Widgets/Widgets.js";
import Wizard from "./views/Forms/Wizard.js";
import TeamPage from "./views/Pages/TeamPage.js";
import ProjectManager from "./views/Pages/ProductManager";
import Tickets from "./views/Pages/Tickets";
import DevTickets from "./views/Pages/DevTickets";

// @material-ui/icons
import Apps from "@material-ui/icons/Apps";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Login from '@material-ui/icons/VpnKey';
import Place from "@material-ui/icons/Place";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import OrdersIcon from '@material-ui/icons/ListAlt';
import GroupIcon from '@material-ui/icons/Group';
import BuildIcon from '@material-ui/icons/Build';
import HealingIcon from '@material-ui/icons/Healing';
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import CallMergeIcon from '@material-ui/icons/CallMerge';

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
    path: "/orders",
    name: "Orders",
    rtlName: "لوحة القيادة",
    icon: OrdersIcon,
    component: Orders,
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
      }
    ]
  },
]

export default dashRoutes;
