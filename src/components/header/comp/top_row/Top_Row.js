import Link from "@mui/material/Link";
import User_Profile_Dropdown from "../../../UserAccount/User_Profile_Dropdown";
import LastUpdated from "./LastUpdated";

const Top_Row = ({ user, tourneyStarted, userSubmittedPicks }) => {
  return (
    <div className="top-row-navbar">
      <h1>2024 Euros</h1>

      <LastUpdated
        user={user}
        tourneyStarted={tourneyStarted}
        userSubmittedPicks={userSubmittedPicks}
      />

      <div className="login-cont">
        {user?.id ? (
          <User_Profile_Dropdown />
        ) : (
          <Link
            href="#/sign_in"
            style={{ textDecoration: "none", color: "blue" }}
          >
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Top_Row;
