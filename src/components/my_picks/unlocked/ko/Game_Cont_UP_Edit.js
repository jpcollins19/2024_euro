import KO_Box_UP_Edit from "./KO_Box_UP_Edit";

const Game_Cont_UP_Edit = ({
  side,
  userPicks,
  regoin,
  gameNum,
  setMasterError,
}) => {
  const gameMapper = {
    left: { 1: { 1: "R16_1", 2: "R16_2" }, 2: { 1: "R16_3", 2: "R16_4" } },
    right: { 3: { 1: "R16_5", 2: "R16_6" }, 4: { 1: "R16_7", 2: "R16_8" } },
  };

  const setTeamMapper = {
    left: { 1: { 1: "Q1", 2: "Q2" }, 2: { 1: "Q3", 2: "Q4" } },
    right: { 3: { 1: "Q5", 2: "Q6" }, 4: { 1: "Q7", 2: "Q8" } },
  };

  const game = gameMapper[side][regoin][gameNum];
  const teamsPlayingInMatch = userPicks[game];

  const game_set = setTeamMapper[side][regoin][gameNum];
  const setTeam = userPicks[`set${game_set}`];

  return (
    <div>
      {teamsPlayingInMatch.map((team, idx) => (
        <KO_Box_UP_Edit
          key={idx}
          side={side}
          team={team}
          setTeam={setTeam}
          setMasterError={setMasterError}
        />
      ))}
    </div>
  );
};

export default Game_Cont_UP_Edit;
