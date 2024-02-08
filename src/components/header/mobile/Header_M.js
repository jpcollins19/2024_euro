import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import { cap1stLetter } from "../../../store";
import CssBaseline from "@mui/material/CssBaseline";
import Menu_Chevron from "./Menu_Chevron";
import Misc_Header_Data from "../Misc_Header_Data";

const Header_M = () => {
  const { pathname } = useLocation();

  const currentPage = cap1stLetter(pathname.split("/")[1]);

  const user = useSelector((state) => state.auth);

  let verbiageNeeded = "";

  if (user?.name) {
    verbiageNeeded = currentPage;
  }

  if (currentPage === "Rules") {
    verbiageNeeded = "Rules / General Information";
  }

  if (currentPage === "Admin") {
    const subRoute = pathname.split("/")[2];
    verbiageNeeded = `${currentPage} - ${cap1stLetter(subRoute)}`;
  }

  return (
    <div className="navbar-cont-mobile">
      <Misc_Header_Data user={user} />

      <Link to="/">
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
