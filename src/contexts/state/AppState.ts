import { ICurrency } from "../../types/general"

export interface IAppState {
  selectedCurreny: ICurrency
}

export const AppInitialState: IAppState = {
  selectedCurreny: {
    id: 0,
    label: "USD",
    value: 1,
  }
}