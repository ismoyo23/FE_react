import { Register } from "../redux/reducer/RegisterReducers";
export enum ActionType {
  REGISTER_PENDING = "REGISTER_PENDING",
  REGISTER_SUCCESS = "REGISTER_SUCCESS",
  REGISTER_FAIL = "REGISTER_FAIL",
}

interface actionPending {
  type: ActionType.REGISTER_PENDING;
}

interface actionSuccess {
  type: ActionType.REGISTER_SUCCESS;
  payload: Register[];
}

interface actionFail {
  type: ActionType.REGISTER_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
