import { useSelector } from "react-redux";
import { findTeam } from "../../../../store";
import Dropdown from "../../../Misc/Dropdown";

const Prediction_Cont_Unlocked = ({ group, onChange }) => {
  const teams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition)
    .map((team) => {
      return { value: team, label: team.name };
    });

  const user = useSelector((state) => state.auth);

  return (
    <div>
      <h5>Prediction</h5>
      {user && teams && user.groupA1
        ? teams.map((team, idxRank) => (
            <Dropdown
              key={idxRank}
              options={teams}
              width="13rem"
              defaultValue={findTeam(user, group, idxRank + 1)}
              set={(value) => onChange([idxRank + 1, value.value.name], group)}
            />
          ))
        : teams.map((team, idxRank) => (
            <Dropdown
              key={idxRank}
              placeholder="Select Team"
              options={teams}
              width="13rem"
              set={(value) => onChange([idxRank + 1, value.value.name], group)}
            />
          ))}
    </div>
  );
};

export default Prediction_Cont_Unlocked;
