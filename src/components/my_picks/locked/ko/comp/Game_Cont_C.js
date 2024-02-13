import {useSelector} from "react-redux";
import {
    determineR16Seeding,
    findR16Teams,
    regionMapper,
    koGameCalc,
    formatTeamClass_KO,
} from "../../../../../store";
import KO_Box_C from "./KO_Box_C";

const Game_Cont = ({side, region, gameNum, user}) => {
    const teams = useSelector((state) => state.teams);

    const seedMatchups = determineR16Seeding(teams);

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

    return (
        <div>
            {usersPicksForGame.map((team, idx) => (
                <KO_Box_C
                    key={idx}
                    side={side}
                    team={team}
                    user={user}
                    region={region}
                />
            ))}
        </div>
    );
};

export default Game_Cont;
