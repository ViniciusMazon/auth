import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';

export default function AuthRoutes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SingIn} />
        <Route path="/sing-up" component={SingUp} />
      </Switch>
    </BrowserRouter>
  );
}
