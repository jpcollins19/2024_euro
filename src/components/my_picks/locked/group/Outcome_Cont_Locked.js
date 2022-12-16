import { useSelector } from "react-redux";

const Outcome_Cont_Locked = ({ group }) => {
  const teamsInGroup = useSelector((state) => state.teams)
    .filter((team) => team.group === group)
    .sort((a, b) => a.groupFinishingPosition - b.groupFinishingPosition);

  return (
    teamsInGroup.length && (
      <div className="outcome-pos-cont">
        <h5>Outcome</h5>
        {teamsInGroup.map((team) => (
          <div key={team.id}>{team.groupIsFinished ? team.name : ""}</div>
        ))}
      </div>
    )
  );
};

export default Outcome_Cont_Locked;
