import {Reducer} from "redux"
import {IUserData, MeRequestAction, MeRequestErrorAction, MeRequestSuccessAction, MeStateActions} from "./actions"

export type MeState = {
  user: IUserData,
  loading: boolean,
  error?: Error | null
}

export type MeAction = MeRequestAction | MeRequestSuccessAction | MeRequestErrorAction

export const meInitialState: MeState = {
  user: {
    name: "",
    iconImg: "",
  },
  loading: false,
  error: null,
}

export const meReducer: Reducer<MeState, MeAction> = (state = meInitialState, action): MeState => {
  switch (action.type) {
    case MeStateActions.ME_REQUEST:
      return {
        ...state,
        loading: true
      };
    case MeStateActions.ME_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload
      }
    case MeStateActions.ME_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      }
    default:
      return state;
  }
}