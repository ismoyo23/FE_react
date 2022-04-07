import { Action, ActionType } from "../../type/history";

export interface History {
  id: number;
  pemain: string;
  score: string;
  created_at: string;
}

interface State {
  history: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  history: [],
  loading: false,
  error: null,
};

const historyReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.HISTORY_PENDING:
      return {
        loading: true,
        history: [],
        error: null,
      };
    case ActionType.HISTORY_SUCCESS:
      return {
        loading: false,
        history: action.payload,
        error: null,
      };
    case ActionType.HISTORY_FAIL:
      return {
        loading: false,
        error: action.payload,
        history: [],
      };
    default:
      return state;
  }
};

export default historyReducer;
