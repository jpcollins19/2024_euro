import {useSelector} from "react-redux";
import {koGameCalc, formatTeamClass_KO} from "../../../../../../store";
import KO_Box_C from "../KO_Box_C";

const R4_Column_C = ({side, region, user}) => {
    const teams = useSelector((state) => state.teams);

    const usersRegionalWinner = user[`knockS${region}`];

    const otherRegion = region % 2 === 0 ? region - 1 : region + 1;

    const usersOtherRegionalWinner = user[`knockS${otherRegion}`];

    let usersPicksForGame = [usersRegionalWinner, usersOtherRegionalWinner];

    const userHasKOPicks = user?.knockChamp ? true : false;

    const gameNum = region <= 2 ? 1 : 2;

    const game = `S${gameNum}`;

    const gameInfo = userHasKOPicks ? koGameCalc(user, game, teams) : null;

    usersPicksForGame = formatTeamClass_KO(
        usersPicksForGame,
        "small",
        gameInfo,
        "S"
    );

    return (
        <div>
            <div>
                <KO_Box_C
                    side={side}
                    team={
                        usersRegionalWinner ? usersRegionalWinner
                            : usersPicksForGame[0]
                    }
                    region={region}
                />
            </div>
        </div>
    );
};

export default R4_Column_C;
