import { useEffect } from "react";

const Q_Game_UL = ({
  gameNum,
  selectedUser,
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
  const gameVar = eval(game);
  const nextGameVar = eval(nextGame);
  const setNextGameVar = eval(setNextGame);

  useEffect(() => {
    switch (nextGame) {
      case "S1":
        nextGameVar &&
          nextGameVar.length < 1 &&
          !S1Changed &&
          selectedUser.knockS1 &&
          setTeam(setNextGameVar, selectedUser.knockS1);
        setChanged(setS1Changed);
        break;
      case "S2":
        nextGameVar &&
          nextGameVar.length < 1 &&
          !S2Changed &&
          selectedUser.knockS2 &&
          setTeam(setNextGameVar, selectedUser.knockS2);
        setChanged(setS2Changed);
        break;
      case "S3":
        nextGameVar &&
          nextGameVar.length < 1 &&
          !S3Changed &&
          selectedUser.knockS3 &&
          setTeam(setNextGameVar, selectedUser.knockS3);
        setChanged(setS3Changed);
        break;
      case "S4":
        nextGameVar &&
          nextGameVar.length < 1 &&
          !S4Changed &&
          selectedUser.knockS4 &&
          setTeam(setNextGameVar, selectedUser.knockS4);
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
      <input
        className={`reg-input ${
          gameVar && gameVar.length > 1 ? "" : "ko-edit-red"
        }`}
        readOnly="readonly"
        defaultValue={gameVar && gameVar}
        onClick={(ev) => {
          setTeam(setNextGameVar, ev.target.value);
          setKoError(false);
        }}
      ></input>
    </div>
  );
};

export default Q_Game_UL;
