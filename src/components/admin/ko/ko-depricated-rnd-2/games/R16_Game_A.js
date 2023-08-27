const R16_Game_A = ({ game, results, adjustResults }) => {
  const teamsPlayingInMatch = results[game];

  return (
    <div className="R16-game">
      {teamsPlayingInMatch.map((team, idx) => (
        <div
          key={team.id}
          className="team-ko-img-cont reg-input"
          onClick={() => {
            adjustResults({ game, round: "R16", teamPos: idx + 1 });
          }}
        >
          <img className="team-flag-ko" src={team.flag} />
          <p className="team-name-ko-edit">{team.name}</p>
        </div>
      ))}
    </div>
  );
};

export default R16_Game_A;
