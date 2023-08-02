import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { koGameCalc, isPoolPicksPage } from "../../../../../store";
import Correct_Team_Cont from "./Correct_Team_Cont";

const Q_Game_L = ({ game, gameNum, selectedUser, user }) => {
  const { pathname } = useLocation();

  const teams = useSelector((state) => state.teams);

  const poolPicksPage = isPoolPicksPage(pathname);

  const userToUse = poolPicksPage ? selectedUser : user;

  const gameInfo = koGameCalc(userToUse, game, teams);

  let flagClass =
    gameInfo?.usersPick?.outOfTourney && !gameInfo?.usersPick?.advanceToS
      ? "opacity-60"
      : "";

  const gameIsFinished = gameInfo.teamThatAdvanced?.name ?? false;

  let gameClass;

  switch (gameNum) {
    case 1:
      gameClass = "Q1L";
      break;
    case 5:
      gameClass = "Q1L";
      break;
    case 2:
      gameClass = "Q2L";
      break;
    case 6:
      gameClass = "Q2L";
      break;
    case 3:
      gameClass = "Q3L";
      break;
    case 7:
      gameClass = "Q3L";
      break;
    case 4:
      gameClass = "Q4L";
      break;
    case 8:
      gameClass = "Q4L";
      break;
    default:
      break;
  }

  return (
    <div className={`white-text ${gameClass}`}>
      <div className={`${gameInfo.usersPickClass}-box`}>
        <div className="team-ko-img-cont">
          {gameInfo.usersPick?.name && (
            <img
              className={`team-flag-ko ${gameInfo.usersPickClass}-flag ${flagClass}`}
              src={gameInfo.usersPick?.flag}
            />
          )}

          {gameIsFinished && gameInfo.usersPickClass === "wrong" && (
            <Correct_Team_Cont gameInfo={gameInfo} />
          )}

          <p className={`team-name-ko ${gameInfo.usersPickClass}-text`}>
            {gameInfo.usersPick?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Q_Game_L;
