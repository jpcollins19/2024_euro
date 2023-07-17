import { useSelector } from "react-redux";
import { determineR16Seeding, findR16Teams } from "../../../../../store";

const R16_Game_UL = ({
  setTeam,
  resetMasterError,
  game,
  setQ1,
  setQ2,
  setQ3,
  setQ4,
  setQ5,
  setQ6,
  setQ7,
  setQ8,
}) => {
  const teams = useSelector((state) => state.teams);

  const setGame = eval(`set${game}`);

  const seedMatchups = determineR16Seeding(teams);

  const teamsPlayingInMatch = findR16Teams(teams, seedMatchups[game]);

  return (
    <div className="R16-game">
      {teamsPlayingInMatch.map((team) => (
        <div
          key={team.id}
          className="team-ko-img-cont reg-input"
          onClick={(ev) => {
            setTeam(setGame, team.name);
            resetMasterError();
          }}
        >
          <img className="team-flag-ko" src={team.flag} />
          <p className="team-name-ko-edit">{team.name}</p>
        </div>
      ))}
    </div>
  );
};

export default R16_Game_UL;
