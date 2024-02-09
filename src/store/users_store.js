import axios from "axios";
import { useMediaQuery } from "react-responsive";
import { groupLetters, koLetters } from "./variables";
import { getWebsiteUpdatedEmailDateVerbiage } from "./index.js";

const LOAD_USERS = "LOAD_USERS";
const ADD_USER = "ADD_USER";
const DELETE_USER = "DELETE_USER";

const _loadUsers = (users) => {
  return { type: LOAD_USERS, users };
};

const _addUser = (user) => {
  return { type: ADD_USER, user };
};

const _deleteUser = (user) => {
  return { type: DELETE_USER, user };
};

export const formatUserData = (user, teams) => {
  const groupKeys = [];

  groupLetters.forEach((letter) => {
    for (let i = 1; i <= 4; i++) {
      groupKeys.push(`group${letter}${i}`);
    }
  });

  const knockKeys = [];

  const knockObj = {
    Q: 8,
    S: 4,
    F: 2,
    Champ: 1,
  };

  koLetters.forEach((round) => {
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
      const keyArr = key.split("");
      const selectedTeam = teams.find((team) => team.name === user[key]);
      const groupFinishingPosition = Number(keyArr[keyArr.length - 1]);

      if (groupFinishingPosition === 3) {
        const group = keyArr[keyArr.length - 2];

        const thirdPlaceAdvanceToKO_TeamName =
          user[`thirdPlaceAdvanceToKO_Pick_${group}`];

        if (
          thirdPlaceAdvanceToKO_TeamName &&
          selectedTeam?.thirdPlaceAndAdvancedToKO
        ) {
          const key = `thirdPlaceAdvanceToKO_Result_${group}`;
          user[key] = true;
        }
      }

      user[key] = selectedTeam;
    }
  });

  knockKeys.forEach((key) => {
    if (user[key]) {
      user[key] = teams.find((team) => team.name === user[key]);
    }
  });

  return user;
};

const loadUserData = async () => {
  let users = (await axios.get("/api/users")).data;
  const teams = (await axios.get("/api/teams")).data;

  users = users.map((user) => {
    return formatUserData(user, teams);
  });

  return users;
};

export const loadUsers = () => {
  return async (dispatch) => {
    const users = await loadUserData();

    dispatch(_loadUsers(users));
  };
};

export const addUser = (user, history) => {
  return async (dispatch) => {
    user = (await axios.post("/api/add/user", user)).data;
    dispatch(_addUser(user));
    history.push("/account_created");
  };
};

export const deleteUser = (user, history, userId) => {
  return async (dispatch) => {
    await axios.delete(`/api/users/${user.id}`);
    dispatch(_deleteUser(user));
    history.push(`/pool_picks/${userId}`);
  };
};

export const updateUser = (user, history, route = "dont update") => {
  return async (dispatch) => {
    const userId = user?.id;

    user = (await axios.put(`/api/users/${user.id}`, user)).data;

    route !== "dont update" &&
      history.push(route === "admin" ? `/pool_picks/${userId}` : route);
  };
};

const sendWebsiteUpdatedEmail = (user) => {
  return async (dispatch) => {
    // const data = await axios.post("/api/send-website-updated-email", user);
    await axios.post("/api/send-website-updated-email", user);
  };
};

export const loadUsersWhoNeedWebsiteUpdatedEmails = () => {
  return async (dispatch) => {
    const users = (await axios.get("/api/users")).data;

    users.forEach((user) => {
      user.websiteUpdatedEmailSent = false;

      dispatch(updateUser(user));
    });

    const usersWhoNeedAnEmail = users.filter(
      (user) => user?.emailNotifications
    );

    usersWhoNeedAnEmail.forEach((user) => {
      user.websiteUpdatedEmailSent = true;

      dispatch(updateUser(user));

      const emailDateData = getWebsiteUpdatedEmailDateVerbiage();

      console.log("email needed for:", user.email);

      const emailSubject = emailDateData[0];
      const emailBody = emailDateData[1];

      user.websiteUpdatedEmailSubject = emailSubject;
      user.websiteUpdatedEmailBody = emailBody;

      dispatch(sendWebsiteUpdatedEmail(user));
    });
  };
};

export const getScreenWidth = (str, num) => {
  return useMediaQuery({ query: `(${str}-width: ${num}em)` });
};

export const users = (state = [], action) => {
  switch (action.type) {
    case LOAD_USERS:
      return action.users;
    case ADD_USER:
      return [...state, action.user];
    case DELETE_USER:
      return [...state].filter((user) => user.id !== action.user.id);
    default:
      return state;
  }
};
