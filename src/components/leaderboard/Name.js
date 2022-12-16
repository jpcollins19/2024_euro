const Name = ({ rankInfo }) => {
  return (
    <div className="name-column">
      <h2 className="white-text">Name</h2>
      {rankInfo &&
        rankInfo.map((user, idx) => (
          <div key={idx}>
            <input
              className={`name-box center bold ${
                user.tieExists ? "tie-tie" : ""
              } ${user.paid ? "paid" : "not-paid"}`}
              defaultValue={`${user.name}${!user.paid ? " - not paid" : ""}${
                user.tieExists ? " - same tiebreaker" : ""
              }`}
            />
          </div>
        ))}
    </div>
  );
};

export default Name;
