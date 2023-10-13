import { isUserMissingOtherRegoinPicks } from "../../../../../../../store";
import Arrow_Right from "@mui/icons-material/KeyboardArrowRight";

const Right_Arrow_Cont = ({ zoomData, user }) => {
  const regoinToAssign = zoomData.zoomedInRegoin === 1 ? 3 : 4;

  const arrowColor = isUserMissingOtherRegoinPicks(user, regoinToAssign);

  return (
    <div className="arrow-left-right-cont">
      <Arrow_Right
        onClick={() => zoomData.setZoomedInRegoin(regoinToAssign)}
        className={`svg-icons-normal svg-arrow-picks-${arrowColor}`}
      />
    </div>
  );
};

export default Right_Arrow_Cont;
