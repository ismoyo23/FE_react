import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../../type/auth";

export const Login = (username: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.AUTH_PENDING,
    });

    try {
      const { data } = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_URL}/auth/login`,
        data: {
          username: username,
          password: password,
        },
      });

      dispatch({
        type: ActionType.AUTH_SUCCESS,
        payload: data.data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.AUTH_FAIL,
        payload: err.message,
      });
    }
  };
};

export const Logout = () => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.LOGOUT,
    });
  };
};
