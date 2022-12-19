import { useSelector } from "react-redux";
import { convertTeamDropdown } from "../../../../store";
import Dropdown from "../../../Misc/Dropdown";

const Prediction_Cont_Unlocked = ({ group, onChange }) => {
  const teams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition)
    .map((team) => {
      return convertTeamDropdown(team);
    });

  const user = useSelector((state) => state.auth);

  return (
    <div>
      <h5 className="prediction-verbiage-unlocked">Prediction</h5>
      {user?.groupA1
        ? teams.map((team, idxRank) => {
            const userPickTeamName = user[`group${group}${idxRank + 1}`];

            const userPickTeamObj = teams.find(
              (team) => team.value.name === userPickTeamName
            )?.value;

            return (
              <Dropdown
                key={idxRank}
                options={teams}
                width="14rem"
                defaultValue={convertTeamDropdown(userPickTeamObj)}
                set={(value) =>
                  onChange([idxRank + 1, value.value.name], group)
                }
              />
            );
          })
        : teams.map((team, idxRank) => (
            <Dropdown
              key={idxRank}
              placeholder="Select Team"
              options={teams}
              width="14rem"
              set={(value) => onChange([idxRank + 1, value.value.name], group)}
            />
          ))}
    </div>
  );
};

export default Prediction_Cont_Unlocked;
