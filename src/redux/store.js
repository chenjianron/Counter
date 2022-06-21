import { applyMiddleware, createStore } from "redux";
import reducer from "./reducers/index";
import thunk from "redux-thunk";

export default createStore(reducer, applyMiddleware(thunk));
