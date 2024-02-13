import Arrow_Right from "@mui/icons-material/KeyboardArrowRight";

const Right_Arrow_Cont = ({zoomData}) => {
    const regionToAssign = zoomData.zoomedInRegion === 1 ? 3 : 4;

    return (
        <div className="arrow-left-right-cont">
            <Arrow_Right
                onClick={() => zoomData.setZoomedInRegion(regionToAssign)}
                className="svg-icons-normal"
            />
        </div>
    );
};

export default Right_Arrow_Cont;
