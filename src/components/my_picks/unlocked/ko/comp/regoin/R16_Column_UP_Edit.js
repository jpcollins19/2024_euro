import Game_Cont_UP_Edit from "../Game_Cont_UP_Edit";

const R16_Column_UP_Edit = ({ side, regoin, userPicks, resetMasterError }) => {
  return (
    <div>
      <Game_Cont_UP_Edit
        side={side}
        userPicks={userPicks}
        regoin={regoin}
        gameNum={1}
        resetMasterError={resetMasterError}
      />
      <Game_Cont_UP_Edit
        side={side}
        userPicks={userPicks}
        regoin={regoin}
        gameNum={2}
        resetMasterError={resetMasterError}
      />
    </div>
  );
};

export default R16_Column_UP_Edit;
