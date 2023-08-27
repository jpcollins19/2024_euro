import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { findJoe, cap1stLetter } from "../../../store";
import CssBaseline from "@mui/material/CssBaseline";
import Menu_Chevron from "./Menu_Chevron";
// import Top_Row from "./top_row/Top_Row";
// import Bottom_Row from "./bottom_row/Bottom_Row";

const Header_M = () => {
  const { pathname } = useLocation();

  const currentPage = cap1stLetter(pathname.split("/")[1]);

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  // const tourneyStarted = joe?.tourneyStage !== 1;
  // const userSubmittedPicks = user?.tiebreaker ?? false;

  let verbiageNeeded = "";

  if (user?.name) {
    verbiageNeeded = currentPage;
  }

  if (currentPage === "Rules") {
    verbiageNeeded = "Rules / General Information";
  }

  return (
    <div className="navbar-cont-mobile">
      <Link to="/" className="mobile-header-title">
        <CssBaseline />
        2024 Euros
      </Link>

      <div className={`url-mobile${verbiageNeeded !== "" ? "-selected" : ""}`}>
        {verbiageNeeded}
      </div>

      <Menu_Chevron />
    </div>
  );
};

export default Header_M;
