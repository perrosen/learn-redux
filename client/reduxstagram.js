import "./styles/style.styl";

import Raven from "raven-js";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { IndexRoute, Route, Router } from "react-router";

import App from "./components/App";
import PhotoGrid from "./components/PhotoGrid";
import Single from "./components/Single";
// import { sentry_url, logException } from "./data/config";
import store, { history } from "./store";

// Setup sentry
// Raven.config(sentry_url, {
//   tags: {
//     git_commit: "askldj1lkjel2",
//     userLevel: "editor"
//   }
// }).install();

// Log custom error with extra info
// logException(new Error('download failed!!!'), {
//   email: "test@test.com"
// });

// // Simple log
// Raven.captureMessage("Something bad happened!");

// // Sentry error report form
// Raven.showReportDialog();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}></IndexRoute>
        <Route path="/view/:postId" component={Single}></Route>
      </Route>
    </Router>
  </Provider>
);

render(router, document.getElementById("root"));
