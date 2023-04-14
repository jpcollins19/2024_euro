import { useLocation, Link } from "react-router-dom";
import { urlWord, cap1stLetter } from "../../../store";

const Navbar_Link = ({ page, adminPage, user }) => {
  const { pathname } = useLocation();

  const pathname1 = pathname.split("/")[1];
  const pathname2 = pathname.split("/")[2];

  const urlToUse = adminPage
    ? `/admin/${urlWord(page)}`
    : page === "pool picks"
    ? `/${urlWord(page)}/${user?.id}`
    : `/${urlWord(page)}`;

  let verbiageToDisplay;

  if (page === "rules") {
    verbiageToDisplay = "Rules / General Information";
  } else if (adminPage) {
    verbiageToDisplay = `Admin - ${cap1stLetter(page)}`;
  } else {
    verbiageToDisplay = cap1stLetter(page);
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
