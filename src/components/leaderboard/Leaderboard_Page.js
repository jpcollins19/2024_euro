import { useState } from "react";
import { useSelector } from "react-redux";
import { findJoe, getCurrentScores } from "../../store";
import Leaderboard_Cont from "./Leaderboard_Cont";
import Loading from "../Misc/Loading";
import Payout from "./Payout";
import "./Leaderboard.css";

const Leaderboard_Page = () => {
  const [loading, setLoading] = useState(true);

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
    joe?.tourneyStage > 1 ? getCurrentScores(users, teams) : null;

  const tourneyStarted = joe?.tourneyStage !== 1;
  const userSubmittedPicks = user?.tiebreaker ?? false;

  const shouldPayoutShow = () => {
    return (
      (!tourneyStarted && user?.id) || (tourneyStarted && userSubmittedPicks)
    );
  };

  return loading ? (
    <Loading />
  ) : (
    <div className="leaderboard-page">
      {shouldPayoutShow() && <Payout />}

      {joe?.tourneyStage === 1 ? (
        <h1 className="pre-tourney-header">
          Leaderboard will not be viewable until the tournament commences on
          11/20/22
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
