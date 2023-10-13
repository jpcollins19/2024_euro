import { useSelector } from "react-redux";
import {
  koGameCalc,
  formatTeamClass_KO,
  findPreviousGameWinner_Finals,
} from "../../../../../../../store";
import KO_Box_Z_In from "../KO_Box_Z_In";

const Champ_Z_In = ({ side, user }) => {
  const teams = useSelector((state) => state.teams);

  let userPickForThisGame = user.knockChamp;

  if (userPickForThisGame) {
    userPickForThisGame.showPreviousWinnerTop = null;
  }

  const S1 = user.knockF1;
  const S2 = user.knockF2;

  let usersPicksForGame = [S1, S2];

  const userHasKOPicks = user?.knockChamp ? true : false;

  const gameInfo = userHasKOPicks ? koGameCalc(user, "Champ", teams) : null;

  usersPicksForGame = formatTeamClass_KO(usersPicksForGame, "large", gameInfo);

  const previousGames = Array(8)
    .fill("")
    .map((value, idx) => `R16_${idx + 1}`);

  userPickForThisGame = findPreviousGameWinner_Finals(
    user,
    teams,
    userPickForThisGame,
    previousGames,
    "Champ"
  );

  if (userPickForThisGame?.outOfTourney && !userPickForThisGame?.advanceToChamp)
    userPickForThisGame.opacity = "opacity-60";

  return (
    <div>
      <KO_Box_Z_In
        champ={true}
        team={userPickForThisGame ? userPickForThisGame : usersPicksForGame[0]}
      />
    </div>
  );
};

export default Champ_Z_In;
