const Checkbox_Cont = ({ checkboxInfo }) => {
  return (
    <div className="data-cont-admin-user dcau-checkbox">
      <div>{checkboxInfo?.title}</div>
      <input
        type="checkbox"
        defaultValue={checkboxInfo?.defaultValue}
        onChange={checkboxInfo?.onChange}
        checked={
          checkboxInfo?.defaultValue
            ? checkboxInfo?.defaultValue
            : !!checkboxInfo?.defaultValue
        }
      ></input>
    </div>
  );
};

export default Checkbox_Cont;
