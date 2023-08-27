import Game_Cont_UP_Edit from "../Game_Cont_UP_Edit";

const R16_Column_UP_Edit = ({ side, regoin, userPicks, toggleUserClick }) => {
  return (
    <div>
      <Game_Cont_UP_Edit
        side={side}
        userPicks={userPicks}
        regoin={regoin}
        gameNum={1}
        toggleUserClick={toggleUserClick}
        //adjustUserPicks={adjustUserPicks}
      />
      <Game_Cont_UP_Edit
        side={side}
        userPicks={userPicks}
        regoin={regoin}
        gameNum={2}
        toggleUserClick={toggleUserClick}
        //adjustUserPicks={adjustUserPicks}
      />
    </div>
  );
};

export default R16_Column_UP_Edit;
