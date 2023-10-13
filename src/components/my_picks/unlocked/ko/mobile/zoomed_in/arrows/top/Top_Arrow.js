import { isUserMissingOtherRegoinPicks } from "../../../../../../../../store";
import Arrow_Up from "@mui/icons-material/KeyboardArrowUp";

const Top_Arrow = ({ zoomData, prop, regoinToAssign, user }) => {
  const arrowColor = isUserMissingOtherRegoinPicks(user, regoinToAssign);

  return (
    <Arrow_Up
      onClick={() => zoomData.setZoomedInRegoin(regoinToAssign)}
      className={`svg-icons-${prop} svg-arrow-picks-${arrowColor}`}
    />
  );
};

export default Top_Arrow;
