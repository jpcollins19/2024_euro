import Rank_Cont_Admin from "./Rank_Cont_Admin";
import Prediction_Cont_Admin from "./Prediction_Cont_Admin";
import Third_Place_Advance_Admin from "./Third_Place_Advance_Admin";
import Error from "../../../Misc/Error";

const Single_Group_Cont_Admin = ({
  user,
  group,
  onChangeGroupSelections,
  groupError,
  setGroupError,
  selectionObj,
  resetMasterError,
}) => {
  const onChange = (group, key, answer) => {
    onChangeGroupSelections(group, key, answer);
    setGroupError(false);
    resetMasterError();
  };

  return (
    <div className="single-group-cont-edit-picks-outside">
      <div className="error-cont-placeholder">
        {groupError && <Error error="Invalid picks in group below" />}
      </div>

      <h4 className="black-text">Group {group}</h4>
      <div className="single-group-cont-edit-picks-inside">
        <Rank_Cont_Admin />
        <Prediction_Cont_Admin user={user} group={group} onChange={onChange} />
        <Third_Place_Advance_Admin
          group={group}
          onChange={onChange}
          selectionObj={selectionObj}
        />
      </div>
    </div>
  );
};

export default Single_Group_Cont_Admin;
