import {isUserMissingOtherRegionPicks} from "../../../../../../../../store";
import Arrow_Up from "@mui/icons-material/KeyboardArrowUp";

const Top_Arrow = ({zoomData, prop, regionToAssign, user}) => {
    const arrowColor = isUserMissingOtherRegionPicks(user, regionToAssign);

    return (
        <Arrow_Up
            onClick={() => zoomData.setZoomedInRegion(regionToAssign)}
            className={`svg-icons-${prop} svg-arrow-picks-${arrowColor}`}
        />
    );
};

export default Top_Arrow;
