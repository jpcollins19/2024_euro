import {useState, useEffect} from "react";
import {koGameMapper} from "../../../../store";
import KO_Box_Edit_C from "../KO_Box_Edit_C";

const R4_Column_Edit_C = ({
    side,
    region,
    results,
    adjustResults,
    userClick,
}) => {
    const games = koGameMapper[side][region];

    const [team, setTeam] = useState(null);
    const [game, setGame] = useState(null);

    const findTeam = () => {
        setTeam(null);
        setGame(null);
        games.forEach((game) => {
            const teamsToAudit = results[game];

            teamsToAudit.forEach((team) => {
                if (team.advanceToS) {
                    setTeam(team);
                    setGame(game);
                }
            });
        });
    };

    useEffect(() => {
        findTeam();
    }, []);

    useEffect(() => {
        findTeam();
    }, [userClick]);

    return (
        <div>
            <div>
                <KO_Box_Edit_C
                    side={side}
                    team={team}
                    game={game}
                    adjustResults={adjustResults}
                    round={"S"}
                />
            </div>
        </div>
    );
};

export default R4_Column_Edit_C;
