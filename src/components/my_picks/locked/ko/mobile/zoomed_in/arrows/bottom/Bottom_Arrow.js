import Arrow_Down from "@mui/icons-material/KeyboardArrowDown";

const Bottom_Arrow = ({zoomData, prop, regionToAssign}) => {
    return (
        <Arrow_Down
            onClick={() => zoomData.setZoomedInRegion(regionToAssign)}
            className={`svg-icons-${prop}`}
        />
    );
};

export default Bottom_Arrow;
