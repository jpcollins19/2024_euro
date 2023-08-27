import { useSelector } from "react-redux";
import { koGameCalc, formatTeamClass_KO } from "../../../../../../store";
import KO_Box_C from "../KO_Box_C";

const R4_Column_C = ({ side, regoin, user }) => {
  const teams = useSelector((state) => state.teams);

  const usersRegoinalWinner = user[`knockS${regoin}`];

  const otherRegoin = regoin % 2 === 0 ? regoin - 1 : regoin + 1;

  const usersOtherRegoinalWinner = user[`knockS${otherRegoin}`];

  let usersPicksForGame = [usersRegoinalWinner, usersOtherRegoinalWinner];

  const userHasKOPicks = user?.knockChamp ? true : false;

  const gameNum = regoin <= 2 ? 1 : 2;

  const game = `S${gameNum}`;

  const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

  usersPicksForGame = formatTeamClass_KO(usersPicksForGame, "small", gameInfo);

  return (
    <div>
      <div>
        <KO_Box_C side={side} team={usersRegoinalWinner} regoin={regoin} />
      </div>
    </div>
  );
};

export default R4_Column_C;
