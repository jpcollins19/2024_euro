import Rank_Cont_Admin from "./Rank_Cont_Admin";
import Prediction_Cont_Admin from "./Prediction_Cont_Admin";
import Error from "../../../Misc/Error";

const Single_Group_Cont_Admin = ({
  user,
  group,
  onChangeGroupSelections,
  groupError,
  setGroupError,
}) => {
  const onChange = (group, rank, team) => {
    onChangeGroupSelections(group, rank, team);
    setGroupError(false);
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
      </div>
    </div>
  );
};

export default Single_Group_Cont_Admin;
