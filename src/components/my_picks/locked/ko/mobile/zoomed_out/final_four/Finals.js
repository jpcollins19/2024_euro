import { useSelector } from "react-redux";
import {
  koGameCalc,
  formatTeamClass_KO,
  getUserKoResult,
} from "../../../../../../../store";
import KO_Box from "../KO_Box";

const Finals = ({ user, side }) => {
  const teams = useSelector((state) => state.teams);

  const gameNums = [1, 2];

  let usersPicksForGame = gameNums.map((num) => {
    return user[`knockF${num}`];
  });

  const userHasKOPicks = user?.knockChamp ? true : false;

  const gameNum = side === "left" ? 1 : 2;

  const game = `S${gameNum}`;

  const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

  usersPicksForGame = formatTeamClass_KO(
    usersPicksForGame,
    "small",
    gameInfo,
    "S"
  );

  let result = "";

  usersPicksForGame.forEach((team, idx) => {
    const teamIdxToAudit = side === "left" ? 0 : 1;

    if (teamIdxToAudit === idx) {
      if (team.advanceToF) {
        result = "correct";
        return;
      }

      if (team.outOfTourney) result = "wrong";

      // if (!team.outOfTourney && team.advanceToF)
    }
  });

  return (
    <div className="finals-mobile-z-out">
      <KO_Box size={"medium"} result={result} />
    </div>
  );
};

export default Finals;
