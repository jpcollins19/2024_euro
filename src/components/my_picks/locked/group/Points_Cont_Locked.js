import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { singleGroupCalc } from "../../../../store";

const Points_Cont_Locked = ({ group, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);
  const teams = useSelector((state) => state.teams);

  const pointObj = singleGroupCalc(
    pathname === "/pool_picks" ? selectedUser : user,
    teams,
    group
  );

  return (
    <div className="points-cont">
      <h5>Points</h5>
      <div
        className={
          pointObj.R1 === 3 ? "blue" : pointObj.R1 === 1 ? "orange" : ""
        }
      >
        {pointObj.R1}
      </div>
      <div
        className={
          pointObj.R2 === 2 ? "yellow" : pointObj.R2 === 1 ? "orange" : ""
        }
      >
        {pointObj.R2}
      </div>
      <div className={pointObj.R3 === 1 ? "green" : ""}>{pointObj.R3}</div>
      <div className={pointObj.R4 === 1 ? "green" : ""}>{pointObj.R4}</div>
    </div>
  );
};

export default Points_Cont_Locked;
