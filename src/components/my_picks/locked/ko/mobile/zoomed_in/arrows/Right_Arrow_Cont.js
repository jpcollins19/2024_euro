import Arrow_Right from "@mui/icons-material/KeyboardArrowRight";

const Right_Arrow_Cont = ({ zoomData }) => {
  const regoinToAssign = zoomData.zoomedInRegoin === 1 ? 3 : 4;

  return (
    <div className="arrow-left-right-cont">
      <Arrow_Right
        onClick={() => zoomData.setZoomedInRegoin(regoinToAssign)}
        className="svg-icons-normal"
      />
    </div>
  );
};

export default Right_Arrow_Cont;
