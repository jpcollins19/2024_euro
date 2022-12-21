import { useEffect } from "react";
import { useSelector } from "react-redux";

const Q_Game_UL = ({
  gameNum,
  setTeam,
  setChanged,
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
  nextGame,
  setNextGame,
  setS1,
  setS2,
  setS3,
  setS4,
  S1,
  S2,
  S3,
  S4,
  S1Changed,
  S2Changed,
  S3Changed,
  S4Changed,
  setS1Changed,
  setS2Changed,
  setS3Changed,
  setS4Changed,
}) => {
  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const gameVarTeamObj = teams.find((team) => team.name === eval(game));

  const nextGameVar = eval(nextGame);
  const setNextGameVar = eval(setNextGame);

  useEffect(() => {
    switch (nextGame) {
      case "S1":
        nextGameVar.length < 1 &&
          !S1Changed &&
          user.knockS1 &&
          setTeam(setNextGameVar, user.knockS1);
        setChanged(setS1Changed);
        break;
      case "S2":
        nextGameVar.length < 1 &&
          !S2Changed &&
          user.knockS2 &&
          setTeam(setNextGameVar, user.knockS2);
        setChanged(setS2Changed);
        break;
      case "S3":
        nextGameVar.length < 1 &&
          !S3Changed &&
          user.knockS3 &&
          setTeam(setNextGameVar, user.knockS3);
        setChanged(setS3Changed);
        break;
      case "S4":
        nextGameVar.length < 1 &&
          !S4Changed &&
          user.knockS4 &&
          setTeam(setNextGameVar, user.knockS4);
        setChanged(setS4Changed);
        break;
      default:
        break;
    }
  });

  let gameClass;

  switch (gameNum) {
    case 1:
      gameClass = "Q1UL";
      break;
    case 5:
      gameClass = "Q1UL";
      break;
    case 2:
      gameClass = "Q2UL";
      break;
    case 6:
      gameClass = "Q2UL";
      break;
    case 3:
      gameClass = "Q3UL";
      break;
    case 7:
      gameClass = "Q3UL";
      break;
    case 4:
      gameClass = "Q4UL";
      break;
    case 8:
      gameClass = "Q4UL";
      break;
    default:
      break;
  }

  return (
    <div className={gameClass}>
      {gameVarTeamObj !== undefined && (
        <div
          className="team-ko-img-cont reg-input"
          onClick={() => {
            setTeam(setNextGameVar, gameVarTeamObj?.name);
            setKoError(false);
          }}
        >
          <img className="team-flag-ko" src={gameVarTeamObj.flag} />
          <p className="team-name-ko-edit">{gameVarTeamObj.name}</p>
        </div>
      )}
    </div>
  );
};

export default Q_Game_UL;
