import Region_Left_UP_Edit from "./region/Region_Left_UP_Edit";
import Region_Right_UP_Edit from "./region/Region_Right_UP_Edit";
import Finalist_Cont_UP_Edit from "./finalist/Finalist_Cont_UP_Edit";

const KO_Unlocked_Comp = ({userPicks, resetMasterError}) => {
    return (
        <div className="ko-cont-edit">
            <div>
                <Region_Left_UP_Edit
                    region={1}
                    userPicks={userPicks}
                    resetMasterError={resetMasterError}
                />
                <Region_Left_UP_Edit
                    region={2}
                    userPicks={userPicks}
                    resetMasterError={resetMasterError}
                />
            </div>
            <Finalist_Cont_UP_Edit
                userPicks={userPicks}
                resetMasterError={resetMasterError}
            />
            <div>
                <Region_Right_UP_Edit
                    region={3}
                    userPicks={userPicks}
                    resetMasterError={resetMasterError}
                />
                <Region_Right_UP_Edit
                    region={4}
                    userPicks={userPicks}
                    resetMasterError={resetMasterError}
                />
            </div>
        </div>
    );
};

export default KO_Unlocked_Comp;
