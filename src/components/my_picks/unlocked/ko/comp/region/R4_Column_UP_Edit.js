import KO_Box_UP_Edit from "../KO_Box_UP_Edit";

const R4_Column_UP_Edit = ({side, region, userPicks, resetMasterError}) => {
    const game = `S${region}`;

    const team = userPicks[game];

    const setNum = side === "left" ? 1 : 2;

    const setTeam = userPicks[`setF${setNum}`];

    return (
        <div>
            <div>
                <KO_Box_UP_Edit
                    side={side}
                    team={team}
                    setTeam={setTeam}
                    resetMasterError={resetMasterError}
                />
            </div>
        </div>
    );
};

export default R4_Column_UP_Edit;
