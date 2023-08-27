import { useState, useEffect } from "react";
// import { koGameMapper } from "../../../../store";
import KO_Box_UP_Edit from "../KO_Box_UP_Edit";

const R8_Column_UP_Edit = ({ side, regoin, userPicks, toggleUserClick }) => {
  const koGameMapper_userPicks = {
    left: { 1: ["Q1", "Q2"], 2: ["Q3", "Q4"] },
    right: { 3: ["Q5", "Q6"], 4: ["Q7", "Q8"] },
  };
  const games = koGameMapper_userPicks[side][regoin];

  const [team1, setTeam1] = useState(null);
  const [game1, setGame1] = useState(null);

  const [team2, setTeam2] = useState(null);
  const [game2, setGame2] = useState(null);

  const setTeam = userPicks[`setS${regoin}`];

  const findTeams = () => {
    games.forEach((game, idx) => {
      const set_T = eval(`setTeam${idx + 1}`);
      const set_G = eval(`setGame${idx + 1}`);

      set_T(userPicks[game]);
      set_G(game);
    });
  };

  useEffect(() => {
    findTeams();
  }, []);

  useEffect(() => {
    findTeams();
  }, [userPicks]);

  const usersPicksForGame = [
    { team: team1, game: game1 },
    { team: team2, game: game2 },
  ];

  return (
    <div>
      {usersPicksForGame.map((x, idx) => (
        <div key={idx}>
          <KO_Box_UP_Edit
            side={side}
            team={x.team}
            game={x.game}
            setTeam={setTeam}
            toggleUserClick={toggleUserClick}
          />
        </div>
      ))}
    </div>
  );
};

export default R8_Column_UP_Edit;
