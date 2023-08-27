import Regoin_Left from "./regoin/Regoin_Left";
import Regoin_Right from "./regoin/Regoin_Right";
import KO_Final_Four_Cont from "./final_four/KO_Final_Four_Cont";

const KO_Locked_Mobile = ({ user }) => {
  return (
    <div className="knockout-cont-mobile">
      <h1 className="white-text">Knockout</h1>
      <div>
        <div className="ko-cont-half">
          <Regoin_Left />
          <Regoin_Right />
        </div>
        <KO_Final_Four_Cont />
        <div className="ko-cont-half">
          <Regoin_Left />
          <Regoin_Right />
        </div>
      </div>
    </div>
  );
};

export default KO_Locked_Mobile;
