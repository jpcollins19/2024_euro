import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import {me, loadUsers, findJoe, loadTeams} from "../../../store";
import Loading from "../../Misc/Loading";
import Button from "../../Misc/Button";
import Point_System_Cont from "./Point_System_Cont";
import Single_Group_Cont_Locked from "./group/Single_Group_Cont_Locked";
import Total_Points_Cont from "./Total_Points_Cont";
import Knockout_Cont_Locked from "./ko/Knockout_Cont_Locked";
import "./My_Picks_Locked.css";

const My_Picks_Locked_Page = () => {
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(true);
    const [zoomedOut, setZoomedOut] = useState(true);
    const [zoomedInRegion, setZoomedInRegion] = useState(1);

    const zoomData = {
        zoomedOut: zoomedOut,
        setZoomedOut: setZoomedOut,
        zoomedInRegion: zoomedInRegion,
        setZoomedInRegion: setZoomedInRegion,
    };

    useEffect(() => {
        dispatch(me());
        dispatch(loadUsers());
        dispatch(loadTeams());
    }, []);

    setTimeout(() => {
        setLoading(false);
    }, 500);

    const user = useSelector((state) => state.auth);

    const joe = findJoe(useSelector((state) => state.users));

    const letters = ["A", "B", "C", "D", "E", "F"];

    return loading ? (
        <Loading/>
    ) : zoomedOut ? (
        <div className="my-picks-page">
            <div className="top">
                <div className="name-cont">
                    <h1 className="white-text">{user?.name}</h1>
                </div>

                {joe?.tourneyStage === 1 && (
                    <Link
                        to="/my_picks_edit_group"
                        style={{textDecoration: "none", color: "black"}}
                    >
                        <Button
                            text={`${user?.tiebreaker ? "Adjust"
                                : "Select"} Group Picks`}
                        />
                    </Link>
                )}

                {joe?.tourneyStage === 4 && user?.tiebreaker && (
                    <Link
                        to="/my_picks_edit_ko"
                        style={{textDecoration: "none", color: "black"}}
                    >
                        <Button
                            text={`${user?.knockQ1 ? "Adjust"
                                : "Select"} Knockout Picks`}
                        />
                    </Link>
                )}

                {user?.tiebreaker && joe.tourneyStage <= 3 && (
                    <Point_System_Cont tourneyStage={joe?.tourneyStage}/>
                )}
            </div>

            {user?.tiebreaker && <Total_Points_Cont/>}

            {joe?.tourneyStage >= 4 && user?.tiebreaker && (
                <div className="box">
                    <div className="ko-predictions-cont">
                        <Knockout_Cont_Locked user={user} zoomData={zoomData}/>
                    </div>
                </div>
            )}

            {user?.tiebreaker && (
                <div
                    className={
                        joe.tourneyStage >= 4 ? "stage-4-group-cont-outside"
                            : "box"
                    }
                >
                    {joe.tourneyStage >= 4 && (
                        <Point_System_Cont tourneyStage={joe?.tourneyStage}/>
                    )}

                    <div
                        className={`group-predictions-cont ${
                            joe?.tourneyStage <= 2 ? "gpc-2" : ""
                        }`}
                    >
                        {letters.map((letter) => (
                            <Single_Group_Cont_Locked key={letter}
                                                      group={letter}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    ) : (
        <div className="ko-predictions-cont">
            <Knockout_Cont_Locked user={user} zoomData={zoomData}/>
        </div>
    );
};

export default My_Picks_Locked_Page;
