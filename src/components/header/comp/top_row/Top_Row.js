import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {routes, getIsUserSignedIn} from '../../../../store'
import User_Profile_Dropdown from "../../../UserAccount/User_Profile_Dropdown";
import Misc_Header_Data from "../../Misc_Header_Data";

const Top_Row = () => {
    const user = useSelector(( state ) => state.auth);

    const isUserSignedIn = getIsUserSignedIn(user)

    return (
        <div className="top-row-navbar">
            <Link to={routes.leaderboard}>
                <h1>2024 Euros</h1>
            </Link>

            <Misc_Header_Data user={user}/>

            <div className="login-cont">
                {isUserSignedIn ? (
                    <User_Profile_Dropdown/>
                ) : (

                    <Link to={routes.signIn}>
                        <h1>Sign In</h1>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Top_Row;
