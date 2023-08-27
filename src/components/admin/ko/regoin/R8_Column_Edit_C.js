import { useState, useEffect } from "react";
import { koGameMapper } from "../../../../store";
import KO_Box_Edit_C from "../KO_Box_Edit_C";

const R8_Column_Edit_C = ({
  side,
  regoin,
  results,
  adjustResults,
  userClick,
}) => {
  const games = koGameMapper[side][regoin];

  const [team1, setTeam1] = useState(null);
  const [game1, setGame1] = useState(null);

  const [team2, setTeam2] = useState(null);
  const [game2, setGame2] = useState(null);

  const findTeams = () => {
    games.forEach((game, idx) => {
      const set_T = eval(`setTeam${idx + 1}`);
      const set_G = eval(`setGame${idx + 1}`);

      set_T(results[game].find((team) => team.advanceToQ));
      set_G(game);
    });
  };

  useEffect(() => {
    findTeams();
  }, []);

  useEffect(() => {
    findTeams();
  }, [userClick]);

  const usersPicksForGame = [
    { team: team1, game: game1 },
    { team: team2, game: game2 },
  ];

  return (
    <div>
      {usersPicksForGame.map((x, idx) => (
        <div key={idx}>
          <KO_Box_Edit_C
            side={side}
            team={x.team}
            game={x.game}
            teamPos={idx + 1}
            adjustResults={adjustResults}
            round={"Q"}
          />
        </div>
      ))}
    </div>
  );
};

export default R8_Column_Edit_C;
