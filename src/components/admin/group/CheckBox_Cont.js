const CheckBox_Cont = ({ defaultValue, onChange, verbiage }) => {
  return (
    <div className="group-finished-cont">
      {verbiage}
      <input
        type="checkbox"
        defaultValue
        onChange={onChange}
        checked={defaultValue ? defaultValue : !!defaultValue}
      ></input>
    </div>
  );
};

export default CheckBox_Cont;
