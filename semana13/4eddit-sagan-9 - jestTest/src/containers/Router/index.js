import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import RegistrationPage from '../RegistrationPage/RegistrationPage'
import PostFeed from '../PostFeed/PostFeed'
import PostPage from '../../containers/PostPage/PostPage'

export const routes = {
  root: "/",
  registrationPage: '/signup',
  postFeed: '/posts',
  postDetails: `/posts/detail`
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route exact path={routes.root} component={LoginPage} />
        <Route exact path={routes.registrationPage} component={RegistrationPage} />
        <Route exact path={routes.postFeed} component={PostFeed} />
        <Route exact path={routes.postDetails} component={PostPage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
