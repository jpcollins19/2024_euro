import axios from "axios";

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
    let user = response.data;

    const groupLetters = ["A", "B", "C", "D", "E", "F", "G", "H"];
    const groupKeys = [];

    groupLetters.forEach((letter) => {
      for (let i = 1; i <= 4; i++) {
        groupKeys.push(`group${letter}${i}`);
      }
    });

    const knockRounds = ["Q", "S", "F", "Champ"];
    const knockKeys = [];

    const knockObj = {
      Q: 8,
      S: 4,
      F: 2,
      Champ: 1,
    };

    knockRounds.forEach((round) => {
      switch (round) {
        case "Champ":
          knockKeys.push(`knock${round}`);
          break;
        default:
          for (let i = 1; i <= knockObj[round]; i++) {
            knockKeys.push(`knock${round}${i}`);
          }
      }
    });

    groupKeys.forEach((key) => {
      if (user[key]) {
        user[key] = teams.find((team) => team.name === user[key]);
      }
    });

    knockKeys.forEach((key) => {
      if (user[key]) {
        user[key] = teams.find((team) => team.name === user[key]);
      }
    });

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

    history.push("/forgot_pw_confirmation");
  };
};

export const logout = (history) => {
  history.push("/sign_in");
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
