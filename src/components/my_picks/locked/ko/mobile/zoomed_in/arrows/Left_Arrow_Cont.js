import Arrow_Left from "@mui/icons-material/KeyboardArrowLeft";

const Left_Arrow_Cont = ({zoomData}) => {
    const regionToAssign = zoomData.zoomedInRegion === 3 ? 1 : 2;

    return (
        <div className="arrow-left-right-cont">
            <Arrow_Left
                onClick={() => zoomData.setZoomedInRegion(regionToAssign)}
                className="svg-icons-normal"
            />
        </div>
    );
};

export default Left_Arrow_Cont;
