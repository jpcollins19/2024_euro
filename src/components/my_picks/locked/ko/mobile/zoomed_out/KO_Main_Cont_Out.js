import { useSelector } from "react-redux";
import { findJoe } from "../../../../../../store";
import Regoin_Left from "./regoin/Regoin_Left";
import Regoin_Right from "./regoin/Regoin_Right";
import KO_Final_Four_Cont from "./final_four/KO_Final_Four_Cont";

const KO_Main_Cont_Out = ({ user, zoomData }) => {
  const joe = findJoe(useSelector((state) => state.users));

  let koContClass = "ko-cont-not-submitted";
  let koClassVerbiage = "user-not-submitted";
  let koVerbiage = "Not Submitted";

  if (user?.knockChamp) {
    const stage4 = joe?.tourneyStage === 4;

    koContClass = stage4 ? "ko-cont-submitted" : "";
    koClassVerbiage = stage4 ? "user-submitted" : "";
    koVerbiage = stage4 ? "Submitted" : "";
  }

  return (
    <div className={`knockout-cont-mobile ${koContClass}`}>
      <h1 className="white-text">Knockout</h1>

      <h3 className={koClassVerbiage}>{koVerbiage}</h3>

      <div onClick={() => zoomData.setZoomedOut(false)}>
        <div className="ko-cont-half">
          <Regoin_Left user={user} regoin={1} zoomData={zoomData} />
          <Regoin_Right user={user} regoin={3} zoomData={zoomData} />
        </div>
        <KO_Final_Four_Cont user={user} regoin={5} zoomData={zoomData} />
        <div className="ko-cont-half">
          <Regoin_Left user={user} regoin={2} zoomData={zoomData} />
          <Regoin_Right user={user} regoin={4} zoomData={zoomData} />
        </div>
      </div>
    </div>
  );
};

export default KO_Main_Cont_Out;
