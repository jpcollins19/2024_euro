import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loadUsers,
  findJoe,
  getCurrentScores,
  createPreTourneyDataNotAvailableYetMessage,
  shouldPayoutShow,
  getScreenWidth,
} from "../../store";
import Leaderboard_Cont from "./Leaderboard_Cont";
import Loading from "../Misc/Loading";
import Payout from "./Payout";
import "./Leaderboard.css";

const Leaderboard_Page = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(loadUsers());
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 500);

  const joe = findJoe(useSelector((state) => state.users));

  const users = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker
  );

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const rankInfo =
    joe?.tourneyStage > 1 ? getCurrentScores(users, teams, joe) : null;

  const showPayout = shouldPayoutShow(joe, user);

  const isMobile = getScreenWidth("max", 65);

  return loading ? (
    <Loading />
  ) : (
    <div className="leaderboard-page">
      {!isMobile && showPayout && <Payout />}

      {joe?.tourneyStage === 1 ? (
        <h1 className="pre-tourney-header">
          {createPreTourneyDataNotAvailableYetMessage("Leaderboard")}
        </h1>
      ) : user?.tiebreaker ? (
        <Leaderboard_Cont joe={joe} rankInfo={rankInfo} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Leaderboard_Page;
