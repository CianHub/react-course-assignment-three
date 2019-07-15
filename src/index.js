import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers } from "react-redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import addPerson from "./store/reducers/addPerson";

const rootReducer = combineReducers(addPerson);
const store = createStore(rootReducer);

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
