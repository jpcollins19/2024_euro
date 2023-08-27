const Correct_Team = ({ team }) => {
  return (
    <div className="ko-box ko-box-large correct-team-cont">
      <div className="team-ko-img-cont">
        <img className="team-flag-ko-champ" src={team?.flag} />
        <p className="team-name-ko-champ">{team?.name}</p>
      </div>
    </div>
  );
};

export default Correct_Team;
