import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const Q_Game_L = ({ game, gameNum, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user && user.knockChamp;

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
      <div
        className={knockoutPartClassPush(
          pathname === "/pool_picks" ? selectedUser : user,
          teams,
          game
        )}
      >
        {userAudit &&
          knockoutPartTeamPush(
            pathname === "/pool_picks" ? selectedUser : user,
            game
          )}
      </div>
    </div>
  );
};

export default Q_Game_L;
