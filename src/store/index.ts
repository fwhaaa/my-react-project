import {
  legacy_createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from "redux";
import redxThunk from "redux-thunk";
import handleArr from "./ArrStatus/reducer";
import handleNum from "./NumStatus/reducer";

const reducers = combineReducers({
  handleArr,
  handleNum,
});

// const store = legacy_createStore(
//   reducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION()
// );
let composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__({})
  : compose;

const store = legacy_createStore(
  reducers,
  composeEnhancers(applyMiddleware(redxThunk))
);

export default store;
