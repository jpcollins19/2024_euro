const Third_Place_Advance_Unlocked = ({ group, onChange, selectionObj }) => {
  const userSelectedThirdPlaceToAdvance =
    selectionObj[group].thirdPlaceAdvanceToKO;

  return (
    <div className="third-place-to-advance-cont-edit">
      <h5></h5>
      <div></div>
      <div></div>
      <div>
        <input
          type="checkbox"
          defaultChecked={userSelectedThirdPlaceToAdvance}
          onChange={() => onChange(group, "thirdPlaceAdvanceToKO")}
        ></input>
      </div>

      <div></div>
    </div>
  );
};

export default Third_Place_Advance_Unlocked;
