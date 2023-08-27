import { useSelector } from "react-redux";
import { findJoe } from "../../../store";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Top_Row from "./top_row/Top_Row";
import Bottom_Row from "./bottom_row/Bottom_Row";

const Header_C = () => {
  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const tourneyStarted = joe?.tourneyStage !== 1;
  const userSubmittedPicks = user?.tiebreaker ?? false;

  return (
    <div className="navbar-cont-comp">
      <CssBaseline />
      <AppBar position="sticky" color="default">
        <Top_Row
          user={user}
          tourneyStarted={tourneyStarted}
          userSubmittedPicks={userSubmittedPicks}
        />

        <Bottom_Row user={user} />
      </AppBar>
    </div>
  );
};

export default Header_C;
