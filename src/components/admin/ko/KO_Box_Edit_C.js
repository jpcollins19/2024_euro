const KO_Box_Edit_C = ({
  side,
  champ,
  team,
  teamPos,
  adjustResults,
  game,
  round,
}) => {
  return (
    <div
      className={`ko-box-edit ko-box-${side} ko-box-${
        champ ? "large" : "small"
      }`}
      onClick={() => {
        adjustResults({ game, round, teamPos });
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

export default KO_Box_Edit_C;
