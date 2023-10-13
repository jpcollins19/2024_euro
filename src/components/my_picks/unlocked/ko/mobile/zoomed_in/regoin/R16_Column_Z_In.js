import Game_Cont_Z_In from "../Game_Cont_Z_In";

const R16_Column_Z_In = ({ side, regoin, user, resetMasterError }) => {
  return (
    <div>
      <Game_Cont_Z_In
        side={side}
        regoin={regoin}
        gameNum={1}
        user={user}
        resetMasterError={resetMasterError}
      />
      <Game_Cont_Z_In
        side={side}
        regoin={regoin}
        gameNum={2}
        user={user}
        resetMasterError={resetMasterError}
      />
    </div>
  );
};

export default R16_Column_Z_In;
