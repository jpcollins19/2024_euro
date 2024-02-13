import Region_Left_Edit_C from "./region/Region_Left_Edit_C";
import Region_Right_Edit_C from "./region/Region_Right_Edit_C";
import Finalist_Cont_Edit from "./finalist/Finalist_Cont_Edit";

const KO_Cont_Edit = ({results, adjustResults, userClick}) => {
    return (
        <div className="ko-cont-edit">
            <div>
                <Region_Left_Edit_C
                    region={1}
                    results={results}
                    adjustResults={adjustResults}
                    userClick={userClick}
                />
                <Region_Left_Edit_C
                    region={2}
                    results={results}
                    adjustResults={adjustResults}
                    userClick={userClick}
                />
            </div>
            <Finalist_Cont_Edit
                results={results}
                adjustResults={adjustResults}
                userClick={userClick}
            />
            <div>
                <Region_Right_Edit_C
                    region={3}
                    results={results}
                    adjustResults={adjustResults}
                    userClick={userClick}
                />
                <Region_Right_Edit_C
                    region={4}
                    results={results}
                    adjustResults={adjustResults}
                    userClick={userClick}
                />
            </div>
        </div>
    );
};

export default KO_Cont_Edit;
