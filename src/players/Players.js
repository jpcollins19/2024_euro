import React, { Component } from "react";
import { connect } from "react-redux";
import store from "../store";
import { deletePlayer } from "../store";

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
    const { teams, selectedTeam, removePlayer } = this.state;
    // const { removePlayer } = this;
    return teams
      .filter((team) => selectedTeam === team.id)
      .map((team) => (
        <div key={team.id}>
          <h1>{team.name} Players</h1>
          <div className="input-name-cont">
            <input id="add-player-name" placeholder="insert name" />
          </div>
          <div className="button-cont">
            {/* <button id="add" onClick={() => addPlayer(name)}>
                Add A Player
              </button> */}
          </div>
          <div className="player-info-cont">
            <div className="player-name-cont">
              {team.players.map((player) => (
                <div key={player.id}>
                  {player.name}{" "}
                  <button onClick={() => removePlayer(player)}>Delete</button>
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
    removePlayer: (player) => {
      dispatch(deletePlayer(player));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Players);
