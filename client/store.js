import { browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import { compose, createStore } from "redux";

import comments from "./data/comments";
import posts from "./data/posts";
import rootReducer from "./reducers";

const defaultState = {
  posts,
  comments
}

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
);

const store = createStore(
  rootReducer,
  defaultState,
  enhancers
);

export const history = syncHistoryWithStore(browserHistory, store);

// Handle hot reloading for reducers with webpack
if (module.hot)  {
  module.hot.accept("./reducers/", () => {
    const nextRootReducer = require("./reducers/index").default;
    store.replaceReducer(nextRootReducer);
  })
}

export default store;
