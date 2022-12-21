import Single_Group_Cont_Admin from "./Single_Group_Cont_Admin";

const Group_Cont_Admin = ({ onChangeSelectionObj, groupErrorObj }) => {
  const letters = ["A", "B", "C", "D", "E", "F", "G", "H"];

  return (
    <div className="predictions-cont-edit">
      {letters.map((letter) => {
        const groupError = groupErrorObj[`group${letter}Error`];
        const setGroupError = groupErrorObj[`setGroup${letter}Error`];

        return (
          <Single_Group_Cont_Admin
            key={letter}
            group={letter}
            onChangeSelectionObj={onChangeSelectionObj}
            groupError={groupError}
            setGroupError={setGroupError}
          />
        );
      })}
    </div>
  );
};

export default Group_Cont_Admin;
