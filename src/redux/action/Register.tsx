import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../../type/register";
export const postAuth = (username: string, email: string, password: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.REGISTER_PENDING,
    });

    try {
      const { data } = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_URL}/auth/register`,
        data: {
          username: username,
          email: email,
          password: password,
        },
      });
      console.log(data);
      dispatch({
        type: ActionType.REGISTER_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.REGISTER_FAIL,
        payload: err.message,
      });
    }
  };
};
