import { useSelector } from "react-redux";
import { koGameCalc, formatTeamClass_KO } from "../../../../../../../store";
import KO_Box from "../KO_Box";

const Final_Four = ({ user, side }) => {
  const teams = useSelector((state) => state.teams);

  const teamMapper = { left: [1, 2], right: [3, 4] };

  let usersPicksForGame = teamMapper[side].map((num) => {
    return user[`knockS${num}`];
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

  const gameResults = usersPicksForGame.map((team) => {
    if (team.outOfTourney) {
      return team.advanceToS ? "correct" : "wrong";
    }

    return !team.outOfTourney && team.advanceToS && "correct";
  });

  return (
    <div>
      {gameResults.map((result, idx) => (
        <div key={idx} className="final-four-mobile-z-out">
          <KO_Box size="medium-small" result={result} />
        </div>
      ))}
    </div>
  );
};

export default Final_Four;
