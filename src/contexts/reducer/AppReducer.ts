import { IAppState, AppInitialState } from "../state/AppState";

export interface IAppAction {
  type: AppActionType;
  data: any;
}

export enum AppActionType {
  init,
  selectCurrency,
}

export function AppReducer(
  state: IAppState,
  action: IAppAction
): IAppState {
  const { type, data } = action;
  switch (type) {
    case AppActionType.init:
      return { ...AppInitialState };
    case AppActionType.selectCurrency:
      return { ...state, selectedCurreny: data };
    default:
      return state;
  }
}