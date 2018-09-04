import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" render={() => <div>Home</div>} />
        <Route render={() => <div>Miss</div>} />
      </Switch>
      <div>
        <Link to="/">Home</Link>|<Link to="/other">Other</Link>
      </div>
    </div>
  );
}

export default App;
