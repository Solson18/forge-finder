import React from "react";
import Header from "./Header";
import "./app.css";
import { Route, withRouter } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Login from "./Login";
import Logout from "./Logout";
import Spark from "./Spark";
import { Provider } from "react-redux";
import { createStore } from "redux";
import dwarfReducer from "../reducers/dwarfReducer";

const store = createStore(
  dwarfReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const App = props => (
  <Provider store={store}>
    <div className="page">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <Route path="/spark" component={Spark} />
      </div>
    </div>
  </Provider>
);
