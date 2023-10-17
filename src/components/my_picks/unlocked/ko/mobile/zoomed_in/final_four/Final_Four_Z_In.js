import KO_Box_Z_In from "../KO_Box_Z_In";

const Final_Four_Z_In = ({ side, user }) => {
  const gameMapper = { top: [1, 3], bottom: [2, 4] };

  const usersPicksForGame = gameMapper[side].map((gameNum) => {
    const team = user[`S${gameNum}`];
    const nextGameNum = gameNum <= 2 ? 1 : 2;
    const setTeam = user[`setF${nextGameNum}`];

    return { team, setTeam };
  });

  return usersPicksForGame.map((x, idx) => (
    <KO_Box_Z_In
      key={idx}
      team={x.team}
      size="small-medium"
      setTeam={x.setTeam}
    />
  ));
};

export default Final_Four_Z_In;
