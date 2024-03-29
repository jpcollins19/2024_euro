import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {findJoe, routes} from "../../../../../../store";
import Button from "../../../../../Misc/Button";
import Top_Arrow_Cont from "./arrows/top/Top_Arrow_Cont";
import Bottom_Arrow_Cont from "./arrows/bottom/Bottom_Arrow_Cont";
import KO_Data_Cont_Z_In from "./KO_Data_Cont_Z_In";

const KO_Main_Cont_Z_In = ( {user, zoomData, resetMasterError} ) => {
    const joe = findJoe(useSelector(( state ) => state.users));

    return (
        <div className="ko-cont-zoomed-in-edit">
            <h1
                onClick={() => {
                    zoomData.setZoomedOut(true);
                    zoomData.setZoomedInRegion(null);
                }}
                className="black-text"
            >
                Back to KO Overview
            </h1>

            {joe?.tourneyStage === 4 && user?.tiebreaker && (
                <Link
                    to={routes.myPicksEditKo}
                    style={{textDecoration: "none", color: "black"}}
                >
                    <Button
                        text={`${user?.knockQ1 ? "Adjust"
                            : "Select"} Knockout Picks`}
                    />
                </Link>
            )}

            <div className="ko-data-cont-outside-z-in-edit">
                <Top_Arrow_Cont zoomData={zoomData} user={user}/>
                <KO_Data_Cont_Z_In
                    zoomData={zoomData}
                    user={user}
                    resetMasterError={resetMasterError}
                />
                <Bottom_Arrow_Cont zoomData={zoomData} user={user}/>
            </div>
        </div>
    );
};

export default KO_Main_Cont_Z_In;
