import Game_Cont_Edit_C from "../Game_Cont_Edit_C";

const R16_Column_Edit_C = ({side, region, results, adjustResults}) => {
    return (
        <div>
            <Game_Cont_Edit_C
                side={side}
                results={results}
                region={region}
                gameNum={1}
                adjustResults={adjustResults}
            />
            <Game_Cont_Edit_C
                side={side}
                results={results}
                region={region}
                gameNum={2}
                adjustResults={adjustResults}
            />
        </div>
    );
};

export default R16_Column_Edit_C;
