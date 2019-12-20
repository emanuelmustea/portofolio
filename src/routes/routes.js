import Homepage from "../components/Homepage/Homepage";
import NotFound from "../components/NotFound/NotFound";
import { AboutMe } from "../components/AboutMe/AboutMe";

const exact = true;
const routes = [
    { path: "/home", component: Homepage, exact },
    { path: "/about-me", component: AboutMe, exact },
    { path: "/", component: Homepage, exact },
    { path: "*", component: NotFound },
];
export default routes;
