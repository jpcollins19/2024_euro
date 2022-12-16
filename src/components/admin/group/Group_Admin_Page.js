import { useState } from "react";
import Dropdown from "../../Misc/Dropdown";
import Group_Cont from "./Group_Cont";
import Box from "@mui/material/Box";
import "./Group_Admin.css";

const Group_Admin_Page = () => {
  const [group, setGroup] = useState("");

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => {
    return { value: letter, label: `Group ${letter}` };
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
            placeholder="Select Group"
            options={letters}
            width="19rem"
            set={(option) => setGroup(option.value)}
          />
        </div>
        <div className="group-cont">
          {group.length > 0 && <Group_Cont group={group} />}
        </div>
      </div>
    </Box>
  );
};

export default Group_Admin_Page;
