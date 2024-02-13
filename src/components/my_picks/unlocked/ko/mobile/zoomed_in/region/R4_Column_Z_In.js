import KO_Box_Z_In from "../KO_Box_Z_In";

const R4_Column_Z_In = ({region, user, resetMasterError}) => {
    const team = user[`S${region}`];

    return (
        <div>
            <div>
                <KO_Box_Z_In
                    size="small"
                    team={team}
                    resetMasterError={resetMasterError}
                />
            </div>
        </div>
    );
};

export default R4_Column_Z_In;
