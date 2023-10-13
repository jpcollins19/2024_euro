import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { findJoe } from "../../../../../../store";
import Button from "../../../../../Misc/Button";
import Top_Arrow_Cont from "./arrows/top/Top_Arrow_Cont";
import Bottom_Arrow_Cont from "./arrows/bottom/Bottom_Arrow_Cont";
import KO_Data_Cont_Z_In from "./KO_Data_Cont_Z_In";

const KO_Main_Cont_In = ({ user, zoomData }) => {
  const joe = findJoe(useSelector((state) => state.users));

  return (
    <div className="ko-cont-zommed-in">
      <h1
        onClick={() => {
          zoomData.setZoomedOut(true);
          zoomData.setZoomedInRegoin(null);
        }}
        className="white-text"
      >
        Back to My Picks - {zoomData.zoomedInRegoin}
      </h1>

      {joe?.tourneyStage === 4 && user?.tiebreaker && (
        <Link
          to="/my_picks_edit_ko"
          style={{ textDecoration: "none", color: "black" }}
        >
          <Button
            text={`${user?.knockQ1 ? "Adjust" : "Select"} Knockout Picks`}
          />
        </Link>
      )}

      <div className="ko-data-cont-outside-z-in">
        <Top_Arrow_Cont zoomData={zoomData} />
        <KO_Data_Cont_Z_In zoomData={zoomData} user={user} />
        <Bottom_Arrow_Cont zoomData={zoomData} />
      </div>
    </div>
  );
};

export default KO_Main_Cont_In;