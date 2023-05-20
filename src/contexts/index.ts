import { useContext } from "react";
import { AppContext, IAppContext } from "./AppContext";

export const useAppContext = (): IAppContext => {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error(
      "useAppContex must be used within a AppContext.Provider"
    );
  }
  return ctx;
}