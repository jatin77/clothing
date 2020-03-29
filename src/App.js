import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage";
import { Route, Switch } from "react-router-dom";

const Hat = () => <h1>Hats</h1>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/shop/hats" component={Hat} />
      </Switch>
    </div>
  );
}

export default App;
