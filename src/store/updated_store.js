import axios from "axios";

const LOAD_UPDATED = "LOAD_UPDATED";

const _loadUpdated = (update) => {
  return { type: LOAD_UPDATED, update };
};

export const loadUpdated = () => {
  return async (dispatch) => {
    const update = (await axios.get("/api/updated")).data;
    dispatch(_loadUpdated(update));
  };
};

export const changeUpdated = (update) => {
  return async (dispatch) => {
    update = (await axios.put(`/api/updated/${update.id}`, update)).data;
  };
};

export const updated = (state = [], action) => {
  switch (action.type) {
    case LOAD_UPDATED:
      return action.update;
    default:
      return state;
  }
};
