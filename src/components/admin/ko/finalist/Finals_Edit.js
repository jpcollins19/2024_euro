import { useState, useEffect } from "react";
import { finalMatchups } from "../../../../store";
import KO_Box_Edit_C from "../KO_Box_Edit_C";

const Finals_Edit = ({ side, results, adjustResults, userClick }) => {
  const key = side === "left" ? "S1" : "S2";
  const games = finalMatchups[key];

  const [team, setTeam] = useState(null);
  const [game, setGame] = useState(null);

  const findTeam = () => {
    setTeam(null);
    setGame(null);
    games.forEach((game) => {
      const teamsToAudit = results[game];

      teamsToAudit.forEach((team) => {
        if (team.advanceToF) {
          setTeam(team);
          setGame(game);
        }
      });
    });
  };

  useEffect(() => {
    findTeam();
  }, []);

  useEffect(() => {
    findTeam();
  }, [userClick]);

  return (
    <KO_Box_Edit_C
      side={side}
      team={team}
      game={game}
      adjustResults={adjustResults}
      round={"F"}
    />
  );
};

export default Finals_Edit;
