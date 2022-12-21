import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { groupCalc } from "../../../../store";

const Points_Cont_Locked = ({ group, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  const userToUse = pathname === "/pool_picks" ? selectedUser : user;

  const groupResults = groupCalc(userToUse, group);

  const groupIsFinished = user[`group${group}1`].groupIsFinished;

  return (
    <div className="points-cont">
      <h5>Points</h5>
      {groupResults.map((result, idx) => (
        <div key={idx} className={groupIsFinished ? result.className : ""}>
          {groupIsFinished ? result.points : ""}
        </div>
      ))}
    </div>
  );
};

export default Points_Cont_Locked;
