const Input_Cont = ({ entry, answer, toggle }) => {
  return (
    <div className="check-box-cont">
      {entry}:
      <input
        type="checkbox"
        defaultValue={answer}
        onChange={toggle}
        checked={answer ? answer : !!answer}
      ></input>
    </div>
  );
};

export default Input_Cont;
