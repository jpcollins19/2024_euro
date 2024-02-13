import {isUserMissingOtherRegionPicks} from "../../../../../../../../store";
import Arrow_Down from "@mui/icons-material/KeyboardArrowDown";

const Bottom_Arrow = ({zoomData, prop, regionToAssign, user}) => {
    const arrowColor = isUserMissingOtherRegionPicks(user, regionToAssign);

    return (
        <Arrow_Down
            onClick={() => zoomData.setZoomedInRegion(regionToAssign)}
            className={`svg-icons-${prop} svg-arrow-picks-${arrowColor}`}
        />
    );
};

export default Bottom_Arrow;
