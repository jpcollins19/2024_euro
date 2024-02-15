import {useState} from "react";
import {Link} from "react-router-dom";
import {routes} from '../../store'
import Loading from "./Loading";
import "./Misc.css";

const No_Match = () => {
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 500);

    return loading ? (
        <Loading/>
    ) : (
        <div className="no-match-page">
            <div>
                <h1>404 Error</h1>
                <Link to={routes.leaderboard}>
                    <h2>Click here for the Home Page</h2>
                </Link>
            </div>
        </div>
    );
};

export default No_Match;
