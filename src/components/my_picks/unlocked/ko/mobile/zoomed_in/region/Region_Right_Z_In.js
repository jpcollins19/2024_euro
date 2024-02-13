import R16_Column_Z_In from "./R16_Column_Z_In";
import R8_Column_Z_In from "./R8_Column_Z_In";
import R4_Column_Z_In from "./R4_Column_Z_In";

const Region_Right_Z_In = ({region, user, resetMasterError}) => {
    const side = "right";

    return (
        <div className="region-cont-c">
            <R4_Column_Z_In
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
            <R16_Column_Z_In
                side={side}
                region={region}
                user={user}
                resetMasterError={resetMasterError}
            />
        </div>
    );
};

export default Region_Right_Z_In;
