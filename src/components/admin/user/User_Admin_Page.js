import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Route, Redirect} from "react-router-dom";
import {loadUsers, findJoe, routes} from "../../../store";
import Single_User_Cont from "./Single_User_Cont";
import Dropdown from "../../Misc/Dropdown";
import Loading from "../../Misc/Loading";
import "./User_Admin.css";

const User_Admin_Page = () => {
    const dispatch = useDispatch();

    const [loadingUser, setLoadingUser] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const joe = findJoe(useSelector(( state ) => state.users));

    const users = useSelector(( state ) => state.users)
    .map(( user, idx ) => {
        user.value = user;

        const koStageCommenced = joe?.tourneyStage >= 4;

        const userPickAudit =
            user.tiebreaker === null
                ? "RED: Group - "
                : koStageCommenced && user.knockChamp === null
                    ? "RED: KO - "
                    : "";

        user.label = `${userPickAudit}${user.name}: ${user.email}`;

        user.rank = user.admin
            ? -1
            : user.tiebreaker === null
                ? idx + 1000
                : koStageCommenced && user.knockChamp === null
                    ? idx + 500
                    : idx;

        return user;
    })
    .sort(( a, b ) => a.rank - b.rank);

    useEffect(() => {
        if (selectedUser !== null) {
            setLoadingUser(true);

            setTimeout(() => {
                setLoadingUser(false);
            }, 500);
        }
    }, [selectedUser]);

    return (
        <div className="admin-page">
            <Dropdown
                placeholder="Select User"
                options={users}
                width="40"
                set={( option ) => setSelectedUser(option.value)}
            />

            {loadingUser ? (
                <Loading transparent={true}/>
            ) : (
                <div className="admin-user-container">
                    {selectedUser && (
                        <Route path={routes.adminUsers}>
                            <Redirect
                                to={`${routes.adminUsers}/${selectedUser.id}`}/>
                        </Route>
                    )}

                    {selectedUser && <Single_User_Cont/>}
                </div>
            )}
        </div>
    );
};

export default User_Admin_Page;
