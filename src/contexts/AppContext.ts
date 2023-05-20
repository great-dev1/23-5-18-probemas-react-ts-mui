import { createContext } from "react";
import { IAppState } from "./state/AppState";
import { IAppAction } from "./reducer/AppReducer";

export interface IAppContext {
  state: IAppState,
  dispatch: (action: IAppAction) => void;
}

export const AppContext = createContext<IAppContext | undefined>(undefined);
