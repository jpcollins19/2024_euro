const KO_Box_UP_Edit = ({ side, champ, team, setTeam, resetMasterError }) => {
  const teamClass = !team ? "missing" : "edit";

  return (
    <div
      className={` ko-box-${teamClass} ko-box-${side} ko-box-${
        champ ? "large" : "small"
      }`}
      onClick={() => {
        if (!champ) {
          resetMasterError();
          setTeam(team);
        }
      }}
    >
      {team && (
        <div className="team-ko-img-cont">
          <img
            className={`${champ ? "team-flag-ko-champ" : "team-flag-ko"}`}
            src={team?.flag}
          />

          <p className={`${champ ? "team-name-ko-champ" : "team-name-ko"}`}>
            {team?.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default KO_Box_UP_Edit;
