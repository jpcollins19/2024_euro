import {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import {
    cap1stLetter,
    getGroupTeams,
    updateTeam,
    loadTeams,
    routes
} from "../../../store";
import Button from "../../Misc/Button";
import CheckBox_Cont from "./CheckBox_Cont";
import Box from "./Box";

const Single_Cont = ( {group} ) => {
    const dispatch = useDispatch();
    let history = useHistory();

    useEffect(() => {
        dispatch(loadTeams());
    }, []);

    const [id0, setId0] = useState(null);
    const [position0, setPosition0] = useState(null);
    const [flag0, setFlag0] = useState(null);
    const [name0, setName0] = useState(null);
    const [W0, setW0] = useState(null);
    const [D0, setD0] = useState(null);
    const [L0, setL0] = useState(null);
    const [GF0, setGF0] = useState(null);
    const [GA0, setGA0] = useState(null);

    const [id1, setId1] = useState(null);
    const [position1, setPosition1] = useState(null);
    const [flag1, setFlag1] = useState(null);
    const [name1, setName1] = useState(null);
    const [W1, setW1] = useState(null);
    const [D1, setD1] = useState(null);
    const [L1, setL1] = useState(null);
    const [GF1, setGF1] = useState(null);
    const [GA1, setGA1] = useState(null);

    const [id2, setId2] = useState(null);
    const [position2, setPosition2] = useState(null);
    const [flag2, setFlag2] = useState(null);
    const [name2, setName2] = useState(null);
    const [W2, setW2] = useState(null);
    const [D2, setD2] = useState(null);
    const [L2, setL2] = useState(null);
    const [GF2, setGF2] = useState(null);
    const [GA2, setGA2] = useState(null);

    const [id3, setId3] = useState(null);
    const [position3, setPosition3] = useState(null);
    const [flag3, setFlag3] = useState(null);
    const [name3, setName3] = useState(null);
    const [W3, setW3] = useState(null);
    const [D3, setD3] = useState(null);
    const [L3, setL3] = useState(null);
    const [GF3, setGF3] = useState(null);
    const [GA3, setGA3] = useState(null);

    const [groupFinished, setGroupFinished] = useState(null);
    const [thirdPlaceTeamAdvancedToKO, setThirdPlaceTeamAdvancedToKO] =
        useState(null);

    const entries = ["id", "position", "flag", "name", "W", "D", "L", "GF",
        "GA"];

    const teams = useSelector(( state ) => state.teams)

    let groupTeams = getGroupTeams(group, teams)

    useEffect(() => {
        groupTeams.forEach(( team, idx ) => {
            idx === 0 && setGroupFinished(team.groupIsFinished);

            if (idx === 2) {
                setThirdPlaceTeamAdvancedToKO(team.thirdPlaceAndAdvancedToKO);
            }

            entries.forEach(( entry ) => {
                let set;

                if (
                    entry === "id" ||
                    entry === "position" ||
                    entry === "flag" ||
                    entry === "name"
                ) {
                    set = eval(`set${cap1stLetter(entry)}${idx}`);
                } else {
                    set = eval(`set${entry}${idx}`);
                }

                entry === "position"
                    ? set(team.groupFinishingPosition)
                    : set(team[entry]);
            });
        });
    }, [group]);

    const box2Entries = ["W", "D", "L", "GF", "GA"];

    const boxes = [1, 2];

    const toggleGroupFinished = () => setGroupFinished(( value ) => !value);
    const toggleThirdPlaceTeamAdvancedToKO = () =>
        setThirdPlaceTeamAdvancedToKO(( value ) => !value);

    const onChange = ( idx, entry, val ) => {
        let set;

        if (entry === "position") {
            set = eval(`setPosition${idx}`);
        } else if (box2Entries.includes(entry)) {
            set = eval(`set${entry}${idx}`);
        }

        set(val);
    };

    const onSubmit = async ( evt ) => {
        evt.preventDefault();

        try {
            groupTeams.forEach(( team, idx ) => {
                const obj = entries.reduce(( a, entry ) => {
                    if (entry !== "flag" && entry !== "name") {
                        const answer = eval(`${entry}${idx}`);

                        if (entry === "position") {
                            const position = Number(answer);

                            a.groupFinishingPosition = position;

                            if (position === 3) {
                                a.thirdPlaceAndAdvancedToKO = thirdPlaceTeamAdvancedToKO;
                            }
                        } else if (entry === "id") {
                            a[entry] = answer;
                        } else {
                            a[entry] = Number(answer);
                        }
                    }

                    return a;
                }, {});

                obj.groupIsFinished = groupFinished;

                dispatch(updateTeam(obj, history, routes.groupDetails));
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            id="submit-group"
            className="single-group-cont-edit"
        >
            <h3>Group {group}</h3>
            <div className="group-table-cont">
                {boxes.map(( box, idx ) => (
                    <Box
                        key={idx}
                        box={box}
                        groupTeams={groupTeams}
                        onChange={onChange}
                    />
                ))}
            </div>

            <CheckBox_Cont
                defaultValue={groupFinished}
                onChange={toggleGroupFinished}
                verbiage={"Group Is Finished"}
            />

            <CheckBox_Cont
                defaultValue={thirdPlaceTeamAdvancedToKO}
                onChange={toggleThirdPlaceTeamAdvancedToKO}
                verbiage={"Third Place Team Advanced To KO"}
            />

            <Button text="Submit" form="submit-group"/>
        </form>
    );
};

export default Single_Cont;
