import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import LandingPage from './LandingPage';
import MainView from './MainView';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route
            exact
            path="/main-view"
            component={MainView} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;