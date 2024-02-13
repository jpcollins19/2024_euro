import axios from "axios";
import { formatUserData } from "./users_store";
import { routes } from "./index";

const TOKEN = "token";

const SET_AUTH = "SET_AUTH";

export const setAuth = (auth) => ({ type: SET_AUTH, auth });

export const me = () => async (dispatch) => {
  const token = window.localStorage.getItem(TOKEN);

  if (token) {
    const response = await axios.get("/api/me", {
      headers: {
        authorization: token,
      },
    });

    const teams = (await axios.get("/api/teams")).data;
    const user = formatUserData(response.data, teams);

    return dispatch(setAuth(user));
  }
};

export const authenticate = (email, password) => async (dispatch) => {
  try {
    const response = await axios.post("api/authorize", { email, password });
    const { token } = response.data;
    window.localStorage.setItem(TOKEN, token);
    dispatch(me());
  } catch (authError) {
    return dispatch(
      setAuth({
        error: `the error is happening in the authenticate thunk in the store: ${authError}`,
      })
    );
  }
};

export const sendForgotPW = (message, history) => {
  return async (dispatch) => {
    const data = await axios.post("/api/send-email", message);

    console.log("data in thunk", data);

    history.push(routes.forgotPwConfirmation);
  };
};

export const logout = (history) => {
  history.push(routes.signIn);
  window.localStorage.removeItem(TOKEN);
  return {
    type: SET_AUTH,
    auth: {},
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
