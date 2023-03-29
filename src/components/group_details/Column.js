import { capFirstLetter } from "../../store";

const Column = ({ entry, groupTeams, box }) => {
  let gdSymbol;

  let headerVerbiage, columnClass;

  switch (entry) {
    case "flag":
      headerVerbiage = "Team";
      break;
    case "GD":
      headerVerbiage = "+/-";
      break;
    default:
      headerVerbiage = entry !== "name" ? capFirstLetter(entry) : "";
      break;
  }

  if (box === 1) {
    switch (entry) {
      case "flag":
        columnClass = "gd-cc-flag";
        break;
      case "name":
        columnClass = "gd-cc-name";
        break;
      default:
        columnClass = "";
        break;
    }
  }

  return (
    <div className={`group-table-column-cont ${columnClass}`}>
      <h4 className="gd-column-header">{headerVerbiage}</h4>

      {groupTeams.map((team, idx) =>
        entry === "flag" ? (
          <img key={idx} className={`gd-${entry}`} src={team[entry]}></img>
        ) : (
          <div key={idx} className={`${box === 2 ? "gd-single-cell" : ""}`}>
            {entry === "name" && <div className="spacer"></div>}

            {team[entry]}
          </div>
        )
      )}
    </div>
  );
};

export default Column;
