import Game_Cont_C from "../Game_Cont_C";

const R16_Column_C = ({ side, regoin, user }) => {
  return (
    <div>
      <Game_Cont_C side={side} regoin={regoin} gameNum={1} user={user} />
      <Game_Cont_C side={side} regoin={regoin} gameNum={2} user={user} />
    </div>
  );
};

export default R16_Column_C;
