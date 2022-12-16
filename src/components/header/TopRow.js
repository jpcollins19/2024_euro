import Link from "@mui/material/Link";
import User_Profile_Dropdown from "../UserAccount/User_Profile_Dropdown";
import LastUpdated from "./LastUpdated";

const TopRow = ({ user, tourneyStarted, userSubmittedPicks }) => {
  return (
    <div className="login-row">
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

export default TopRow;
