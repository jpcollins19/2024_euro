import R16_Column from "./R16_Column";
import R8_Column from "./R8_Column";

const Region_Right = ({region, zoomData, user, resetMasterError}) => {
    return (
        <div
            onClick={() => {
                resetMasterError();
                zoomData.setZoomedInRegion(region);
            }}
            className="region-cont  region-cont-right"
        >
            <R8_Column region={region} user={user}/>
            <R16_Column region={region} user={user}/>
        </div>
    );
};

export default Region_Right;
