import {useSelector} from "react-redux";
import {
    koGameCalc,
    checkForOpacity_Z_In,
    formatTeamClass_KO_Z_In_FF,
    userPickMapper_FF,
    findPreviousGameWinner_FF,
} from "../../../../../../../store";
import KO_Box_Z_In from "../KO_Box_Z_In";

const Final_Four_Z_In = ( {side, user} ) => {
    const teams = useSelector(( state ) => state.teams);

    const teamMapper = {top: [1, 3], bottom: [2, 4]};

    let usersPicksForGame = teamMapper[side].map(( num ) => {
        let team = user[`knockS${num}`];

        if (!team) {
            return {};
        }

        team.showPreviousWinnerTop = null;
        team.showPreviousWinnerBottom = null;

        const game = `Q${num}`;

        const userHasKOPicks = !!user?.knockChamp;

        const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

        team.gameInfo = gameInfo;

        const previousGames = Object.values(userPickMapper_FF[num]);

        team = findPreviousGameWinner_FF(teams, team, previousGames, side);

        return team;
    });

    usersPicksForGame = formatTeamClass_KO_Z_In_FF(usersPicksForGame, "small");

    usersPicksForGame = checkForOpacity_Z_In(usersPicksForGame, "S");

    return usersPicksForGame.map(( team, idx ) => (
        <KO_Box_Z_In key={idx} side={side} team={team}/>
    ));
};

export default Final_Four_Z_In;
