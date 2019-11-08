import React from 'react';
import {
  BrowserRouter as Router, Switch, NavLink, Route,
} from 'react-router-dom';
import Routes from './Routes';
import NotFound from '../pages/NotFound/NotFound';


function App() {
  return (
    <Router>
      <div>
        <ul className="main-nav">
          {Routes.map((route) => (
            <li key={route.id}>
              <NavLink to={route.path}>
                {' '}
                {route.name}
                {' '}
              </NavLink>
            </li>
          ))}
          <li>
            <NavLink to="/hiiiiiiiiiii">not match</NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        {Routes.map((route) => (
          <Route key={route.id} path={route.path} exact={!!(route.path === '/')}>
            {route.component}
          </Route>
        ))}
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
