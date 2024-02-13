import R16_Column_Z_In from "./R16_Column_Z_In";
import R8_Column_Z_In from "./R8_Column_Z_In";

const Region_Right_Z_In = ({region, user}) => {
    return (
        <div className="region-cont-c">
            <R8_Column_Z_In side="right" region={region} user={user}/>
            <R16_Column_Z_In side="right" region={region} user={user}/>
        </div>
    );
};

export default Region_Right_Z_In;
