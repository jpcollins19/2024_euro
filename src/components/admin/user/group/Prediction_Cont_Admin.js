import { useSelector } from "react-redux";
import Dropdown from "../../../Misc/Dropdown";

const Prediction_Cont_Admin = ({ groupPicks, group, onChange }) => {
  if (groupPicks.includes(undefined)) return null;

  const teams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition)
    .map((team) => {
      return { value: team, label: team.name };
    });

  const nums = [0, 1, 2, 3];

  return (
    <div>
      <h5>Prediction</h5>
      {!groupPicks.includes(null)
        ? nums.map((num) => {
            const chosenTeam = teams.find(
              (team) => team.label === groupPicks[num]
            );

            return (
              <div key={num} className="dropdown-cont">
                <Dropdown
                  options={teams}
                  width="13rem"
                  defaultValue={chosenTeam}
                  set={(option) => onChange(group, num + 1, option.value.name)}
                />
              </div>
            );
          })
        : nums.map((num) => {
            return (
              <div key={num} className="dropdown-cont">
                <Dropdown
                  options={teams}
                  width="13rem"
                  placeholder={"Select Team"}
                  set={(option) => onChange(group, num + 1, option.value.name)}
                />
              </div>
            );
          })}
    </div>
  );
};

export default Prediction_Cont_Admin;
