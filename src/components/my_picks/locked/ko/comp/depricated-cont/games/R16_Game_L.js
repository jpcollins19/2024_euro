import { useSelector } from "react-redux";
import {
  findR16Teams,
  determineR16Seeding,
  koGameCalc,
} from "../../../../../../../store";

const R16_Game_L = ({ user, game }) => {
  const teams = useSelector((state) => state.teams);

  const seedMatchups = determineR16Seeding(teams);

  const gameInfo = koGameCalc(user, game, teams);

  const teamsPlayingInMatch = findR16Teams(teams, seedMatchups[game]);

  return (
    <div className="white-text">
      {teamsPlayingInMatch.map((team) => {
        const outOfTourneyClass =
          team.outOfTourney && !team.advanceToQ ? "opacity-60" : "";

        return (
          <div className={`${gameInfo.usersPickClass}-box`}>
            <div key={team.id} className="team-ko-img-cont">
              <img
                className={`team-flag-ko ${outOfTourneyClass}`}
                src={team.flag}
              />
              <p className={`team-name-ko-R16 ${outOfTourneyClass}`}>
                {team.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default R16_Game_L;
