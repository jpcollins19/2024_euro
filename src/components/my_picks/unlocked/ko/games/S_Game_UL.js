import { useEffect } from "react";
import { useSelector } from "react-redux";

const S_Game_UL = ({
  setTeam,
  // setChanged,
  setKoError,
  gameNum,
  game,
  S1,
  S2,
  S3,
  S4,
  currentSemiTeamSet,
  CurrentQTeams,
  // nextGame,
  setNextGame,
  // F1,
  // F2,
  setF1,
  setF2,
  // F1Changed,
  // F2Changed,
  // setF1Changed,
  // setF2Changed,
}) => {
  // const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const gameVarTeamObj = teams.find((team) => team.name === eval(game));

  // const nextGameVar = eval(nextGame);
  const setNextGameVar = eval(setNextGame);

  // useEffect(() => {
  //   switch (nextGame) {
  //     case "F1":
  //       nextGameVar.length < 1 &&
  //         !F1Changed &&
  //         user.knockF1 &&
  //         setTeam(setNextGameVar, user.knockF1);
  //       setChanged(setF1Changed);
  //       break;
  //     case "F2":
  //       nextGameVar.length < 1 &&
  //         !F2Changed &&
  //         user.knockF2 &&
  //         setTeam(setNextGameVar, user.knockF2);
  //       setChanged(setF2Changed);
  //       break;
  //     default:
  //       break;
  //   }
  // });

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
