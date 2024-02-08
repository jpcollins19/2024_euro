import { useState, useEffect, useRef } from "react";
import Payout from "../../leaderboard/Payout";

const Payout_Cont_M = () => {
  const [showMobilePayoutData, setShowMobilePayoutData] = useState(false);

  const handleClick = () => setShowMobilePayoutData(!showMobilePayoutData);
  const closeMobileMenu = () => setShowMobilePayoutData(false);

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      !ref.current.contains(event.target) &&
        event.target.className !== "dropdown-route-row" &&
        closeMobileMenu();
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
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
        <Payout isMobile={true} showMobilePayoutData={showMobilePayoutData} />
      )}
    </div>
  );
};

export default Payout_Cont_M;
