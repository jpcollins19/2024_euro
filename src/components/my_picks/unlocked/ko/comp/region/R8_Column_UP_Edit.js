import {useState, useEffect} from "react";
import {koGameMapper_userPicks} from "../../../../../../store";
import KO_Box_UP_Edit from "../KO_Box_UP_Edit";

const R8_Column_UP_Edit = ({side, region, userPicks, resetMasterError}) => {
    const games = koGameMapper_userPicks[side][region];

    const [team1, setTeam1] = useState(null);
    const [team2, setTeam2] = useState(null);

    const setTeam = userPicks[`setS${region}`];

    const findTeams = () => {
        games.forEach((game, idx) => {
            const setTeam = eval(`setTeam${idx + 1}`);
            setTeam(userPicks[game]);
        });
    };

    useEffect(() => {
        findTeams();
    }, []);

    useEffect(() => {
        findTeams();
    }, [userPicks]);

    const usersPicksForGame = [team1, team2];

    return (
        <div>
            {usersPicksForGame.map((team, idx) => (
                <div key={idx}>
                    <KO_Box_UP_Edit
                        side={side}
                        team={team}
                        setTeam={setTeam}
                        resetMasterError={resetMasterError}
                    />
                </div>
            ))}
        </div>
    );
};

export default R8_Column_UP_Edit;
