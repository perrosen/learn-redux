import { routerReducer } from "react-router-redux";
import { combineReducers } from "redux";

import comments from "./comments";
import posts from "./posts";

const rootReducer = combineReducers({ posts, comments, routing: routerReducer });

export default rootReducer;
