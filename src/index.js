import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
