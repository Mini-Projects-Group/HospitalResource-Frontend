//export * from "./hospital/reducer";
import hReducer from "./hospital/reducer";
import eReducer from "./error/reducer";
import sReducer from "./seller/reducer";
import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  hReducer,
  eReducer,
  sReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
