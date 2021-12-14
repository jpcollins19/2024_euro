import { connect } from "react-redux";
import { selectTeam } from "../store";

const Teams = ({ leagues, selectedLeague, selectedTeam, selectATeam }) => {
  return leagues
    .filter((league) => selectedLeague === league.id)
    .map((league) => (
      <div key={league.id}>
        <h1>Teams in the {league.name}</h1>
        <div className="team-info-cont">
          <div className="name-cont">
            {league.teams.map((team, idx) => (
              <div key={idx}>
                <div
                  onClick={() => selectATeam(team.id)}
                  className={selectedTeam === team.id ? "selected1" : ""}
                >
                  {team.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    selectATeam: (id) => {
      dispatch(selectTeam(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Teams);
