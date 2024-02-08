const Column = ({ entry, groupTeams, box, onChange }) => {
  let headerVerbiage, columnClass;

  switch (entry) {
    case "position":
      headerVerbiage = "Pos";
      break;
    case "flag":
      headerVerbiage = "Team";
      break;
    default:
      headerVerbiage = entry !== "name" ? entry : "";
      break;
  }

  switch (entry) {
    case "flag":
      columnClass = "gd-cc-flag";
      break;
    case "name":
      columnClass = "gd-cc-name-edit";
      break;
    default:
      columnClass = "gd-all-others";
      break;
  }

  return (
    <div className={`group-table-column-cont ${columnClass}`}>
      <h4 className="gd-column-header">{headerVerbiage}</h4>

      {groupTeams.map((team, idx) => {
        let answer;

        switch (entry) {
          case "position":
            const tempAnswer = team.knockoutPosition.split("")[1];

            answer = tempAnswer === "n" ? "" : tempAnswer;
            break;
          default:
            answer = team[entry];
        }

        return entry === "flag" ? (
          <img key={idx} className={`gd-${entry}`} src={team[entry]}></img>
        ) : entry === "name" ? (
          <div key={idx} className={`${box === 2 ? "gd-single-cell" : ""}`}>
            {answer}
          </div>
        ) : (
          <input
            className="input-cont-group-edit"
            key={idx}
            defaultValue={answer}
            onChange={(ev) => onChange(idx, entry, ev.target.value)}
          />
        );
      })}
    </div>
  );
};

export default Column;
