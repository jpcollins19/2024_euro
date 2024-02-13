import {useSelector} from "react-redux";
import {findJoe} from "../../../../../../store";
import Region_Left from "./region/Region_Left";
import Region_Right from "./region/Region_Right";
import KO_Final_Four_Cont from "./final_four/KO_Final_Four_Cont";

const KO_Main_Cont_Out = ({user, zoomData}) => {
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
                    <Region_Left user={user} region={1} zoomData={zoomData}/>
                    <Region_Right user={user} region={3} zoomData={zoomData}/>
                </div>
                <KO_Final_Four_Cont user={user} region={5} zoomData={zoomData}/>
                <div className="ko-cont-half">
                    <Region_Left user={user} region={2} zoomData={zoomData}/>
                    <Region_Right user={user} region={4} zoomData={zoomData}/>
                </div>
            </div>
        </div>
    );
};

export default KO_Main_Cont_Out;
