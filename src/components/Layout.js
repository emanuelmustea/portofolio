import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../routes/routes";

const switchRoutes = routes.map( ( { path, component, exact } ) =>
    <Route key={path} path={path} component={component} exact={exact} /> );

export default function Layout() {
    return (
        <div className="page-wrapper">
            <Switch>
                {switchRoutes}
            </Switch>
        </div>
    );
}
