import Dashboard from "./views/Dashboard";
import Devices from "./views/Devices";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: ""
  },
  {
    path: "/devices",
    name: "Devices",
    icon: "ni ni-planet text-blue",
    component: Devices,
    layout: ""
  }
];
export default routes;
