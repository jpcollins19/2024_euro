import { isUserMissingOtherRegoinPicks } from "../../../../../../../store";
import Arrow_Left from "@mui/icons-material/KeyboardArrowLeft";

const Left_Arrow_Cont = ({ zoomData, user }) => {
  const regoinToAssign = zoomData.zoomedInRegoin === 3 ? 1 : 2;

  const arrowColor = isUserMissingOtherRegoinPicks(user, regoinToAssign);

  return (
    <div className="arrow-left-right-cont">
      <Arrow_Left
        onClick={() => zoomData.setZoomedInRegoin(regoinToAssign)}
        className={`svg-icons-normal svg-arrow-picks-${arrowColor}`}
      />
    </div>
  );
};

export default Left_Arrow_Cont;
