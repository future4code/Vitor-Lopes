import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from '../HomePage/index'
import ListTripsPage from '../ListTripsPage/index'
import CreateTripPage from '../CreateTripPage/index'
import TripDetailsPage from '../TripDetailsPage/index'



export const routes = {
  root: "/",
  form: "/application-form",
  login: "/login",
  tripsCreate: "/trips/create",
  tripsList: "/trips/list",
  tripsDetails: "/trips/details",
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={HomePage} />
        <Route exact path={routes.form} component={HomePage} />
        <Route exact path={routes.login} component={LoginPage} />
        <Route exact path={routes.tripsCreate} component={CreateTripPage} />
        <Route exact path={routes.tripsList} component={ListTripsPage} />
        <Route exact path={routes.tripsDetails} component={TripDetailsPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
