import React, { Component } from "react";
import store from "./store";
import { connect } from "react-redux";
import Leagues from "./leagues/Leagues";
import Teams from "./teams/Teams";
import Players from "./players/Players";
import { loadLeagues, loadTeams, loadPlayers } from "./store";

class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
  }

  async componentDidMount() {
    store.dispatch(loadLeagues());
    store.dispatch(loadTeams());
    store.dispatch(loadPlayers());

    const unsubscribe = store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  render() {
    return (
      <main>
        <Leagues />
        <div className="bottom box">
          <div id="team-names-box" className="left box">
            <Teams />
          </div>
          <div id="player-name-box" className="right box">
            <Players />
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(App);
