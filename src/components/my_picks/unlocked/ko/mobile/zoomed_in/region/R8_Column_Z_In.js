import {useState, useEffect} from "react";
import {koGameMapper_userPicks} from "../../../../../../../store";
import KO_Box_Z_In from "../KO_Box_Z_In";

const R8_Column_Z_In = ({region, user, resetMasterError, side}) => {
    const games = koGameMapper_userPicks[side][region];

    const [team1, setTeam1] = useState(null);
    const [team2, setTeam2] = useState(null);

    const setTeam = user[`setS${region}`];

    const findTeams = () => {
        games.forEach((game, idx) => {
            const setTeam = eval(`setTeam${idx + 1}`);
            setTeam(user[game]);
        });
    };

    useEffect(() => {
        findTeams();
    }, []);

    useEffect(() => {
        findTeams();
    }, [user]);

    const usersPicksForGame = [team1, team2];

    return (
        <div>
            {usersPicksForGame.map((team, idx) => (
                <div key={idx}>
                    <KO_Box_Z_In
                        size="small"
                        team={team}
                        setTeam={setTeam}
                        resetMasterError={resetMasterError}
                    />
                </div>
            ))}
        </div>
    );
};

export default R8_Column_Z_In;
