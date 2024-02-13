import R16_Column from "./R16_Column";
import R8_Column from "./R8_Column";

const Region_Left = ({user, region, zoomData}) => {
    return (
        <div
            onClick={() => zoomData.setZoomedInRegion(region)}
            className="region-cont region-cont-left"
        >
            <R16_Column user={user} region={region}/>
            <R8_Column user={user} region={region} side={"left"}/>
        </div>
    );
};

export default Region_Left;
