import {useSelector} from "react-redux";
import {
    determineR16Seeding,
    regionMapper,
    findR16Teams,
    koGameCalc,
    formatTeamClass_KO,
    getUserKoResult,
} from "../../../../../../../store";
import KO_Box from "../KO_Box";

const R16_Column = ({user, region}) => {
    const teams = useSelector((state) => state.teams);

    const seedMatchups = determineR16Seeding(teams);

    const gameResults = [1, 2].map((gameNum) => {
        const game = regionMapper[region][gameNum];

        let usersPicksForGame = findR16Teams(teams, seedMatchups[game]);

        const userHasKOPicks = user?.knockChamp ? true : false;

        const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

        usersPicksForGame = formatTeamClass_KO(
            usersPicksForGame,
            "small",
            gameInfo,
            "R16"
        );

        return getUserKoResult(usersPicksForGame);
    });

    return (
        <div>
            {gameResults.map((result, idx) => (
                <KO_Box key={idx} size={"small"} result={result}/>
            ))}
        </div>
    );
};

export default R16_Column;
