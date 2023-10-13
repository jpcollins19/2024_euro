import {
  gameMapper_ko_edit,
  setTeamMapper_ko_edit,
} from "../../../../../store";
import KO_Box_UP_Edit from "./KO_Box_UP_Edit";

const Game_Cont_UP_Edit = ({
  side,
  userPicks,
  regoin,
  gameNum,
  resetMasterError,
}) => {
  const game = gameMapper_ko_edit[side][regoin][gameNum];
  const teamsPlayingInMatch = userPicks[game];

  const game_set = setTeamMapper_ko_edit[side][regoin][gameNum];
  const setTeam = userPicks[`set${game_set}`];

  return (
    <div>
      {teamsPlayingInMatch.map((team, idx) => (
        <KO_Box_UP_Edit
          key={idx}
          side={side}
          team={team}
          setTeam={setTeam}
          resetMasterError={resetMasterError}
        />
      ))}
    </div>
  );
};

export default Game_Cont_UP_Edit;
