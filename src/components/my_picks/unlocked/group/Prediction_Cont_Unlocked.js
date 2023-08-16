import { useSelector } from "react-redux";
import Dropdown from "../../../Misc/Dropdown";

const Prediction_Cont_Unlocked = ({ group, onChange }) => {
  const convertTeamDropdown = (team) => {
    return {
      value: team,
      label: (
        <div className="my-picks-unlocked-dropdown-cont">
          <div className="pred-locked-flag">
            <img src={team.flag}></img>
          </div>
          <div className="team-name-in-dropdown">{team.name}</div>
        </div>
      ),
    };
  };

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
            const usersTeamPick = user[`group${group}${idxRank + 1}`];

            return (
              <Dropdown
                key={idxRank}
                options={teams}
                width="14"
                defaultValue={convertTeamDropdown(usersTeamPick)}
                set={(value) => onChange(group, idxRank + 1, value.value.name)}
              />
            );
          })
        : teams.map((team, idxRank) => (
            <Dropdown
              key={idxRank}
              placeholder="Select Team"
              options={teams}
              width="14"
              set={(value) => onChange(group, idxRank + 1, value.value.name)}
            />
          ))}
    </div>
  );
};

export default Prediction_Cont_Unlocked;
