import {useState, useEffect, useRef} from "react";
import Payout from "../../leaderboard/Payout";
import {handleMobileClick} from "../../../store";

const Payout_Cont_M = () => {
    const [showMobilePayoutData, setShowMobilePayoutData] = useState(false);

    const handleClick = () => setShowMobilePayoutData(!showMobilePayoutData);
    const closeMobileMenu = () => setShowMobilePayoutData(false);

    let ref = useRef();

    useEffect(() => {
        return handleMobileClick(ref, closeMobileMenu)
    }, [showMobilePayoutData]);

    return (
        <div>
            <div
                className="view-payout-info-mobile"
                onClick={handleClick}
                ref={ref && ref}
            >
                Payout Info
            </div>

            {showMobilePayoutData && (
                <Payout isMobile={true}
                        showMobilePayoutData={showMobilePayoutData}/>
            )}
        </div>
    );
};

export default Payout_Cont_M;
