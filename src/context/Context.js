import React from "react";
import { types } from "../utils";

export const initialState = {
  theme: {
    theme: true
  },
  name: "Osborn"
};

export function reducer(state, action) {
  switch (action.type) {
    case types.SET_THEME:
      return Object.assign({}, state, {
        theme: { ...(action.payload || []) }
      });

    case types.SET_NAME:
      return Object.assign({}, state, {
        name: action.payload || ""
      });

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const StoreContext = React.createContext();

export const DispatchContext = React.createContext();
