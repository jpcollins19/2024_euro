import Regoin_Left from "./regoin/Regoin_Left";
import Regoin_Right from "./regoin/Regoin_Right";
import KO_Final_Four_Cont from "./final_four/KO_Final_Four_Cont";

const KO_Main_Cont_Out = ({ user, zoomData, resetMasterError }) => {
  return (
    <div
      onClick={() => zoomData.setZoomedOut(false)}
      className="ko-cont-unlocked-main-m"
    >
      <div className="ko-cont-half-unlocked-m">
        <Regoin_Left
          regoin={1}
          zoomData={zoomData}
          user={user}
          resetMasterError={resetMasterError}
        />
        <Regoin_Right
          regoin={3}
          zoomData={zoomData}
          user={user}
          resetMasterError={resetMasterError}
        />
      </div>
      <KO_Final_Four_Cont
        regoin={5}
        zoomData={zoomData}
        user={user}
        resetMasterError={resetMasterError}
      />
      <div className="ko-cont-half-unlocked-m">
        <Regoin_Left
          regoin={2}
          zoomData={zoomData}
          user={user}
          resetMasterError={resetMasterError}
        />
        <Regoin_Right
          regoin={4}
          zoomData={zoomData}
          user={user}
          resetMasterError={resetMasterError}
        />
      </div>
    </div>
  );
};

export default KO_Main_Cont_Out;
