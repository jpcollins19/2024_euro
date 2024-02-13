import R16_Column from "./R16_Column";
import R8_Column from "./R8_Column";

const Region_Right = ({user, region, zoomData}) => {
    return (
        <div
            onClick={() => zoomData.setZoomedInRegion(region)}
            className="region-cont  region-cont-right"
        >
            <R8_Column user={user} region={region} side={"right"}/>
            <R16_Column user={user} region={region}/>
        </div>
    );
};

export default Region_Right;
