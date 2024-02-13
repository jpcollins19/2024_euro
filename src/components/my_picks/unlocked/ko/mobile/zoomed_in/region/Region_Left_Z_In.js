import R16_Column_Z_In from "./R16_Column_Z_In";
import R8_Column_Z_In from "./R8_Column_Z_In";
import R4_Column_Z_In from "./R4_Column_Z_In";

const Region_Left_Z_In = ({region, user, resetMasterError}) => {
    const side = "left";

    return (
        <div className="region-cont-c">
            <R16_Column_Z_In
                side={side}
                region={region}
                user={user}
                resetMasterError={resetMasterError}
            />
            <R8_Column_Z_In
                side={side}
                region={region}
                user={user}
                resetMasterError={resetMasterError}
            />
            <R4_Column_Z_In
                region={region}
                user={user}
                resetMasterError={resetMasterError}
            />
        </div>
    );
};

export default Region_Left_Z_In;
