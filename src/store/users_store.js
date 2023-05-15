import axios from "axios";

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

const loadUserData = async () => {
  let users = (await axios.get("/api/users")).data;

  const teams = (await axios.get("/api/teams")).data;

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

  users = users.map((user) => {
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

    return user;
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
