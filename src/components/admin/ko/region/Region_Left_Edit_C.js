import R16_Column_Edit_C from "./R16_Column_Edit_C";
import R8_Column_Edit_C from "./R8_Column_Edit_C";
import R4_Column_Edit_C from "./R4_Column_Edit_C";

const Region_Left_Edit_C = ({region, results, adjustResults, userClick}) => {
    return (
        <div className="region-cont-c">
            <R16_Column_Edit_C
                side="left"
                region={region}
                results={results}
                adjustResults={adjustResults}
            />
            <R8_Column_Edit_C
                side="left"
                region={region}
                results={results}
                adjustResults={adjustResults}
                userClick={userClick}
            />
            <R4_Column_Edit_C
                side="left"
                region={region}
                results={results}
                adjustResults={adjustResults}
                userClick={userClick}
            />
        </div>
    );
};

export default Region_Left_Edit_C;
