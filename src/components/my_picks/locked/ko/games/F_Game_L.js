import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { koGameCalc } from "../../../../../store";
import Correct_Team_Cont from "./Correct_Team_Cont";

const F_Game_L = ({ game, selectedUser, user }) => {
  const { pathname } = useLocation();

  const teams = useSelector((state) => state.teams);

  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

  const gameInfo = koGameCalc(userToUse, game, teams);

  const gameIsFinished = gameInfo.teamThatAdvanced?.name ? true : false;

  return (
    <div className="white-text FL">
      <div
        className={`${
          gameInfo.usersPick?.outOfTourney ? "wrong" : gameInfo.usersPickClass
        }-box`}
      >
        <div className="team-ko-img-cont">
          {gameInfo.usersPick?.name && (
            <img className="team-flag-ko" src={gameInfo.usersPick?.flag} />
          )}

          {gameIsFinished && gameInfo.usersPickClass === "wrong" && (
            <Correct_Team_Cont gameInfo={gameInfo} />
          )}

          <p
            className={`team-name-ko ${
              gameInfo.usersPick?.outOfTourney
                ? "wrong"
                : gameInfo.usersPickClass
            }-text`}
          >
            {gameInfo.usersPick?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default F_Game_L;
