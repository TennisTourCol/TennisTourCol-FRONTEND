
import MiCalendario from "views/MiCalendario.js";
import CalendarioTorneos from "views/CalendarioTorneos.js";
import TableList from "views/Rankings.js";
import UserPage from "views/MiPerfil.js";
import UpgradeToPro from "views/NuevoTorneo.js";


var routes = [
  {
    path: "/MiCalendario",
    name: "Mi Calendario",
    icon: "nc-icon nc-bank",
    component: MiCalendario,
    layout: "/admin",
  },
  {
    path: "/CalendarioTorneos",
    name: "Calendario Torneos",
    icon: "nc-icon nc-diamond",
    component: CalendarioTorneos,
    layout: "/admin",
  },
  {
    path: "/MiPerfil",
    name: "Mi perfil",
    icon: "nc-icon nc-single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/Rankings",
    name: "Rankings",
    icon: "nc-icon nc-tile-56",
    component: TableList,
    layout: "/admin",
  },

  {
    pro: true,
    path: "/NuevoTorneo",
    name: "Agregar torneo",
    icon: "nc-icon nc-spaceship",
    component: UpgradeToPro,
    layout: "/admin",
  },
];
export default routes;
