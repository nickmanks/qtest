import React, {Fragment} from 'react';
import {Router, Route, Switch} from 'react-router';
import NotFound from './404';
import history from '../history';
import Render from './render';
import {routes} from './routes';

const AppRouter = ()=> (
  <Router history={history}>
    <Fragment>
      <Switch id="wrapper">
        {routes.map((route, idx)=> (
          <Route
            key={idx}
            exact={route.exact}
            path={route.path}
            render={()=> (
              <Render
                path={route.path}
                title={route.title}
                component={route.component}
              />
            )}
          />
        ))}
        <Route component={NotFound} />
      </Switch>
    </Fragment>
  </Router>
);

export default AppRouter;
