import { UIState, UIActionTypes, UPDATE_MENU_OPTION } from "../types/uiTypes";
import { DEFAULT_MENU_OPTION } from "../../constants/MenuList";

const initialState: UIState = {
  menuOptionName: DEFAULT_MENU_OPTION,
};

export function uiReducer(
  state = initialState,
  action: UIActionTypes
): UIState {
  switch (action.type) {
    case UPDATE_MENU_OPTION:
      return {
        ...state,
        menuOptionName: action.payload,
      };
    default:
      return state;
  }
}
