import {
  gameMapper_ko_edit,
  setTeamMapper_ko_edit,
} from "../../../../../../store";
import KO_Box_Z_In from "./KO_Box_Z_In";

const Game_Cont_Z_In = ({ side, regoin, gameNum, user, resetMasterError }) => {
  const game = gameMapper_ko_edit[side][regoin][gameNum];
  const teamsPlayingInMatch = user[game];

  const game_set = setTeamMapper_ko_edit[side][regoin][gameNum];
  const setTeam = user[`set${game_set}`];

  return (
    <div>
      {teamsPlayingInMatch.map((team, idx) => (
        <KO_Box_Z_In
          key={idx}
          size="small"
          team={team}
          user={user}
          setTeam={setTeam}
          resetMasterError={resetMasterError}
        />
      ))}
    </div>
  );
};

export default Game_Cont_Z_In;
