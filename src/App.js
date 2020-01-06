import React, { PureComponent } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Views/Home";

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
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
