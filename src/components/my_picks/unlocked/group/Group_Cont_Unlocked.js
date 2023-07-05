import Single_Group_Cont_Unlocked from "./Single_Group_Cont_Unlocked";

const Group_Cont_Unlocked = ({
  onChangeSelectionObj,
  groupErrorObj,
  selectionObj,
}) => {
  const letters = ["A", "B", "C", "D", "E", "F"];

  return (
    <div className="predictions-cont-edit">
      {letters.map((letter) => {
        const groupError_R = groupErrorObj[`group${letter}Error_R`];
        const setGroupError_R = groupErrorObj[`setGroup${letter}Error_R`];

        return (
          <Single_Group_Cont_Unlocked
            key={letter}
            group={letter}
            onChangeSelectionObj={onChangeSelectionObj}
            groupError_R={groupError_R}
            setGroupError_R={setGroupError_R}
            selectionObj={selectionObj}
          />
        );
      })}
    </div>
  );
};

export default Group_Cont_Unlocked;
