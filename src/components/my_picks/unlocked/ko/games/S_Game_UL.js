import { useEffect } from "react";
import { useSelector } from "react-redux";

const S_Game_UL = ({
  setTeam,
  setKoError,
  gameNum,
  game,
  S1,
  S2,
  S3,
  S4,
  currentSemiTeamSet,
  CurrentQTeams,
  setNextGame,
  setF1,
  setF2,
}) => {
  const teams = useSelector((state) => state.teams);

  const gameVarTeamObj = teams.find((team) => team.name === eval(game));

  const setNextGameVar = eval(setNextGame);

  const teamAnswer =
    gameVarTeamObj?.name && CurrentQTeams.includes(gameVarTeamObj?.name)
      ? gameVarTeamObj?.name
      : "";

  const teamAnswerObj = teams.find((team) => team.name === teamAnswer);

  let gameClass;

  switch (gameNum % 2) {
    case 1:
      gameClass = "S1UL";
      break;
    case 0:
      gameClass = "S2UL";
      break;
    default:
      break;
  }

  useEffect(() => {
    teamAnswer === "" && setTeam(currentSemiTeamSet, "");
  }, [teamAnswer]);

  return (
    <div className={gameClass}>
      <div
        className={`team-ko-img-cont reg-input ko-edit${
          gameVarTeamObj == undefined ? "-red" : ""
        }`}
        onClick={() => {
          setTeam(setNextGameVar, teamAnswerObj?.name);
          setKoError(false);
        }}
      >
        {teamAnswer.length ? (
          <div>
            <img className="team-flag-ko" src={teamAnswerObj.flag} />
            <p className="team-name-ko-edit">{teamAnswerObj.name}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default S_Game_UL;
