import React from 'react';
import {
  BrowserRouter as Router, Switch, Link, Route,
} from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <Router>

      <div>
        <ul>
          {Routes.map((route) => (
            <li key={route.id}>
              <Link to={route.path}>
                {' '}
                {route.name}
                {' '}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Switch>
        {Routes.map((route) => (
          <Route key={route.id} path={route.path}>
            {route.component}
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;
