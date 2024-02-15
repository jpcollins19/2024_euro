import {groupLetters} from "../../../../store";
import Single_Group_Cont_Unlocked from "./Single_Group_Cont_Unlocked";

const Group_Cont_Unlocked = ( {
    onChangeSelectionObj,
    groupErrorObj,
    selectionObj,
    resetMasterError,
} ) => {
    return (
        <div className="group-predictions-cont-edit">
            {groupLetters.map(( letter ) => {
                const groupError = groupErrorObj[`group${letter}Error`];
                const setGroupError = groupErrorObj[`setGroup${letter}Error`];

                return (
                    <Single_Group_Cont_Unlocked
                        key={letter}
                        group={letter}
                        onChangeSelectionObj={onChangeSelectionObj}
                        groupError={groupError}
                        setGroupError={setGroupError}
                        selectionObj={selectionObj}
                        resetMasterError={resetMasterError}
                    />
                );
            })}
        </div>
    );
};

export default Group_Cont_Unlocked;
