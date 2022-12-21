import { useEffect } from "react";
import { useSelector } from "react-redux";
import { findR16Teams } from "../../../../../store";

const R16_Game_UL = ({
  setTeam,
  setKoError,
  game,
  Q1,
  Q2,
  Q3,
  Q4,
  Q5,
  Q6,
  Q7,
  Q8,
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
  const user = useSelector((state) => state.auth);

  const setGame = eval(`set${game}`);
  const gameVar = eval(game);

  const twoTeams = [1, 1];

  useEffect(() => {
    switch (game) {
      case "Q1":
        gameVar?.length < 1 && user?.knockQ1 && setTeam(setGame, user?.knockQ1);
        break;
      case "Q2":
        gameVar?.length < 1 && user?.knockQ2 && setTeam(setGame, user?.knockQ2);
        break;
      case "Q3":
        gameVar?.length < 1 && user?.knockQ3 && setTeam(setGame, user?.knockQ3);
        break;
      case "Q4":
        gameVar?.length < 1 && user?.knockQ4 && setTeam(setGame, user?.knockQ4);
        break;
      case "Q5":
        gameVar?.length < 1 && user?.knockQ5 && setTeam(setGame, user?.knockQ5);
        break;
      case "Q6":
        gameVar?.length < 1 && user?.knockQ6 && setTeam(setGame, user?.knockQ6);
        break;
      case "Q7":
        gameVar?.length < 1 && user?.knockQ7 && setTeam(setGame, user?.knockQ7);
        break;
      case "Q8":
        gameVar?.length < 1 && user?.knockQ8 && setTeam(setGame, user?.knockQ8);
        break;
      default:
        break;
    }
  });

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
    <div className="R16-game white-text">
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
