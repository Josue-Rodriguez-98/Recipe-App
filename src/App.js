import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";
import Error404 from "./Views/Error404";

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route component={Error404} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
