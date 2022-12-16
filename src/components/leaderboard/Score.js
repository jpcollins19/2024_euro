const Score = ({ rankInfo }) => {
  return (
    <div className="score-column">
      <h2 className="white-text">Score</h2>
      {rankInfo &&
        rankInfo.map((user, idx) => (
          <div key={idx}>
            <input
              className={`small-box center bold ${
                user.paid ? "paid" : "not-paid"
              } ${user.tieExists ? "tie-tie" : ""}`}
              defaultValue={user.total}
            />
          </div>
        ))}
    </div>
  );
};

export default Score;
