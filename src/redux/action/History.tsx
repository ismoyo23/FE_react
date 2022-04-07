import axios from "axios";
import { Dispatch } from "redux";
import { ActionType, Action } from "../../type/history";

export const getHistory = (accessToken: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HISTORY_PENDING,
    });

    try {
      const { data } = await axios({
        method: "GET",
        url: `${process.env.REACT_APP_URL}/history`,
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      console.log(data);
      dispatch({
        type: ActionType.HISTORY_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.HISTORY_FAIL,
        payload: err.message,
      });
    }
  };
};

export const postHistory = (
  pemain: string,
  score: string,
  accessToken: string
) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.HISTORY_PENDING,
    });

    try {
      const { data } = await axios({
        method: "POST",
        url: `${process.env.REACT_APP_URL}/history`,
        headers: { Authorization: `Bearer ${accessToken}` },
        data: {
          pemain: pemain,
          score: score,
        },
      });
      console.log(data);
      dispatch({
        type: ActionType.HISTORY_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.HISTORY_FAIL,
        payload: err.message,
      });
    }
  };
};
