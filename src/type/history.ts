import { History } from "../redux/reducer/HistoryReducers";
export enum ActionType {
  HISTORY_PENDING = "AUTH_PENDING",
  HISTORY_SUCCESS = "AUTH_SUCCESS",
  HISTORY_FAIL = "AUTH_FAIL",
}

interface actionPending {
  type: ActionType.HISTORY_PENDING;
}

interface actionSuccess {
  type: ActionType.HISTORY_SUCCESS;
  payload: History[];
}

interface actionFail {
  type: ActionType.HISTORY_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
