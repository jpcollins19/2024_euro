import Team_Row from "./Team_Row";

const Prediction_Cont_Locked = ({ group, selectedUser }) => {
  const nums = [1, 2, 3, 4];

  return (
    <div className="prediction-cont skinny-black-border">
      <h5>Prediction</h5>

      {nums.map((number) => (
        <Team_Row
          key={number}
          number={number}
          group={group}
          selectedUser={selectedUser}
        />
      ))}
    </div>
  );
};

export default Prediction_Cont_Locked;
