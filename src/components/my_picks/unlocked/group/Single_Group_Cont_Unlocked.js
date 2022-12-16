import Rank_Cont_Unlocked from "./Rank_Cont_Unlocked";
import Prediction_Cont_Unlocked from "./Prediction_Cont_Unlocked";
import Error from "../../../Misc/Error";

const Single_Group_Cont_Unlocked = ({
  group,
  onChangeSelectionObj,
  groupError,
  setGroupError,
}) => {
  const onChange = (answer, group) => {
    onChangeSelectionObj(group, answer[0], answer[1]);
    setGroupError(false);
  };

  return (
    <div className="single-group-cont-edit-picks-outside">
      <div className="error-cont-placeholder">
        {groupError && <Error error="Invalid picks in group below" />}
      </div>

      <h4>Group {group}</h4>
      <div className="single-group-cont-edit-picks-inside">
        <Rank_Cont_Unlocked />
        <Prediction_Cont_Unlocked group={group} onChange={onChange} />
      </div>
    </div>
  );
};

export default Single_Group_Cont_Unlocked;
