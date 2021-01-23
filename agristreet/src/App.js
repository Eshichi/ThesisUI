import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { Component} from 'react'
import Admin from './routes/admin/component'

function App() {
  return (
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Admin} />
            </Switch>
        </BrowserRouter>
  );
}

export default App;
