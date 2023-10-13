import { isUserMissingOtherRegoinPicks } from "../../../../../../../../store";
import Arrow_Down from "@mui/icons-material/KeyboardArrowDown";

const Bottom_Arrow = ({ zoomData, prop, regoinToAssign, user }) => {
  const arrowColor = isUserMissingOtherRegoinPicks(user, regoinToAssign);

  return (
    <Arrow_Down
      onClick={() => zoomData.setZoomedInRegoin(regoinToAssign)}
      className={`svg-icons-${prop} svg-arrow-picks-${arrowColor}`}
    />
  );
};

export default Bottom_Arrow;
