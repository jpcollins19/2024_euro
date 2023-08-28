import Game_Cont_UP_Edit from "../Game_Cont_UP_Edit";

const R16_Column_UP_Edit = ({ side, regoin, userPicks, setMasterError }) => {
  return (
    <div>
      <Game_Cont_UP_Edit
        side={side}
        userPicks={userPicks}
        regoin={regoin}
        gameNum={1}
        setMasterError={setMasterError}
      />
      <Game_Cont_UP_Edit
        side={side}
        userPicks={userPicks}
        regoin={regoin}
        gameNum={2}
        setMasterError={setMasterError}
      />
    </div>
  );
};

export default R16_Column_UP_Edit;
