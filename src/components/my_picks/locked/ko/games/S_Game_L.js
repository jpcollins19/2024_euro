import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { knockoutUsersTeamPick, knockoutClass } from "../../../../../store";

const S_Game_L = ({ game, gameNum, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const authPicksSubmitted = user?.knockChamp ? true : false;

  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

  const usersTeamPick = authPicksSubmitted
    ? knockoutUsersTeamPick(userToUse, game, teams)
    : "";

  const usersPickClass = knockoutClass(userToUse, teams, game);

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
    <div className={`white-text ${gameClass} ${usersPickClass}-box`}>
      <div className="team-ko-img-cont">
        <img className="team-flag-ko" src={usersTeamPick?.flag} />
        <p className={`team-name-ko ${usersPickClass}-text`}>
          {usersTeamPick?.name}
        </p>
      </div>
    </div>
  );
};

export default S_Game_L;
