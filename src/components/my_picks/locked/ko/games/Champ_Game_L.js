import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { knockoutUsersTeamPick, knockoutClass } from "../../../../../store";

const Champ_Game_L = ({ selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const authPicksSubmitted = user?.knockChamp ? true : false;

  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

  const usersTeamPick = authPicksSubmitted
    ? knockoutUsersTeamPick(userToUse, "Champ", teams)
    : "";

  const usersPickClass = knockoutClass(userToUse, teams, "Champ");

  return (
    <div className={`white-text CL ${usersPickClass}-box`}>
      <div className="team-ko-img-cont">
        <img className="team-flag-ko-champ" src={usersTeamPick?.flag} />
        <p className={`team-name-ko-champ ${usersPickClass}-text`}>
          {usersTeamPick?.name}
        </p>
      </div>
    </div>
  );
};

export default Champ_Game_L;
