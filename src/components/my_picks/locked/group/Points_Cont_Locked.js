import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { groupCalc, isPoolPicksPage } from "../../../../store";

const Points_Cont_Locked = ({ group, selectedUser }) => {
  const { pathname } = useLocation();

  const user = useSelector((state) => state.auth);

  const poolPicksPage = isPoolPicksPage(pathname);

  const userToUse = poolPicksPage ? selectedUser : user;

  const groupResults = groupCalc(userToUse, group);

  const groupIsFinished = userToUse[`group${group}1`].groupIsFinished;

  return (
    <div className="points-cont skinny-black-border">
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
