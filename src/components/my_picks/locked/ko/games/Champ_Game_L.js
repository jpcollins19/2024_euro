import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { koGameCalc } from "../../../../../store";

const Champ_Game_L = ({ selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

  const gameInfo = koGameCalc(userToUse, "Champ", teams);

  return (
    <div
      className={`white-text CL ${
        gameInfo.usersPick?.name ? `${gameInfo.usersPickClass}-box` : ""
      }`}
    >
      <div className="team-ko-img-cont">
        {gameInfo.usersPick?.name && (
          <img className="team-flag-ko-champ" src={gameInfo.usersPick?.flag} />
        )}

        <p className={`team-name-ko-champ ${gameInfo.usersPickClass}-text`}>
          {gameInfo.usersPick?.name}
        </p>
      </div>
    </div>
  );
};

export default Champ_Game_L;
