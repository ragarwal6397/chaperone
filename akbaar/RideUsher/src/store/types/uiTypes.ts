export interface UIState {
  menuOptionName: string;
}

export const UPDATE_MENU_OPTION = "UI/UPDATE_MENU_OPTION";

interface UpdateMenuOptionAction {
  type: typeof UPDATE_MENU_OPTION;
  payload: string;
}

export type UIActionTypes = UpdateMenuOptionAction;
