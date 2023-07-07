import { useSelector } from "react-redux";
import { findR16Teams, determineR16Seeding } from "../../../../../store";

const R16_Game_L = ({ game }) => {
  const teams = useSelector((state) => state.teams);

  const seedMatchups = determineR16Seeding();

  const teamsPlayingInMatch = findR16Teams(teams, seedMatchups[game]);

  return (
    <div className="white-text">
      {teamsPlayingInMatch.map((team) => (
        <div key={team.id} className="team-ko-img-cont">
          <img className="team-flag-ko" src={team.flag} />
          <p className="team-name-ko-R16">{team.name}</p>
        </div>
      ))}
    </div>
  );
};

export default R16_Game_L;
