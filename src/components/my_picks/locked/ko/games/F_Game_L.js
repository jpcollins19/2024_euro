import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  knockoutPartTeamPush,
  knockoutPartClassPush,
} from "../../../../../store";

const F_Game_L = ({ game, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const userAudit = user.knockChamp;

  return (
    <div className="white-text FL">
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

export default F_Game_L;
