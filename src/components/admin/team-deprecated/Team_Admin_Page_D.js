import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadTeams } from "../../../store";
import Dropdown from "../../Misc/Dropdown";
import Team_Cont from "./Team_Cont";
import "./Team_Admin.css";

const Team_Admin_Page = () => {
  const dispatch = useDispatch();

  const [team, setTeam] = useState(null);

  const finishingPositions = [1, 2];

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  const teams = useSelector((state) => state.teams)
    .filter((team) => {
      if (
        team.groupFinishingPosition === 1 ||
        team.groupFinishingPosition === 2 ||
        team.thirdPlaceAndAdvancedToKO
      ) {
        return team;
      }
    })
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    .map((team) => {
      return { value: team, label: team.name };
    });

  return (
    <div className="admin-page">
      <Dropdown
        placeholder="Select Team"
        options={teams}
        width="19"
        set={(option) => setTeam(option.value)}
      />

      {team && (
        <div className="team-cont">
          <Team_Cont team={team} />
        </div>
      )}
    </div>
  );
};

export default Team_Admin_Page;
