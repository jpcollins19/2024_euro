import {isUserMissingOtherRegionPicks} from "../../../../../../../store";
import Arrow_Left from "@mui/icons-material/KeyboardArrowLeft";

const Left_Arrow_Cont = ({zoomData, user}) => {
    const regionToAssign = zoomData.zoomedInRegion === 3 ? 1 : 2;

    const arrowColor = isUserMissingOtherRegionPicks(user, regionToAssign);

    return (
        <div className="arrow-left-right-cont">
            <Arrow_Left
                onClick={() => zoomData.setZoomedInRegion(regionToAssign)}
                className={`svg-icons-normal svg-arrow-picks-${arrowColor}`}
            />
        </div>
    );
};

export default Left_Arrow_Cont;
