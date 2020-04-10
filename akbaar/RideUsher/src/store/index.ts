import * as UIActions from "./actions/uiActions";
import rootReducer from "./reducers/rootReducer";

export { default as store } from "./store";
export { default as rootReducer } from "./reducers/rootReducer";

export const actions = {
  ui: UIActions,
};

export type RootState = ReturnType<typeof rootReducer>;
