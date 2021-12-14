import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import axios from "axios";
import logger from "redux-logger";

//////////////////////////////////// ACTION TYPES below:

const LOAD_LEAGUES = "LOAD_LEAGUES";
const SELECT_LEAGUE = "SELECT_LEAGUE";
const LOAD_TEAMS = "LOAD_TEAMS";
const SELECT_TEAM = "SELECT_TEAM";
const LOAD_PLAYERS = "LOAD_PLAYERS";
const DELETE_PLAYER = "DELETE_PLAYER";

//////////////////////////////////// ACTION CREATORS below:

export const _loadLeagues = (leagues) => {
  return { type: LOAD_LEAGUES, leagues };
};

export const _selectLeague = (id) => {
  return { type: SELECT_LEAGUE, id };
};

export const _loadTeams = (teams) => {
  return { type: LOAD_TEAMS, teams };
};

export const _selectTeam = (id) => {
  return { type: SELECT_TEAM, id };
};

export const _loadPlayers = (players) => {
  return { type: LOAD_PLAYERS, players };
};

//////////////////////////////////// THUNKS below:
export const loadLeagues = () => {
  return async (dispatch) => {
    const leagues = (await axios.get("/api/leagues")).data;
    dispatch(_loadLeagues(leagues));
  };
};

export const selectLeague = (id) => {
  return (dispatch) => {
    dispatch(_selectLeague(id));
  };
};

export const loadTeams = () => {
  return async (dispatch) => {
    const teams = (await axios.get("/api/teams")).data;
    dispatch(_loadTeams(teams));
  };
};

export const selectTeam = (id) => {
  return (dispatch) => {
    dispatch(_selectTeam(id));
  };
};

export const loadPlayers = () => {
  return async (dispatch) => {
    const players = (await axios.get("/api/players")).data;
    dispatch(_loadPlayers(players));
  };
};

export const deletePlayer = (player) => {
  return async (dispatch) => {
    await axios.delete(`/api/players/${player.id}`);
    const teams = (await axios.get("/api/teams")).data;
    dispatch(_loadTeams(teams));
  };
};

//////////////////////////////////// REDUCERS below:
const leagues = (state = [], action) => {
  switch (action.type) {
    case LOAD_LEAGUES:
      return action.leagues;
    default:
      return state;
  }
};

const selectedLeague = (state = "", action) => {
  switch (action.type) {
    case SELECT_LEAGUE:
      return action.id;
    default:
      return state;
  }
};

const teams = (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.teams;
    default:
      return state;
  }
};

const selectedTeam = (state = "", action) => {
  switch (action.type) {
    case SELECT_TEAM:
      return action.id;
    case SELECT_LEAGUE:
      return action.id;
    default:
      return state;
  }
};

const players = (state = [], action) => {
  switch (action.type) {
    case LOAD_PLAYERS:
      return action.players;
    case DELETE_PLAYER:
      return state.filter((player) => player.id !== action.player.id);
    default:
      return state;
  }
};

const reducer = combineReducers({
  leagues,
  selectedLeague,
  teams,
  selectedTeam,
  players,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
