import { useEffect } from "react";

const S_Game_UL = ({
  selectedUser,
  setTeam,
  setChanged,
  setKoError,
  gameNum,
  game,
  S1,
  S2,
  S3,
  S4,
  currentSemiTeamSet,
  CurrentQTeams,
  nextGame,
  setNextGame,
  F1,
  F2,
  setF1,
  setF2,
  F1Changed,
  F2Changed,
  setF1Changed,
  setF2Changed,
}) => {
  const gameVar = eval(game);
  const nextGameVar = eval(nextGame);
  const setNextGameVar = eval(setNextGame);

  useEffect(() => {
    switch (nextGame) {
      case "F1":
        nextGameVar &&
          nextGameVar.length < 1 &&
          !F1Changed &&
          selectedUser.knockF1 &&
          setTeam(setNextGameVar, selectedUser.knockF1);
        setChanged(setF1Changed);
        break;
      case "F2":
        nextGameVar &&
          nextGameVar.length < 1 &&
          !F2Changed &&
          selectedUser.knockF2 &&
          setTeam(setNextGameVar, selectedUser.knockF2);
        setChanged(setF2Changed);
        break;
      default:
        break;
    }
  });

  const teamAnswer = gameVar && CurrentQTeams.includes(gameVar) ? gameVar : "";

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
      <input
        className={`reg-input ${
          teamAnswer && teamAnswer.length > 1 ? "" : "ko-edit-red"
        }`}
        readOnly="readonly"
        defaultValue={teamAnswer && teamAnswer}
        onClick={(ev) => {
          setTeam(setNextGameVar, ev.target.value);
          setKoError(false);
        }}
      ></input>
    </div>
  );
};

export default S_Game_UL;
