import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTeams } from "../../store";
import Column from "./Column";

const Single_Cont = ({ group }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  let groupTeams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  const box1Entries = ["flag", "name"];

  const box2Entries = ["MP", "W", "D", "L", "GF", "GA", "GD", "pts"];

  return (
    <div className="single-group-cont">
      <h3>Group {group}</h3>
      <div className="group-table-cont">
        <div className="box1-gd">
          {box1Entries.map((entry, idx) => (
            <Column key={idx} entry={entry} groupTeams={groupTeams} box={1} />
          ))}
        </div>

        <div className="box2-gd">
          {box2Entries.map((entry, idx) => (
            <Column key={idx} entry={entry} groupTeams={groupTeams} box={2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Single_Cont;
