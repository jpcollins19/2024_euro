import Left_Arrow_Cont from "./arrows/Left_Arrow_Cont";
import Right_Arrow_Cont from "./arrows/Right_Arrow_Cont";
import Arrow_Cont_Placeholder from "./arrows/Arrow_Cont_Placeholder";
import Regoin_Left_Z_In from "./regoin/Regoin_Left_Z_In";
import Regoin_Right_Z_In from "./regoin/Regoin_Right_Z_In";
import Final_Four_Cont_Z_In from "./final_four/Final_Four_Cont_Z_In";

const KO_Data_Cont = ({ user, zoomData, resetMasterError }) => {
  const validRegoins_left = [3, 4];
  const validRegoins_right = [1, 2];

  const showArrow_left = validRegoins_left.includes(zoomData.zoomedInRegoin);
  const showArrow_right = validRegoins_right.includes(zoomData.zoomedInRegoin);

  const regoin = zoomData.zoomedInRegoin;

  return (
    <div className="ko-data-cont-middle-z-in">
      {showArrow_left ? (
        <Left_Arrow_Cont zoomData={zoomData} user={user} />
      ) : (
        <Arrow_Cont_Placeholder />
      )}

      <div className="ko-data-cont-inside-z-in">
        {regoin <= 2 && (
          <Regoin_Left_Z_In
            regoin={regoin}
            user={user}
            resetMasterError={resetMasterError}
          />
        )}

        {regoin > 2 && regoin < 5 && (
          <Regoin_Right_Z_In
            regoin={regoin}
            user={user}
            resetMasterError={resetMasterError}
          />
        )}

        {regoin === 5 && (
          <Final_Four_Cont_Z_In
            regoin={regoin}
            user={user}
            resetMasterError={resetMasterError}
          />
        )}
      </div>

      {showArrow_right ? (
        <Right_Arrow_Cont zoomData={zoomData} user={user} />
      ) : (
        <Arrow_Cont_Placeholder />
      )}
    </div>
  );
};

export default KO_Data_Cont;
