import { createStore, applyMiddleware, compose, Middleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/rootReducer";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// We will need to check debug build  here
const loggerMiddleware = createLogger({
  predicate: (getState: any, action: any) => {
    return true;
  },
});
const middlewares: Middleware[] = [thunkMiddleware, loggerMiddleware];

function configureStore(initialState?: {}) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
