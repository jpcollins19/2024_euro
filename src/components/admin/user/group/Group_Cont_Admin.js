import Single_Group_Cont_Admin from "./Single_Group_Cont_Admin";

const Group_Cont_Admin = ({
  user,
  groupLetters,
  onChangeGroupSelections,
  groupErrorObj,
}) => {
  return (
    <div className="predictions-cont-edit">
      {groupLetters.map((letter) => {
        const groupError = groupErrorObj[`group${letter}Error`];
        const setGroupError = groupErrorObj[`setGroup${letter}Error`];

        return (
          <Single_Group_Cont_Admin
            key={letter}
            user={user}
            group={letter}
            onChangeGroupSelections={onChangeGroupSelections}
            groupError={groupError}
            setGroupError={setGroupError}
          />
        );
      })}
    </div>
  );
};

export default Group_Cont_Admin;
