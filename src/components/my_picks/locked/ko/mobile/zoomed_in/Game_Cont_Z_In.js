import { useSelector } from "react-redux";
import {
  determineR16Seeding,
  findR16Teams,
  regionMapper,
  koGameCalc,
  formatTeamClass_KO,
  checkForOpacity_Z_In,
} from "../../../../../../store";
import KO_Box_Z_In from "./KO_Box_Z_In";

const Game_Cont_Z_In = ({ side, regoin, gameNum, user }) => {
  const teams = useSelector((state) => state.teams);

  const seedMatchups = determineR16Seeding(teams);

  const game = regionMapper[regoin][gameNum];

  let usersPicksForGame = findR16Teams(teams, seedMatchups[game]);

  const userHasKOPicks = user?.knockChamp ? true : false;

  const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

  usersPicksForGame = formatTeamClass_KO(
    usersPicksForGame,
    "small",
    gameInfo,
    "R16"
  );

  usersPicksForGame = checkForOpacity_Z_In(usersPicksForGame, "R16");

  return (
    <div>
      {usersPicksForGame.map((team, idx) => (
        <KO_Box_Z_In
          key={idx}
          side={side}
          team={team}
          user={user}
          showCorrectTeam={false}
        />
      ))}
    </div>
  );
};

export default Game_Cont_Z_In;
