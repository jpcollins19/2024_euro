const Third_Place_Advance_Locked = ({ selectedUser, group }) => {
  const userSelectedThirdPlaceToAdvance =
    selectedUser[`thirdPlaceAdvanceToKO_Pick_${group}`];

  return (
    <div className="third-place-to-advance-cont">
      <h5></h5>
      <div></div>
      <div></div>
      <div>{userSelectedThirdPlaceToAdvance && "*"}</div>
      <div></div>
    </div>
  );
};

export default Third_Place_Advance_Locked;
