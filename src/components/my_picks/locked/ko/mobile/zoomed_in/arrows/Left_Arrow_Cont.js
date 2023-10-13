import Arrow_Left from "@mui/icons-material/KeyboardArrowLeft";

const Left_Arrow_Cont = ({ zoomData }) => {
  const regoinToAssign = zoomData.zoomedInRegoin === 3 ? 1 : 2;

  return (
    <div className="arrow-left-right-cont">
      <Arrow_Left
        onClick={() => zoomData.setZoomedInRegoin(regoinToAssign)}
        className="svg-icons-normal"
      />
    </div>
  );
};

export default Left_Arrow_Cont;
