import Link_MUI from "@mui/material/Link";
import { Link } from "react-router-dom";
import User_Profile_Dropdown from "../../../UserAccount/User_Profile_Dropdown";
import LastUpdated from "./LastUpdated";

const Top_Row = ({ user, tourneyStarted, userSubmittedPicks }) => {
  return (
    <div className="top-row-navbar">
      <Link to="/leaderboard">
        <h1>2024 Euros</h1>
      </Link>

      <LastUpdated
        user={user}
        tourneyStarted={tourneyStarted}
        userSubmittedPicks={userSubmittedPicks}
      />

      <div className="login-cont">
        {user?.id ? (
          <User_Profile_Dropdown />
        ) : (
          <Link_MUI
            href="#/sign_in"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Sign In
          </Link_MUI>
        )}
      </div>
    </div>
  );
};

export default Top_Row;
