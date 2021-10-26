import {Action, ActionCreator, AnyAction, Reducer} from "redux";
import {ThunkAction} from "redux-thunk";
import {MeStateActions} from "./me/actions";
import {MeAction, meInitialState, meReducer, MeState} from "./me/meStore";

export type RootState = {
  commentText: string;
  token: string;
  me: MeState;
}

export type UpdateCommentAction = {
  type: typeof RootStateActions.UPDATE_COMMENT,
  payload: string,
}

export type SetTokenAction = {
  type: typeof RootStateActions.SET_TOKEN,
  payload: string
}

enum RootStateActions {
  UPDATE_COMMENT = "UPDATE_COMMENT",
  SET_TOKEN = "SET_TOKEN",
}

const initialState: RootState = {
  commentText: "",
  token: "",
  me: meInitialState,
};

export const updateComment: ActionCreator<UpdateCommentAction> = (value: string) => {
  return {
    type: RootStateActions.UPDATE_COMMENT,
    payload: value
  }
}

export const setToken: ActionCreator<SetTokenAction> = (token: string) => {
  return {
    type: RootStateActions.SET_TOKEN,
    payload: token
  }
}

export const getToken = (): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch) => {
  const token = window.__token__;

  dispatch(setToken(token));
}

export type MyAction = SetTokenAction | UpdateCommentAction | MeAction

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
    case MeStateActions.ME_REQUEST:
    case MeStateActions.ME_REQUEST_ERROR:
    case MeStateActions.ME_REQUEST_SUCCESS: {
      return {
        ...state,
        me: meReducer(state.me, action)
      }
    }
    default:
      return state;
  }
}