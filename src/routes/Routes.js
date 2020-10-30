import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "../containers/App";
import NotFound from "../containers/NotFound";
import Portafolio from "../containers/Portafolio";
import SobreMi from "../containers/SobreMi";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/sobre-mi" component={SobreMi} />
      <Route exact path="/portafolio" component={Portafolio} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
