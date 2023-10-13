const KO_Box_Z_In = ({ side, champ, team }) => {
  return (
    <div
      className={`ko-box ko-box-${side} ko-box-${
        champ ? "large-z-in" : "small-z-in"
      } ${team?.userClass}-box ${team?.opacity}`}
    >
      {team?.showPreviousWinnerTop && (
        <div className="previous-round-winner">
          {team?.showPreviousWinnerTop}
        </div>
      )}

      {team && (
        <div
          className={`${team?.nameClass}-z-in ${team?.userClass}-text ${
            !team?.flag ? "hide-text-ko" : ""
          }`}
        >
          {team?.name}
        </div>
      )}

      {team?.showPreviousWinnerBottom && (
        <div className="previous-round-winner">
          {team?.showPreviousWinnerBottom}
        </div>
      )}
    </div>
  );
};

export default KO_Box_Z_In;
