
import MiCalendario from "views/MiCalendario.js";
import CalendarioTorneos from "views/CalendarioTorneos.js";
import TableList from "views/Rankings.js";
import UserPage from "views/MiPerfil.js";
import NuevoTorneo from "views/NuevoTorneo.js";
import CollapsibleTable from "./components/Tables/TableCollapse";
import ModificarCuadros from './views/ModificarCuadros';
import CuadrosTorneos from './views/VerCuadros'
import ModificarTorneo from './views/ModificarTorneo';


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
    path: "/dashboard",
    name: "dashboard",
    icon: "nc-icon nc-tile-56",
    component: CollapsibleTable,
    layout: "/admin",
  },
  {
    path: "/modificarCuadros",
    name: "Modificar Cuadros",
    icon: "nc-icon nc-tile-56",
    component: ModificarCuadros,
    layout: "/admin",
  },
  {
    path: "/CuadrosTorneos",
    name: "Ver Cuadros",
    icon: "nc-icon nc-tile-56",
    component: CuadrosTorneos,
    layout: "/admin",
  },
  {
    path: "/NuevoTorneo",
    name: "Agregar torneo",
    icon: "nc-icon nc-spaceship",
    component: NuevoTorneo,
    layout: "/admin",
  },
  {
    path: "/ModificarTorneo",
    name: "Modificar Torneo",
    icon: "nc-icon nc-bank",
    component: ModificarTorneo,
    layout: "/admin",
  },
];
export default routes;
