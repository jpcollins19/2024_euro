import Region_Left_C from "./region/Region_Left_C";
import Region_Right_C from "./region/Region_Right_C";
import Finalist_Cont from "./finalist/Finalist_Cont";

const KO_Locked_Comp = ({user}) => {
    return (
        <div className="knockout-cont">
            <div>
                <Region_Left_C region={1} user={user}/>
                <Region_Left_C region={2} user={user}/>
            </div>
            <Finalist_Cont user={user}/>
            <div>
                <Region_Right_C region={3} user={user}/>
                <Region_Right_C region={4} user={user}/>
            </div>
        </div>
    );
};

export default KO_Locked_Comp;
