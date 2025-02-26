import { combineReducers } from "redux";
import AuthReducer from "./AuthReducer";
import { mailsData } from "./mailsData";

const appReducer = combineReducers({
  auth: AuthReducer,
  mails: mailsData,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === "LOGOUT") {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export default rootReducer as any;
