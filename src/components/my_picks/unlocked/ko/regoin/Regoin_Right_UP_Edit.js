import R16_Column_UP_Edit from "./R16_Column_UP_Edit";
import R8_Column_UP_Edit from "./R8_Column_UP_Edit";
import R4_Column_UP_Edit from "./R4_Column_UP_Edit";

const Regoin_Right_UP_Edit = ({ regoin, userPicks, toggleUserClick }) => {
  return (
    <div className="regoin-cont-c">
      <R4_Column_UP_Edit
        side="right"
        regoin={regoin}
        userPicks={userPicks}
        toggleUserClick={toggleUserClick}
        // adjustResults={adjustResults}
        // userClick={userClick}
      />
      <R8_Column_UP_Edit
        side="right"
        regoin={regoin}
        userPicks={userPicks}
        toggleUserClick={toggleUserClick}
        // adjustResults={adjustResults}
        // userClick={userClick}
      />
      <R16_Column_UP_Edit
        side="right"
        regoin={regoin}
        userPicks={userPicks}
        toggleUserClick={toggleUserClick}
        // adjustResults={adjustResults}
      />
    </div>
  );
};

export default Regoin_Right_UP_Edit;
