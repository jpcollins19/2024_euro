import Correct_Team from "./Correct_Team";

const KO_Box_C = ({ side, champ, team, showCorrectTeam, worldCupWinner }) => {
  return (
    <div
      className={`ko-box ko-box-${side} ko-box-${champ ? "large" : "small"} ${
        team?.userClass
      }-box`}
    >
      {team && (
        <div className="team-ko-img-cont">
          <img className={`${team?.flagClass}`} src={team?.flag} />

          {showCorrectTeam && <Correct_Team team={worldCupWinner} />}

          <p className={`${team?.nameClass} ${team?.userClass}-text`}>
            {team?.name}
          </p>
        </div>
      )}
    </div>
  );
};

export default KO_Box_C;
