import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const S_Game_L = ({ game, gameNum, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;

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

export default S_Game_L;
