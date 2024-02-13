import R16_Column_C from "./R16_Column_C";
import R8_Column_C from "./R8_Column_C";
import R4_Column_C from "./R4_Column_C";

const Region_Left_C = ({region, user}) => {
    return (
        <div className="region-cont-c">
            <R16_Column_C side="left" region={region} user={user}/>
            <R8_Column_C side="left" region={region} user={user}/>
            <R4_Column_C side="left" region={region} user={user}/>
        </div>
    );
};

export default Region_Left_C;
