import {Link} from "react-router-dom";
import {cap1stLetter, userStatusClass, routes} from "../../store";

const Input_Field = ( {input, rankInfo} ) => {
    return (
        <div className={`${input}-column`}>
            <h2 className="white-text">{cap1stLetter(input)}</h2>
            {rankInfo?.map(( user, idx ) => {
                return input === "name" ? (
                    <Link key={idx} to={`${routes.poolPicks}/${user?.id}`}>
                        <div
                            className={`${
                                input === "name" ? input : "small"
                            }-box center bold ${userStatusClass(user)}`}
                        >
                            {user[input]}
                        </div>
                    </Link>
                ) : (
                    <div key={idx}>
                        <div
                            className={`small-box center bold ${userStatusClass(
                                user)}`}>
                            {user[input]}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default Input_Field;
