

import LoginPage from "../UserLogin";


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

var dashRoutes = [
  {
    path: "/login",
    name: "Login",
    rtlName: "لوحة القيادة",
    icon: Login,
    component: LoginPage,
    layout: "/user"
  },
  // {
  //   path: "/register",
  //   name: "Dashboard",
  //   rtlName: "لوحة القيادة",
  //   icon: DashboardIcon,
  //   component: Dashboard,
  //   layout: "/admin"
  // },
]

export default dashRoutes;
