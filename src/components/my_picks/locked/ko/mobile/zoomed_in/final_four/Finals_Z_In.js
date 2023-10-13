import { useSelector } from "react-redux";
import {
  koGameCalc,
  formatTeamClass_KO,
  finalsMapper_Z_In,
  findPreviousGameWinner_Finals,
} from "../../../../../../../store";
import KO_Box_Z_In from "../KO_Box_Z_In";

const Finals_Z_In = ({ side, user }) => {
  const teams = useSelector((state) => state.teams);

  const userPickForThisSide = user[`knockF${side === "left" ? 1 : 2}`];

  const userPickForOtherSide = user[`knockF${side === "left" ? 2 : 1}`];

  if (userPickForThisSide) {
    userPickForThisSide.showPreviousWinnerTop = null;
    userPickForThisSide.showPreviousWinnerBottom = null;
  }

  if (userPickForOtherSide) {
    userPickForOtherSide.showPreviousWinnerTop = null;
    userPickForOtherSide.showPreviousWinnerBottom = null;
  }

  let usersPicksForGame = [userPickForThisSide, userPickForOtherSide];

  const userHasKOPicks = user?.knockChamp ? true : false;

  const game = side === "left" ? "S1" : "S2";

  const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

  usersPicksForGame = formatTeamClass_KO(
    usersPicksForGame,
    "small",
    gameInfo,
    "F"
  );

  const previousGames = Object.values(finalsMapper_Z_In[side]);

  usersPicksForGame.forEach((userPick, idx) => {
    if (idx === 0) {
      userPick = findPreviousGameWinner_Finals(
        user,
        teams,
        userPick,
        previousGames,
        "F"
      );

      if (userPick.outOfTourney && !userPick.advanceToF)
        userPick.opacity = "opacity-60";
    }
  });

  return (
    <KO_Box_Z_In
      side={side}
      team={userPickForThisSide ? userPickForThisSide : usersPicksForGame[0]}
    />
  );
};

export default Finals_Z_In;
