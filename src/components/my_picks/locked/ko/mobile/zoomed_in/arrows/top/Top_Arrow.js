import Arrow_Up from "@mui/icons-material/KeyboardArrowUp";

const Top_Arrow = ({zoomData, prop, regionToAssign}) => {
    return (
        <Arrow_Up
            onClick={() => zoomData.setZoomedInRegion(regionToAssign)}
            className={`svg-icons-${prop}`}
        />
    );
};

export default Top_Arrow;
