import { useSelector } from "react-redux";
import { koGameCalc, formatTeamClass_KO } from "../../../../../../store";
import KO_Box_C from "../KO_Box_C";

const Finals = ({ side, user }) => {
  const teams = useSelector((state) => state.teams);

  const userPickForThisSide = user[`knockF${side === "left" ? 1 : 2}`];

  const userPickForOtherSide = user[`knockF${side === "left" ? 2 : 1}`];

  let usersPicksForGame = [userPickForThisSide, userPickForOtherSide];

  const userHasKOPicks = user?.knockChamp ? true : false;

  const game = "Champ";

  const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

  usersPicksForGame = formatTeamClass_KO(usersPicksForGame, "small", gameInfo);

  return <KO_Box_C side={side} team={userPickForThisSide} />;
};

export default Finals;
