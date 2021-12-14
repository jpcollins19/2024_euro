import { connect } from "react-redux";
import { selectLeague } from "../store";

const Leagues = ({ leagues, selectedLeague, selectALeague }) => {
  return (
    <div id="top-5-leagues-cont" className="top box">
      <h1>
        <a href="/">Top 5 Soccer Leagues</a>
      </h1>
      <div id="league-info-cont-full">
        {leagues.map((league) => (
          <div
            key={league.id}
            className={`league-info-cont-single-border ${
              selectedLeague === league.id ? "selected" : ""
            }`}
          >
            <div
              className="league-info-cont-single"
              onClick={() => selectALeague(league.id)}
            >
              <img
                className="flag"
                src={`../public/pics/${league.name}-flag.png`}
              />
              <h4>{league.name}</h4>
              <img
                className="league-logo"
                src={`../public/pics/${league.name}-logo.png`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => {
  return {
    selectALeague: (id) => {
      dispatch(selectLeague(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Leagues);
