import { Auth } from "../redux/reducer/AuthReducers";
export enum ActionType {
  AUTH_PENDING = "AUTH_PENDING",
  AUTH_SUCCESS = "AUTH_SUCCESS",
  AUTH_FAIL = "AUTH_FAIL",
  LOGOUT = "LOGOUT",
}

interface actionPending {
  type: ActionType.AUTH_PENDING;
}

interface actionSuccess {
  type: ActionType.AUTH_SUCCESS;
  payload: Auth[];
}

interface actionFail {
  type: ActionType.AUTH_FAIL;
  payload: string;
}

interface logout {
  type: ActionType.LOGOUT;
}

export type Action = actionPending | actionSuccess | actionFail | logout;
