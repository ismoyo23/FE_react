import { combineReducers } from "redux";
// =============================================
// import from reducers auth
import authReducers from "./reducer/AuthReducers";
import historyReducers from "./reducer/HistoryReducers";
import registerReducers from "./reducer/RegisterReducers";

// export combine reducers
let reducer = combineReducers({
  // =========================================//
  // export auth //
  auth: authReducers,
  dataHistory: historyReducers,
  registerReducers,
});

export default reducer;
export type RootState = ReturnType<typeof reducer>;
