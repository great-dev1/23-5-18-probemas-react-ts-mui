import React, { FC, ReactNode, useReducer } from "react";
import { AppReducer } from "./reducer/AppReducer";
import { AppInitialState } from "./state/AppState";
import { AppContext } from "./AppContext";

interface Props {
  children?: ReactNode;
}

const AppProvider: FC<Props> = (props) => {
  const { children } = props;
  const [state, setState] = useReducer(AppReducer, AppInitialState);
  return (
    <AppContext.Provider value={{ state: state, dispatch: setState }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
