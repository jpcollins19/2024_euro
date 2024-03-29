import {useSelector} from "react-redux";
import {
    koGameCalc,
    formatTeamClass_KO,
    checkForOpacity_Z_In,
    regionMapper,
    findPreviousGameWinners_R16,
} from "../../../../../../../store";
import KO_Box_Z_In from "../KO_Box_Z_In";

const R8_Column_Z_In = ({side, region, user}) => {
    const teams = useSelector((state) => state.teams);

    const userPickMapper = {
        left: {1: ["Q1", "Q2"], 2: ["Q3", "Q4"]},
        right: {3: ["Q5", "Q6"], 4: ["Q7", "Q8"]},
    };

    const games = userPickMapper[side][region];

    let usersPicksForGame = games.map((game) => user[`knock${game}`]);

    const userHasKOPicks = user?.knockChamp ? true : false;

    const game = `Q${region}`;

    const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

    usersPicksForGame = formatTeamClass_KO(
        usersPicksForGame,
        "small",
        gameInfo,
        "Q"
    );

    usersPicksForGame = checkForOpacity_Z_In(usersPicksForGame, "Q");

    const previousGames = Object.values(regionMapper[region]);

    usersPicksForGame = findPreviousGameWinners_R16(
        user,
        teams,
        usersPicksForGame,
        previousGames
    );

    return (
        <div>
            {usersPicksForGame.map((team, idx) => (
                <div key={idx}>
                    <KO_Box_Z_In side={side} region={region} team={team}/>
                </div>
            ))}
        </div>
    );
};

export default R8_Column_Z_In;
