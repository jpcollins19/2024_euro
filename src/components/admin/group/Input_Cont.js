const Input_Cont = ({ entry, teamObj, idx, onChange }) => {
  return entry && entry === "flag" ? (
    <img key={entry} className={entry} src={teamObj && teamObj[entry]}></img>
  ) : entry === "name" ? (
    <div className={entry}>{teamObj[entry]}</div>
  ) : (
    <input
      key={entry}
      className={
        entry === "position" || entry === "W" || entry === "L" || entry === "GF"
          ? entry
          : "input-space"
      }
      defaultValue={teamObj && teamObj[entry]}
      onChange={(ev) => onChange(idx, entry, ev.target.value)}
    />
  );
};

export default Input_Cont;
