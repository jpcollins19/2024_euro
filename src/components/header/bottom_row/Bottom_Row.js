import Toolbar from "@mui/material/Toolbar";
import Link from "@mui/material/Link";
import { useLocation } from "react-router-dom";
import { urlWord, capFirstLetter } from "../../../store";
import Navbar_Link from "./Navbar_Link";

const Bottom_Row = ({ user }) => {
  const { pathname } = useLocation();

  const adminOptions = ["users", "groups", "teams"];
  const navOptions = ["leaderboard", "my picks", "pool picks", "group details"];

  return (
    <div className="bottom-row-navbar">
      <nav>
        {user?.admin &&
          adminOptions.map((word) => (
            <Link
              key={word}
              variant="button"
              href={`#/admin/${urlWord(word)}`}
              sx={{ my: 1, mx: 1, textDecoration: "none" }}
              color={
                pathname === `/admin/${urlWord(word)}`
                  ? "#ede7f6"
                  : "text.primary"
              }
              fontWeight="bold"
              backgroundColor={
                pathname === `/admin/${urlWord(word)}` ? "#115293" : "inherit"
              }
              borderRadius="4rem"
              padding="7"
            >
              Admin - {word}
            </Link>
          ))}
        {user?.id &&
          navOptions.map((word) => (
            <Link
              key={word}
              variant="button"
              href={`#/${urlWord(word)}`}
              sx={{ my: 1, mx: 1, textDecoration: "none" }}
              color={
                pathname === `/${urlWord(word)}` ? "#ede7f6" : "text.primary"
              }
              fontWeight="bold"
              backgroundColor={
                pathname === `/${urlWord(word)}` ? "#115293" : "inherit"
              }
              borderRadius="4rem"
              padding="7"
            >
              {word}
            </Link>
          ))}
        <Link
          variant="button"
          href="#rules"
          sx={{ my: 1, mx: 1, textDecoration: "none" }}
          color={pathname === "/rules" ? "#ede7f6" : "text.primary"}
          fontWeight="bold"
          backgroundColor={pathname === "/rules" ? "#115293" : "inherit"}
          borderRadius="4rem"
          padding="7"
        >
          Rules / General Information
        </Link>
      </nav>
    </div>
  );
};

export default Bottom_Row;

{
  /* <nav className="bottom-row-navbar">
{user?.admin &&
  adminOptions.map((page, idx) => (
    <Navbar_Link key={idx} page={page} adminPage={true} />
  ))}
{user?.id &&
  navOptions.map((page, idx) => (
    <Navbar_Link key={idx} page={page} adminPage={false} />
  ))}
<Navbar_Link page={"rules"} adminPage={false} />
</nav> */
}
