import axios from "axios";

const LOAD_TEAMS = "LOAD_TEAMS";

const _loadTeams = (teams) => {
  return { type: LOAD_TEAMS, teams };
};

export const loadTeams = () => {
  return async (dispatch) => {
    const teams = (await axios.get("/api/teams")).data;

    teams.forEach((team) => {
      team.MP = team.W + team.D + team.L;
      team.GD = team.GF - team.GA;
      team.pts = team.W * 3 + team.D;
    });

    dispatch(_loadTeams(teams));
  };
};

export const updateTeam = (team, history, route) => {
  return async (dispatch) => {
    team = (await axios.put(`/api/teams/${team.id}`, team)).data;
    history.push(route);
  };
};

export const teams = (state = [], action) => {
  switch (action.type) {
    case LOAD_TEAMS:
      return action.teams;
    default:
      return state;
  }
};
