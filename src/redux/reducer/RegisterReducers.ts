import { Action, ActionType } from "../../type/register";

export interface Register {
  id: number;
  username: string;
  email: string;
  password: string;
}

interface State {
  register: any[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  register: [],
  loading: false,
  error: null,
};

const registerReducer = (
  state: State = initialState,
  action: Action
): State => {
  switch (action.type) {
    case ActionType.REGISTER_PENDING:
      return {
        loading: true,
        register: [],
        error: null,
      };
    case ActionType.REGISTER_SUCCESS:
      return {
        loading: false,
        register: action.payload,
        error: null,
      };
    case ActionType.REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
        register: [],
      };
    default:
      return state;
  }
};

export default registerReducer;
