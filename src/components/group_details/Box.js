import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadTeams } from "../../store";
import Column from "./Column";

const Box = ({ box, group }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTeams());
  }, []);

  let groupTeams = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  const box1Entries = ["thirdPlaceAndAdvancedToKO", "flag", "name"];
  const box2Entries = [
    "MP",
    "W",
    "D",
    "L",
    "+/-",
    "GD",
    "pts",
    "thirdPlaceAndAdvancedToKO",
  ];
  const entriesToUse = box === 1 ? box1Entries : box2Entries;

  return (
    <div className={`box${box}-gd`}>
      {entriesToUse.map((entry, idx) => (
        <Column key={idx} entry={entry} groupTeams={groupTeams} box={box} />
      ))}
    </div>
  );
};

export default Box;
