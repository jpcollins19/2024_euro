import { cap1stLetter } from "../../store";

const Column = ({ entry, groupTeams, box }) => {
  let headerVerbiage, columnClass;

  switch (entry) {
    case "flag":
      headerVerbiage = "Team";
      break;
    case "+/-":
      headerVerbiage = entry;
      break;
    case "thirdPlaceAndAdvancedToKO":
      headerVerbiage = "";
      break;
    default:
      headerVerbiage = entry !== "name" ? cap1stLetter(entry) : "";
      break;
  }

  switch (entry) {
    case "flag":
      columnClass = "gd-cc-flag";
      break;
    case "name":
      columnClass = "gd-cc-name";
      break;
    case "+/-":
      columnClass = "gd-cc-plus-minus";
      break;
    case "thirdPlaceAndAdvancedToKO":
      columnClass = "gd-cc-advanced";
      break;
    default:
      columnClass = "gd-all-others";
      break;
  }

  return (
    <div className={`group-table-column-cont ${columnClass}`}>
      <h4 className="gd-column-header">{headerVerbiage}</h4>

      {groupTeams.map((team, idx) => {
        let answer = team[entry];
        let gdSymbol = "";

        if (entry === "+/-") {
          answer = `${team.GF}-${team.GA}`;
        }

        if (entry === "GD") {
          if (answer > 0) gdSymbol = "+";
          if (answer < 0) gdSymbol = "-";
          answer = Math.abs(team[entry]);
        }

        if (entry === "thirdPlaceAndAdvancedToKO") {
          answer = answer ? "*" : "";
        }

        return entry === "flag" ? (
          <img key={idx} className={`gd-${entry}`} src={team[entry]}></img>
        ) : (
          <div key={idx} className={`${box === 2 ? "gd-single-cell" : ""}`}>
            {entry === "name" && <div className="spacer"></div>}
            {entry === "GD" && <div className="pos-neg-symbol">{gdSymbol}</div>}

            {answer}
          </div>
        );
      })}
    </div>
  );
};

export default Column;
