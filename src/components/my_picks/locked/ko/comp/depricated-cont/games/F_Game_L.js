import { useSelector } from "react-redux";
import { koGameCalc } from "../../../../../../../store";
import Correct_Team_Cont from "./Correct_Team_Cont";

const F_Game_L = ({ game, user }) => {
  const teams = useSelector((state) => state.teams);

  const gameInfo = koGameCalc(user, game, teams);

  const gameIsFinished = gameInfo.teamThatAdvanced ?? false;

  const flagClass =
    gameInfo?.usersPick?.outOfTourney && !gameInfo?.usersPick?.advanceToChamp
      ? "opacity-60"
      : "";

  return (
    <div className="white-text FL">
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

export default F_Game_L;
