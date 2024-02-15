import {useSelector} from "react-redux";
import {
    koGameCalc,
    formatTeamClass_KO,
    getUserKoResult,
} from "../../../../../../../store";
import KO_Box from "../KO_Box";

const R8_Column = ( {user, region, side} ) => {
    const teams = useSelector(( state ) => state.teams);

    const userPickMapper = {
        left: {1: ["Q1", "Q2"], 2: ["Q3", "Q4"]},
        right: {3: ["Q5", "Q6"], 4: ["Q7", "Q8"]},
    };

    const games = userPickMapper[side][region];

    let usersPicksForGame = games.map(( game ) => user[`knock${game}`]);

    const userHasKOPicks = !!user?.knockChamp;

    const game = `Q${region}`;

    const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

    usersPicksForGame = formatTeamClass_KO(
        usersPicksForGame,
        "small",
        gameInfo,
        "Q"
    );

    const result = getUserKoResult(usersPicksForGame);

    return (
        <div>
            <KO_Box size={"small"} user={user} result={result}/>
        </div>
    );
};

export default R8_Column;
