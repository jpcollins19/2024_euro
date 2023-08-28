import KO_Box_UP_Edit from "../KO_Box_UP_Edit";

const Finals_UP_Edit = ({ side, userPicks, setMasterError }) => {
  const game = side === "left" ? "F1" : "F2";

  const team = userPicks[game];

  const setTeam = userPicks.setChamp;

  return (
    <KO_Box_UP_Edit
      side={side}
      team={team}
      setTeam={setTeam}
      setMasterError={setMasterError}
    />
  );
};

export default Finals_UP_Edit;
