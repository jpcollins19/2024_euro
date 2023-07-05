import Rank_Cont_Unlocked from "./Rank_Cont_Unlocked";
import Prediction_Cont_Unlocked from "./Prediction_Cont_Unlocked";
import Third_Place_Advance_Unlocked from "./Third_Place_Advance_Unlocked";
import Error from "../../../Misc/Error";

const Single_Group_Cont_Unlocked = ({
  group,
  onChangeSelectionObj,
  groupError_R,
  setGroupError_R,
  selectionObj,
}) => {
  const onChange = (group, rank, team) => {
    onChangeSelectionObj(group, rank, team);
    setGroupError_R(false);
  };

  return (
    <div className="single-group-cont-edit-picks-outside">
      <div className="error-cont-placeholder">
        {groupError_R && <Error error="Invalid picks in group below" />}
      </div>

      <h4 className="black-text">Group {group}</h4>
      <div className="single-group-cont-edit-picks-inside">
        <Rank_Cont_Unlocked />
        <Prediction_Cont_Unlocked group={group} onChange={onChange} />
        <Third_Place_Advance_Unlocked
          group={group}
          onChange={onChange}
          selectionObj={selectionObj}
        />
      </div>
    </div>
  );
};

export default Single_Group_Cont_Unlocked;
