const Correct_Team_Cont = ({ gameInfo, champ }) => {
  return (
    <div className={`correct-team-cont${champ ? "-CL" : ""}`}>
      <div>
        <div className="team-ko-img-cont">
          <img className="team-flag-ko" src={gameInfo.teamThatAdvanced?.flag} />

          <p className={`correct-team-name-ko${champ ? "-CL" : ""}`}>
            {gameInfo.teamThatAdvanced?.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Correct_Team_Cont;
