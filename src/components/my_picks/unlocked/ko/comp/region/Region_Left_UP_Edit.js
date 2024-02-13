import R16_Column_UP_Edit from "./R16_Column_UP_Edit";
import R8_Column_UP_Edit from "./R8_Column_UP_Edit";
import R4_Column_UP_Edit from "./R4_Column_UP_Edit";

const Region_Left_UP_Edit = ({region, userPicks, resetMasterError}) => {
    const side = "left";

    return (
        <div className="region-cont-c">
            <R16_Column_UP_Edit
                side={side}
                region={region}
                userPicks={userPicks}
                resetMasterError={resetMasterError}
            />
            <R8_Column_UP_Edit
                side={side}
                region={region}
                userPicks={userPicks}
                resetMasterError={resetMasterError}
            />
            <R4_Column_UP_Edit
                side={side}
                region={region}
                userPicks={userPicks}
                resetMasterError={resetMasterError}
            />
        </div>
    );
};

export default Region_Left_UP_Edit;
