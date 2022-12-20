import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { knockoutUsersTeamPick, knockoutClass } from "../../../../../store";

const Q_Game_L = ({ game, gameNum, selectedUser }) => {
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

export default Q_Game_L;
