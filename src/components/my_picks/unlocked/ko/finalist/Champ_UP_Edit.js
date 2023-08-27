// import { useState, useEffect } from "react";
// import { finalMatchups } from "../../../../store";
import KO_Box_UP_Edit from "../KO_Box_UP_Edit";

const Champ_UP_Edit = ({ userPicks }) => {
  const team = userPicks.champ;
  // const games = [...finalMatchups.S1, ...finalMatchups.S2];

  // const [team, setTeam] = useState(null);

  // const findTeam = () => {
  //   setTeam(null);
  //   games.forEach((game) => {
  //     const teamsToAudit = results[game];

  //     teamsToAudit.forEach((team) => {
  //       if (team.advanceToChamp) {
  //         setTeam(team);
  //       }
  //     });
  //   });
  // };

  // useEffect(() => {
  //   findTeam();
  // }, []);

  // useEffect(() => {
  //   findTeam();
  // }, [userClick]);

  // return <KO_Box_Edit_C champ={true} team={team} />;
  return <KO_Box_UP_Edit champ={true} team={team} />;
};

export default Champ_UP_Edit;
