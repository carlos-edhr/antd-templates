import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  BrowserRouter
} from "react-router-dom";

import "tachyons";
import "./App.css";

import Login from "./components/login/Login";
import BisagrasIndex from "./components/Catalogos/BisagrasIndex";
import AddBisagra from "./components/Catalogos/AddBisagra";
import Users from "./components/User/Users";
import User from "./components/User/User";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/bisagras/index" component={BisagrasIndex} />
        <Route exact path="/bisagras/add" component={AddBisagra} />
        <Route exact path="/user/users" component={Users} />
        <Route exact path="/user" component={User} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
