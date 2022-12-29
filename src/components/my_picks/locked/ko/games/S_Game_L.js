import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { koGameCalc } from "../../../../../store";

const S_Game_L = ({ game, gameNum, selectedUser, user }) => {
  const { pathname } = useLocation();

  const teams = useSelector((state) => state.teams);

  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

  const gameInfo = koGameCalc(userToUse, game, teams);

  let gameClass;

  switch (gameNum % 2) {
    case 1:
      gameClass = "S1L";
      break;
    case 0:
      gameClass = "S2L";
      break;
    default:
      break;
  }

  return (
    <div
      className={`white-text ${gameClass} ${
        gameInfo.usersPick?.name ? `${gameInfo.usersPickClass}-box` : ""
      }`}
    >
      <div className="team-ko-img-cont">
        {gameInfo.usersPick?.name && (
          <img className="team-flag-ko" src={gameInfo.usersPick?.flag} />
        )}

        <p className={`team-name-ko ${gameInfo.usersPickClass}-text`}>
          {gameInfo.usersPick?.name}
        </p>
      </div>
    </div>
  );
};

export default S_Game_L;
