import Column from "./Column";

const Box = ({ box, groupTeams, onChange }) => {
  const box1Entries = ["position", "flag", "name"];
  const box2Entries = ["W", "D", "L", "GF", "GA"];
  const entriesToUse = box === 1 ? box1Entries : box2Entries;

  return (
    <div className={`box${box}-gd`}>
      {entriesToUse.map((entry, idx) => (
        <Column
          key={idx}
          entry={entry}
          groupTeams={groupTeams}
          box={box}
          onChange={onChange}
        />
      ))}
    </div>
  );
};

export default Box;
