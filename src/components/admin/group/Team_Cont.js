import Input_Cont from "./Input_Cont";

const Team_Cont = ({ teamObj, idx, onChange }) => {
  const entries = Object.keys(teamObj).filter(
    (entry) => entry !== "id" && entry !== "group"
  );

  return (
    <div className="team-row-cont">
      <div className="single-group-cont-text">
        {entries.map((entry) => (
          <Input_Cont
            key={entry}
            entry={entry}
            teamObj={teamObj}
            idx={idx}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
};

export default Team_Cont;
