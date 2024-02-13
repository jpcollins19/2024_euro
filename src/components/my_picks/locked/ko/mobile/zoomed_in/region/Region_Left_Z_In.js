import R16_Column_Z_In from "./R16_Column_Z_In";
import R8_Column_Z_In from "./R8_Column_Z_In";

const Region_Left_Z_In = ({region, user}) => {
    return (
        <div className="region-cont-c">
            <R16_Column_Z_In side="left" region={region} user={user}/>
            <R8_Column_Z_In side="left" region={region} user={user}/>
        </div>
    );
};

export default Region_Left_Z_In;
