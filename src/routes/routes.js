import Homepage from "../components/Homepage/Homepage";
import NotFound from "../components/NotFound/NotFound";

const exact = true;
const routes = [
    { path: "/home", component: Homepage, exact },
    { path: "/", component: Homepage, exact },
    { path: "*", component: NotFound },
];
export default routes;
