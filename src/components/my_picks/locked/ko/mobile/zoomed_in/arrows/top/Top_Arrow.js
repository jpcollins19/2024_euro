import Arrow_Up from "@mui/icons-material/KeyboardArrowUp";

const Top_Arrow = ({ zoomData, prop, regoinToAssign }) => {
  return (
    <Arrow_Up
      onClick={() => zoomData.setZoomedInRegoin(regoinToAssign)}
      className={`svg-icons-${prop}`}
    />
  );
};

export default Top_Arrow;
