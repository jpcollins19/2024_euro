const KO_Box_Z_In = ({ size, team, setTeam, champ, resetMasterError }) => {
  const border = !team ? "ko-pick-missing" : "";

  return (
    <div
      className={`ko-box ko-box-${size}-edit ${border}`}
      onClick={() => {
        if (!champ) {
          resetMasterError && resetMasterError();
          setTeam && setTeam(team);
        }
      }}
    >
      {team && <div className="ko-edit-team-name">{team?.name}</div>}
    </div>
  );
};

export default KO_Box_Z_In;
