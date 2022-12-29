import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { koGameCalc } from "../../../../../store";

const F_Game_L = ({ game, selectedUser, user }) => {
  const { pathname } = useLocation();

  const teams = useSelector((state) => state.teams);

  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

  const gameInfo = koGameCalc(userToUse, game, teams);

  return (
    <div
      className={`white-text FL ${
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

export default F_Game_L;
