import {useSelector} from "react-redux";
import {useLocation, Link} from "react-router-dom";
import {getNavBarVerbiageFromPath, routes} from "../../../store";
import CssBaseline from "@mui/material/CssBaseline";
import Menu_Chevron from "./Menu_Chevron";
import Misc_Header_Data from "../Misc_Header_Data";

const Header_M = () => {
    const {pathname} = useLocation();

    const user = useSelector(( state ) => state.auth);

    const verbiage = getNavBarVerbiageFromPath(pathname)

    const urlMobileClass = `url-mobile${verbiage ? '-selected' : ''}`

    return (
        <div className="navbar-cont-mobile">
            <Misc_Header_Data user={user}/>

            <Link to={routes.home}>
                <CssBaseline/>
                2024 Euros
            </Link>

            <div className={urlMobileClass}>
                {verbiage}
            </div>

            <Menu_Chevron/>
        </div>
    );
};

export default Header_M;
