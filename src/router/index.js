import Main from "../pages/Main";
import DeveloperMain from "../pages/DeveloperMain";
import Property from "../pages/Property";
import Home from "../pages/Home";
import Start from "../pages/Start";
import Busin from "../pages/Busin";
import InfaHome from "../pages/InfaHome";
import SortPlace from "../pages/SortPlace";
import Buhgalter from "../pages/Buhgalter";
import Statistics from "../pages/Statistics";
import Secret from "../pages/Secret";

export const routes = [
    {path: '/main', component: Main},
    {path: '/developer', component: DeveloperMain},
    {path: '/dProperty', component: Property},
    {path: '/pHome', component: Home},
    {path: '/start', component: Start},
    {path: '/sortBus', component: Busin},
    {path: '/infoHome', component: InfaHome},
    {path: '/sortPlace', component: SortPlace},
    {path: '/buhg', component: Buhgalter},
    {path: '/stat', component: Statistics},
    {path: '/secret', component: Secret}
]