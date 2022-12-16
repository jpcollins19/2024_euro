const Input_Cont = ({ team, entry }) => {
  let gdSymbol;

  switch (entry) {
    case "GD":
      team[entry] > 0 ? (gdSymbol = "+") : "";
      break;
  }

  return entry && entry === "flag" ? (
    <img key={entry} className={`${entry}-gd`} src={team && team[entry]}></img>
  ) : (
    <div key={entry} className={`${entry}-gd`}>
      {entry && entry !== "GD"
        ? team[entry]
        : `${gdSymbol ? gdSymbol : ""}${team[entry]}`}
    </div>
  );
};

export default Input_Cont;
