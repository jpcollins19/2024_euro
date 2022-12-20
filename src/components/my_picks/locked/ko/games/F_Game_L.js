import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { knockoutUsersTeamPick, knockoutClass } from "../../../../../store";

const F_Game_L = ({ game, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const authPicksSubmitted = user?.knockChamp ? true : false;

  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

  const usersTeamPick = authPicksSubmitted
    ? knockoutUsersTeamPick(userToUse, game, teams)
    : "";

  const usersPickClass = knockoutClass(userToUse, teams, game);

  return (
    <div className={`white-text FL ${usersPickClass}-box`}>
      <div className="team-ko-img-cont">
        <img className="team-flag-ko" src={usersTeamPick?.flag} />
        <p className={`team-name-ko ${usersPickClass}-text`}>
          {usersTeamPick?.name}
        </p>
      </div>
    </div>
  );
};

export default F_Game_L;
