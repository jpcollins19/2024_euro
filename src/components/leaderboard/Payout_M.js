const Payout_C = ({ payout, showMobilePayoutData }) => {
  const isActive = showMobilePayoutData ? "active" : "";
  return (
    <ul className={`payout-cont-m ${isActive}`}>
      <div>
        <div className="payout-text-cont">
          <div className="place-col-cont">
            <div className="tl">1st</div>
            <div>2nd</div>
            <div className="bl">3rd</div>
          </div>
          <div className="dollar-col-cont">
            <div className="tr">${payout.firstPlace.toFixed(2)}</div>
            <div>${payout.secondPlace.toFixed(2)}</div>
            <div className="br">${payout.thirdPlace.toFixed(2)}</div>
          </div>
        </div>
        <h5 className="submitted verbiage">
          # of submitted picks: {payout.numOfPicks}
        </h5>
      </div>
    </ul>
  );
};

export default Payout_C;
