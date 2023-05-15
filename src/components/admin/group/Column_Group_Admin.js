import { cap1stLetter } from "../../../store";

const Column_Group_Admin = ({ box, entry, values, onChange }) => {
  let headerVerbiage, columnClass;

  switch (entry) {
    case "position":
      headerVerbiage = "Pos";
      break;
    case "flag":
      headerVerbiage = "Team";
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
    default:
      columnClass = "gd-all-others";
      break;
  }

  return (
    <div className={`group-table-column-cont ${columnClass}`}>
      <h4 className="gd-column-header">{headerVerbiage}</h4>

      {values.map((value, idx) =>
        entry === "flag" ? (
          <img key={idx} className={`gd-${entry}`} src={value}></img>
        ) : entry === "name" ? (
          <div key={idx} className={`${box === 2 ? "gd-single-cell" : ""}`}>
            <div className="spacer"></div>

            {value}
          </div>
        ) : (
          <input
            key={idx}
            defaultValue={value}
            onChange={(ev) => onChange(idx, entry, ev.target.value)}
          />
        )
      )}
    </div>
  );
};

export default Column_Group_Admin;
