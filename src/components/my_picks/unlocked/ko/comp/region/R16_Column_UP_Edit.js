import Game_Cont_UP_Edit from "../Game_Cont_UP_Edit";

const R16_Column_UP_Edit = ({side, region, userPicks, resetMasterError}) => {
    return (
        <div>
            <Game_Cont_UP_Edit
                side={side}
                userPicks={userPicks}
                region={region}
                gameNum={1}
                resetMasterError={resetMasterError}
            />
            <Game_Cont_UP_Edit
                side={side}
                userPicks={userPicks}
                region={region}
                gameNum={2}
                resetMasterError={resetMasterError}
            />
        </div>
    );
};

export default R16_Column_UP_Edit;
