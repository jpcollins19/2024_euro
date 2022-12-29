import { useSelector } from "react-redux";

const Q_Game_UL = ({
  gameNum,
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
  setNextGame,
  setS1,
  setS2,
  setS3,
  setS4,
}) => {
  const teams = useSelector((state) => state.teams);

  const gameVarTeamObj = teams.find((team) => team.name === eval(game));

  const setNextGameVar = eval(setNextGame);

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
      <div
        className={`team-ko-img-cont reg-input ko-edit${
          gameVarTeamObj == undefined ? "-red" : ""
        }`}
        onClick={() => {
          setTeam(setNextGameVar, gameVarTeamObj?.name);
          setKoError(false);
        }}
      >
        {gameVarTeamObj !== undefined && (
          <img className="team-flag-ko" src={gameVarTeamObj.flag} />
        )}

        {gameVarTeamObj !== undefined && (
          <p className="team-name-ko-edit">{gameVarTeamObj.name}</p>
        )}
      </div>
    </div>
  );
};

export default Q_Game_UL;
