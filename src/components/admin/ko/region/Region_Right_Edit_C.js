import R16_Column_Edit_C from "./R16_Column_Edit_C";
import R8_Column_Edit_C from "./R8_Column_Edit_C";
import R4_Column_Edit_C from "./R4_Column_Edit_C";

const Region_Right = ({region, results, adjustResults, userClick}) => {
    return (
        <div className="region-cont-c">
            <R4_Column_Edit_C
                side="right"
                region={region}
                results={results}
                adjustResults={adjustResults}
                userClick={userClick}
            />
            <R8_Column_Edit_C
                side="right"
                region={region}
                results={results}
                adjustResults={adjustResults}
                userClick={userClick}
            />
            <R16_Column_Edit_C
                side="right"
                region={region}
                results={results}
                adjustResults={adjustResults}
            />
        </div>
    );
};

export default Region_Right;
