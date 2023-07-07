import { useSelector } from "react-redux";
import { findJoe } from "../../../../store";
import Rank_Cont_Locked from "./Rank_Cont_Locked";
import Prediction_Cont_Locked from "./Prediction_Cont_Locked";
import Outcome_Cont_Locked from "./Outcome_Cont_Locked";
import Points_Cont_Locked from "./Points_Cont_Locked";
import Third_Place_Advance_Locked from "./Third_Place_Advance_Locked";

const Single_Group_Cont_Locked = ({ group, selectedUser }) => {
  let user = useSelector((state) => state.auth);

  if (selectedUser) {
    user = selectedUser;
  }

  const joe = findJoe(useSelector((state) => state.users));

  return user?.groupA1 ? (
    <div
      className={
        joe?.tourneyStage <= 2
          ? "single-group-cont-picks-pre-ko"
          : "single-group-cont-picks"
      }
    >
      <h4>Group {group}</h4>
      <div>
        <Third_Place_Advance_Locked selectedUser={user} group={group} />
        <Rank_Cont_Locked />
        <Prediction_Cont_Locked group={group} selectedUser={user} />
        {joe?.tourneyStage >= 3 && <Outcome_Cont_Locked group={group} />}
        {joe?.tourneyStage >= 3 && (
          <Points_Cont_Locked group={group} selectedUser={user} />
        )}
        <Third_Place_Advance_Locked selectedUser={user} group={group} />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Single_Group_Cont_Locked;
