import { UPDATE_MENU_OPTION, UIActionTypes } from "../types/uiTypes";

export function updateMenuOption(menuOptionName: string): UIActionTypes {
  return {
    type: UPDATE_MENU_OPTION,
    payload: menuOptionName,
  };
}
