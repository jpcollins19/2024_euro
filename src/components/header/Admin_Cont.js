import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
    changeUpdated,
    loadUpdated,
    loadUsersWhoNeedWebsiteUpdatedEmails,
} from "../../store";
import Last_Updated from "./Last_Updated";

const Admin_Cont = () => {
    const dispatch = useDispatch();

    const [updatingText, setUpdatingText] = useState(false);
    const [text, setText] = useState(null);

    const lastUpdatedData = useSelector((state) => state.updated)[0];

    useEffect(() => {
        dispatch(loadUpdated());
    }, []);

    useEffect(() => {
        setText(lastUpdatedData?.answer);
    }, [lastUpdatedData]);

    const onSubmit = async (evt) => {
        evt.preventDefault();

        try {
            if (!updatingText) {
                const obj = {
                    id: lastUpdatedData.id,
                    answer: text,
                };

                dispatch(changeUpdated(obj));
                setUpdatingText(false);
                // dispatch(loadUsersWhoNeedWebsiteUpdatedEmails());
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            id="submit-last-updated"
            className="update-last-updated-admin"
        >
            <button onClick={() => setUpdatingText(!updatingText)}>
                {updatingText ? "Save" : "Edit"}
            </button>

            {updatingText ? (
                <input
                    defaultValue={text}
                    onChange={(ev) => setText(ev.target.value)}
                />
            ) : (
                <Last_Updated text={text}/>
            )}
        </form>
    );
};

export default Admin_Cont;
