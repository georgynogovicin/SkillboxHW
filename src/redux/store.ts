import {Reducer} from "react";
import {AnyAction} from "redux";

export type RootState = {
  commentText: string;
  token: string;
}

enum RootStateActions {
  UPDATE_COMMENT = "UPDATE_COMMENT",
  SET_TOKEN = "SET_TOKEN",
}

const initialState: RootState = {
  commentText: "",
  token: "",
};

export const updateComment = (value: string) => {
  return {
    type: RootStateActions.UPDATE_COMMENT,
    payload: value
  }
}

export const setToken = (token: string) => {
  return {
    type: RootStateActions.SET_TOKEN,
    payload: token
  }
}

export const rootReducer: Reducer<RootState, AnyAction> = (state = initialState, action): RootState => {
  switch (action.type) {
    case RootStateActions.UPDATE_COMMENT: {
      return {
        ...state,
        commentText: action.payload
      }
    }
    case RootStateActions.SET_TOKEN: {
      return {
        ...state,
        token: action.payload
      }
    }
    default:
      return state;
  }
}