import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { me, findJoe } from "../../store";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Top_Row from "./top_row/Top_Row";
import Bottom_Row from "./bottom_row/Bottom_Row";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  const user = useSelector((state) => state.auth);

  const joe = findJoe(useSelector((state) => state.users));

  const tourneyStarted = joe?.tourneyStage !== 1;
  const userSubmittedPicks = user?.tiebreaker ?? false;

  return (
    <div className="navbar-cont">
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

export default Header;
