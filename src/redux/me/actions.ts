import axios from "axios"
import {Action, ActionCreator} from "redux"
import {ThunkAction, ThunkDispatch} from "redux-thunk"
import {RootState} from "../store"
import {MeAction, MeState} from "./meStore"

export enum MeStateActions {
  ME_REQUEST = "ME_REQUEST",
  ME_REQUEST_SUCCESS = "ME_REQUEST_SUCCESS",
  ME_REQUEST_ERROR = "ME_REQUEST_ERROR",
}

export interface IUserData {
  name?: string;
  iconImg?: string;
}

export type MeRequestAction = {
  type: typeof MeStateActions.ME_REQUEST
}

export type MeRequestSuccessAction = {
  type: typeof MeStateActions.ME_REQUEST_SUCCESS
  payload: IUserData,
}

export type MeRequestErrorAction = {
  type: typeof MeStateActions.ME_REQUEST_ERROR,
  payload: Error
}

export type UserData = {
  name?: string;
  icon_img?: string;
}

export const meRequest: ActionCreator<MeRequestAction> = () => {
  return {
    type: MeStateActions.ME_REQUEST
  }
}

export const meRequestSuccess: ActionCreator<MeRequestSuccessAction> = (userData: IUserData) => {
  return {
    type: MeStateActions.ME_REQUEST_SUCCESS,
    payload: userData
  }
}

export const meRequestError: ActionCreator<MeRequestErrorAction> = (error: Error) => {
  return {
    type: MeStateActions.ME_REQUEST_ERROR,
    payload: error
  }
}

export const getUserAsync = (): ThunkAction<void, RootState, unknown, Action<string>> =>
  (
    dispatch: ThunkDispatch<MeState, any, MeAction>,
    getState
  ) => {
    
    const token = getState().token;

    if (token === "undefined") return;
    
    dispatch(meRequest());
    
    axios.get<UserData>(
      'https://oauth.reddit.com/api/v1/me',
      {
        headers: {Authorization: `bearer ${token}`}
      }
    )
      .then((res) => {
        const userData = res.data;
        dispatch(meRequestSuccess({name: userData.name, iconImg: userData.icon_img}));
      })
      .catch((e) => {
        dispatch(meRequestError(e))
      })
  }