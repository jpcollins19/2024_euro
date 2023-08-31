import { useSelector } from "react-redux";
import { koGameCalc, formatTeamClass_KO } from "../../../../../../store";
import KO_Box_C from "../KO_Box_C";

const R8_Column_C = ({ side, regoin, user }) => {
  const teams = useSelector((state) => state.teams);

  const userPickMapper = {
    left: { 1: ["Q1", "Q2"], 2: ["Q3", "Q4"] },
    right: { 3: ["Q5", "Q6"], 4: ["Q7", "Q8"] },
  };

  const games = userPickMapper[side][regoin];

  let usersPicksForGame = games.map((game) => user[`knock${game}`]);

  const userHasKOPicks = user?.knockChamp ? true : false;

  const game = `Q${regoin}`;

  const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

  usersPicksForGame = formatTeamClass_KO(
    usersPicksForGame,
    "small",
    gameInfo,
    "Q"
  );

  return (
    <div>
      {usersPicksForGame.map((team, idx) => (
        <div key={idx}>
          <KO_Box_C side={side} regoin={regoin} team={team} />
        </div>
      ))}
    </div>
  );
};

export default R8_Column_C;
