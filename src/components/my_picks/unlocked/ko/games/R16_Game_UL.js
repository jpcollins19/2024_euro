import { useSelector } from "react-redux";
import { findR16Teams } from "../../../../../store";

const R16_Game_UL = ({
  setTeam,
  setKoError,
  game,
  setQ1,
  setQ2,
  setQ3,
  setQ4,
  setQ5,
  setQ6,
  setQ7,
  setQ8,
}) => {
  const teams = useSelector((state) => state.teams);

  const setGame = eval(`set${game}`);

  const obj = {
    Q1: ["A1", "B2"],
    Q2: ["C1", "D2"],
    Q3: ["E1", "F2"],
    Q4: ["G1", "H2"],
    Q5: ["B1", "A2"],
    Q6: ["D1", "C2"],
    Q7: ["F1", "E2"],
    Q8: ["H1", "G2"],
  };

  const teamsPlayingInMatch = findR16Teams(teams, obj[game]);

  return (
    <div className="R16-game">
      {teamsPlayingInMatch.map((team) => (
        <div
          key={team.id}
          className="team-ko-img-cont reg-input"
          onClick={(ev) => {
            setTeam(setGame, team.name);
            setKoError(false);
          }}
        >
          <img className="team-flag-ko" src={team.flag} />
          <p className="team-name-ko-edit">{team.name}</p>
        </div>
      ))}
    </div>
  );
};

export default R16_Game_UL;
