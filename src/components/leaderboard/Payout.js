import { useEffect } from "react";
import { useSelector } from "react-redux";

const Payout = () => {
  const submittedPicks = useSelector((state) => state.users).filter(
    (user) => user.tiebreaker !== null
  );

  useEffect(() => {
    calcPayout();
  }, [submittedPicks?.length]);

  const payoutInfo = submittedPicks?.length * 20;

  let firstPlace, secondPlace, thirdPlace;

  const calcPayout = () => {
    switch (submittedPicks?.length) {
      case 1:
        firstPlace = 15;
        secondPlace = 5;
        thirdPlace = 0;
        break;
      case 2:
        firstPlace = 30;
        secondPlace = 10;
        thirdPlace = 0;
        break;
      case 3:
        firstPlace = 45;
        secondPlace = 15;
        thirdPlace = 0;
        break;
      case 4:
        firstPlace = 60;
        secondPlace = 20;
        thirdPlace = 0;
        break;
      default:
        thirdPlace = 20;
        firstPlace = (payoutInfo - thirdPlace) * 0.75;
        secondPlace = (payoutInfo - thirdPlace) * 0.25;
    }
  };

  calcPayout();

  return (
    <div className="payout-cont-outside white-text">
      <div className="payout-cont-inside">
        <h4 className="verbiage payout">Payout</h4>
        <div className="payout-text-cont">
          <div className="place-col-cont">
            <div className="tl">1st</div>
            <div>2nd</div>
            <div className="bl">3rd</div>
          </div>
          <div className="dollar-col-cont">
            <div className="tr">${firstPlace.toFixed(2)}</div>
            <div>${secondPlace.toFixed(2)}</div>
            <div className="br">${thirdPlace.toFixed(2)}</div>
          </div>
        </div>
        <h5 className="submitted verbiage">
          # of submitted picks: {submittedPicks?.length}
        </h5>
      </div>
    </div>
  );
};

export default Payout;
