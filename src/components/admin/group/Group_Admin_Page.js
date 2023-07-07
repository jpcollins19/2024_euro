import { useState } from "react";
import { groupLetters } from "../../../store";
import Dropdown from "../../Misc/Dropdown";
import Group_Cont from "./Group_Cont";
import "./Group_Admin.css";

const Group_Admin_Page = () => {
  const [group, setGroup] = useState(null);

  const letters = groupLetters.map((letter) => {
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
