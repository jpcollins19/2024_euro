import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { deletePlayer, createPlayer } from "../store";

class Players extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  async componentDidMount() {
    const unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    const { teams, selectedTeam, playerName } = this.state;
    const { removeAPlayer, createAPlayer } = this.props;
    return teams
      .filter((team) => selectedTeam === team.id)
      .map((team) => (
        <div key={team.id}>
          <h1>{team.name} Players</h1>
          <div className="input-name-cont">
            <input
              placeholder="insert name"
              value={playerName}
              onChange={(ev) => this.setState({ newPlayer: ev.target.value })}
            />
          </div>
          <div className="button-cont">
            <button
              id="add"
              onClick={() =>
                createAPlayer(this.state.newPlayer, this.state.selectedTeam)
              }
            >
              Add A Player
            </button>
          </div>
          <div className="player-info-cont">
            <div className="player-name-cont">
              {team.players.map((player) => (
                <div key={player.id}>
                  {player.name}{" "}
                  <button onClick={() => removeAPlayer(player)}>Delete</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      ));
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    removeAPlayer: (player) => {
      dispatch(deletePlayer(player));
    },
    createAPlayer: async (player, teamId) => {
      dispatch(createPlayer(player, teamId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
