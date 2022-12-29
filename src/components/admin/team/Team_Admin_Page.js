import { useState } from "react";
import { useSelector } from "react-redux";
import Dropdown from "../../Misc/Dropdown";
import Team_Cont from "./Team_Cont";
import Box from "@mui/material/Box";
import "./Team_Admin.css";

const Team_Admin_Page = () => {
  const [team, setTeam] = useState(null);

  const places = [1, 2];

  const teams = useSelector((state) => state.teams)
    .filter((team) => places.includes(team.groupFinishingPosition))
    .sort((a, b) => {
      if (a.name > b.name) return 1;
      if (a.name < b.name) return -1;
      return 0;
    })
    .map((team) => {
      return { value: team, label: team.name };
    });

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
      height="84vh"
      className="admin-page"
    >
      <div className="admin-container">
        <div className="admin-header">
          <Dropdown
            placeholder="Select Team"
            options={teams}
            width="19rem"
            set={(option) => setTeam(option.value)}
          />
        </div>
        {team && (
          <div className="team-cont">
            <Team_Cont team={team} />
          </div>
        )}
      </div>
    </Box>
  );
};

export default Team_Admin_Page;
