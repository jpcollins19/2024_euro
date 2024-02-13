import {isUserMissingOtherRegionPicks} from "../../../../../../../store";
import Arrow_Right from "@mui/icons-material/KeyboardArrowRight";

const Right_Arrow_Cont = ({zoomData, user}) => {
    const regionToAssign = zoomData.zoomedInRegion === 1 ? 3 : 4;

    const arrowColor = isUserMissingOtherRegionPicks(user, regionToAssign);

    return (
        <div className="arrow-left-right-cont">
            <Arrow_Right
                onClick={() => zoomData.setZoomedInRegion(regionToAssign)}
                className={`svg-icons-normal svg-arrow-picks-${arrowColor}`}
            />
        </div>
    );
};

export default Right_Arrow_Cont;
