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

export const loadUsers = () => {
  return async (dispatch) => {
    const users = (await axios.get("/api/users")).data;
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

export const deleteUser = (user, history) => {
  return async (dispatch) => {
    await axios.delete(`/api/users/${user.id}`);
    dispatch(_deleteUser(user));
    history.push("/pool_picks");
  };
};

export const updateUser = (user, history, route = "dont update") => {
  return async (dispatch) => {
    user = (await axios.put(`/api/users/${user.id}`, user)).data;
    route !== "dont update" &&
      history.push(route === "admin" ? "/pool_picks" : route);
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
