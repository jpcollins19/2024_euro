import { cap1stLetter, userStatusClass } from "../../store";

const Input_Field = ({ input, rankInfo }) => {
  return (
    <div className={`${input}-column`}>
      <h2 className="white-text">{cap1stLetter(input)}</h2>
      {rankInfo &&
        rankInfo.map((user, idx) => (
          <div key={idx}>
            <div
              className={`${
                input === "name" ? input : "small"
              }-box center bold ${userStatusClass(user)}`}
            >
              {user[input]}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Input_Field;
