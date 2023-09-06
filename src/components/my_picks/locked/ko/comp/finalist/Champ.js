import { useSelector } from "react-redux";
import { koGameCalc, formatTeamClass_KO } from "../../../../../../store";
import KO_Box_C from "../KO_Box_C";

const Champ = ({ side, user }) => {
  const teams = useSelector((state) => state.teams);

  const userPickForThisGame = user.knockChamp;

  const S1 = user.knockF1;
  const S2 = user.knockF2;

  let usersPicksForGame = [S1, S2];

  const userHasKOPicks = user?.knockChamp ? true : false;

  const game = "Champ";

  const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

  const worldCupWinner = gameInfo?.teamThatAdvanced;

  const showCorrectTeam =
    worldCupWinner &&
    userPickForThisGame?.name !== gameInfo?.teamThatAdvanced?.name;

  usersPicksForGame = formatTeamClass_KO(usersPicksForGame, "large", gameInfo);

  return (
    <div>
      <KO_Box_C
        champ={true}
        team={userPickForThisGame ? userPickForThisGame : usersPicksForGame[0]}
        showCorrectTeam={showCorrectTeam}
        worldCupWinner={worldCupWinner}
      />
      <div className="trophy"></div>
    </div>
  );
};

export default Champ;
