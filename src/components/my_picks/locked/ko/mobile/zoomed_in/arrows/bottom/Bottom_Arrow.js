import Arrow_Down from "@mui/icons-material/KeyboardArrowDown";

const Bottom_Arrow = ({ zoomData, prop, regoinToAssign }) => {
  return (
    <Arrow_Down
      onClick={() => zoomData.setZoomedInRegoin(regoinToAssign)}
      className={`svg-icons-${prop}`}
    />
  );
};

export default Bottom_Arrow;
