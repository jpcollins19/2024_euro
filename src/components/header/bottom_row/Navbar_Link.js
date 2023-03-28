import { useLocation, Link } from "react-router-dom";
import { urlWord, capFirstLetter } from "../../../store";

const Navbar_Link = ({ page, adminPage }) => {
  const { pathname } = useLocation();

  const pathname1 = pathname.split("/")[1];
  const pathname2 = pathname.split("/")[2];

  // console.log("pathname1", pathname1);
  // console.log("pathname2", pathname2);

  const urlToUse = adminPage ? `/admin/${urlWord(page)}` : `/${urlWord(page)}`;

  let verbiageToDisplay;

  if (page === "rules") {
    verbiageToDisplay = "Rules / General Information";
  } else if (adminPage) {
    verbiageToDisplay = `Admin - ${capFirstLetter(page)}`;
  } else {
    verbiageToDisplay = capFirstLetter(page);
  }

  return (
    <Link
      to={urlToUse}
      className={
        pathname1 === urlWord(page) || pathname2 === urlWord(page)
          ? "selected-url"
          : "not-selected-url"
      }
    >
      {verbiageToDisplay}
    </Link>
  );
};

export default Navbar_Link;
