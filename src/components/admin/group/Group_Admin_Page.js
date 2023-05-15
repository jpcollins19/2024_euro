import { useState } from "react";
import Dropdown from "../../Misc/Dropdown";
import Group_Cont from "./Group_Cont";
import "./Group_Admin.css";

const Group_Admin_Page = () => {
  const [group, setGroup] = useState(null);

  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"].map((letter) => {
    return { value: letter, label: `Group ${letter}` };
  });

  return (
    <div className="admin-page">
      <Dropdown
        placeholder="Select Group"
        options={letters}
        width="19rem"
        admin-header
        set={(option) => setGroup(option.value)}
      />

      {group && <Group_Cont group={group} />}
    </div>
  );
};

export default Group_Admin_Page;
