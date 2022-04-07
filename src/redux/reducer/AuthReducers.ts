import { Action, ActionType } from "../../type/auth";

export interface Auth {
  id: number;
  username: string;
  email: string;
  password: string;
  AccessToken: string;
}

interface State {
  auth: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  auth: [],
  loading: false,
  error: null,
};

const authReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.AUTH_PENDING:
      return {
        loading: true,
        auth: [],
        error: null,
      };
    case ActionType.AUTH_SUCCESS:
      return {
        loading: false,
        auth: action.payload,
        error: null,
      };
    case ActionType.AUTH_FAIL:
      return {
        loading: false,
        error: action.payload,
        auth: [],
      };
    case ActionType.LOGOUT:
      return {
        loading: false,
        auth: [],
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
