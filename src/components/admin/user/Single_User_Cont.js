import {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useHistory, useLocation} from "react-router-dom";
import {
    deleteUser,
    updateUser,
    loadUsers,
    games_F,
    games_S,
    games_Q,
    groupLetters,
    routes,
    areAllGroupsAreFinished,
    auditThirdPlaceToAdvancePicks,
    cap1stLetter,
    clearArr,
    dupeValInArr,
    findJoe,
    getKOResults
} from "../../../store";
import Button from "../../Misc/Button";
import Error from "../../Misc/Error";
import Input_Cont from "./Input_Cont";
import Checkbox_Cont from "./Checkbox_Cont";
import Group_Cont_Unlocked
    from "../../my_picks/unlocked/group/Group_Cont_Unlocked";
import KO_Cont_UP_Edit from "../../my_picks/unlocked/ko/KO_Cont_UP_Edit";

const Single_User_Cont = () => {
    const dispatch = useDispatch();
    let history = useHistory();
    const {pathname} = useLocation();

    useEffect(() => {
        dispatch(loadUsers());
    }, []);

    const userId = pathname.split(`${routes.adminUsers}/`)[1];

    const user = useSelector(( state ) => state.users).find(
        ( user ) => user.id === userId
    );

    const teams = useSelector(( state ) => state.teams);
    const joe = findJoe(useSelector(( state ) => state.users));

    const [zoomedOut, setZoomedOut] = useState(true);
    const [zoomedInRegion, setZoomedInRegion] = useState(1);

    const zoomData = {
        zoomedOut: zoomedOut,
        setZoomedOut: setZoomedOut,
        zoomedInRegion: zoomedInRegion,
        setZoomedInRegion: setZoomedInRegion,
    };

    const [name, setName] = useState(user?.name);
    const [password, setPassword] = useState(user?.password);
    const [paid, setPaid] = useState(user?.paid);
    const [onlyUpdateTopSection, setOnlyUpdateTopSection] = useState(false);
    const [tourneyStage, setTourneyStage] = useState(user?.tourneyStage);
    const [deleteUserNeeded, setDeleteUserNeeded] = useState(false);
    const [deleteUserConfirmed, setDeleteUserConfirmed] = useState(false);

    const [groupSelections, setGroupSelections] = useState({
        A: {
            1: user?.groupA1?.name ?? null,
            2: user?.groupA2?.name ?? null,
            3: user?.groupA3?.name ?? null,
            4: user?.groupA4?.name ?? null,
            thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_A ?? false,
        },
        B: {
            1: user?.groupB1?.name ?? null,
            2: user?.groupB2?.name ?? null,
            3: user?.groupB3?.name ?? null,
            4: user?.groupB4?.name ?? null,
            thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_B ?? false,
        },
        C: {
            1: user?.groupC1?.name ?? null,
            2: user?.groupC2?.name ?? null,
            3: user?.groupC3?.name ?? null,
            4: user?.groupC4?.name ?? null,
            thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_C ?? false,
        },
        D: {
            1: user?.groupD1?.name ?? null,
            2: user?.groupD2?.name ?? null,
            3: user?.groupD3?.name ?? null,
            4: user?.groupD4?.name ?? null,
            thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_D ?? false,
        },
        E: {
            1: user?.groupE1?.name ?? null,
            2: user?.groupE2?.name ?? null,
            3: user?.groupE3?.name ?? null,
            4: user?.groupE4?.name ?? null,
            thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_E ?? false,
        },
        F: {
            1: user?.groupF1?.name ?? null,
            2: user?.groupF2?.name ?? null,
            3: user?.groupF3?.name ?? null,
            4: user?.groupF4?.name ?? null,
            thirdPlaceAdvanceToKO: user?.thirdPlaceAdvanceToKO_Pick_F ?? false,
        },
    });

    const [tiebreaker, setTiebreaker] = useState(
        user?.tiebreaker ? user?.tiebreaker.toString() : null
    );
    const [masterError, setMasterError] = useState(false);
    const [masterErrorText, setMasterErrorText] = useState(null);
    const [groupAError, setGroupAError] = useState(false);
    const [groupBError, setGroupBError] = useState(false);
    const [groupCError, setGroupCError] = useState(false);
    const [groupDError, setGroupDError] = useState(false);
    const [groupEError, setGroupEError] = useState(false);
    const [groupFError, setGroupFError] = useState(false);
    const [groupGError, setGroupGError] = useState(false);
    const [groupHError, setGroupHError] = useState(false);

    const [Q1, setQ1] = useState(user?.knockQ1 ?? null);
    const [Q2, setQ2] = useState(user?.knockQ2 ?? null);
    const [Q3, setQ3] = useState(user?.knockQ3 ?? null);
    const [Q4, setQ4] = useState(user?.knockQ4 ?? null);
    const [Q5, setQ5] = useState(user?.knockQ5 ?? null);
    const [Q6, setQ6] = useState(user?.knockQ6 ?? null);
    const [Q7, setQ7] = useState(user?.knockQ7 ?? null);
    const [Q8, setQ8] = useState(user?.knockQ8 ?? null);
    const [S1, setS1] = useState(user?.knockS1 ?? null);
    const [S2, setS2] = useState(user?.knockS2 ?? null);
    const [S3, setS3] = useState(user?.knockS3 ?? null);
    const [S4, setS4] = useState(user?.knockS4 ?? null);
    const [F1, setF1] = useState(user?.knockF1 ?? null);
    const [F2, setF2] = useState(user?.knockF2 ?? null);
    const [champ, setChamp] = useState(user?.knockChamp ?? null);

    const groupErrorObj = {
        groupAError: groupAError,
        groupBError: groupBError,
        groupCError: groupCError,
        groupDError: groupDError,
        groupEError: groupEError,
        groupFError: groupFError,
        groupGError: groupGError,
        groupHError: groupHError,
        setGroupAError: setGroupAError,
        setGroupBError: setGroupBError,
        setGroupCError: setGroupCError,
        setGroupDError: setGroupDError,
        setGroupEError: setGroupEError,
        setGroupFError: setGroupFError,
        setGroupGError: setGroupGError,
        setGroupHError: setGroupHError,
    };

    const userPicks = getKOResults(teams);

    const addToUserPicks = ( game ) => {
        const value = eval(game);

        const key_set = `set${game}`;
        const value_set = eval(key_set);

        userPicks[game] = value;
        userPicks[key_set] = value_set;
    };

    games_Q.forEach(( game ) => {
        addToUserPicks(game);
    });

    games_S.forEach(( game ) => {
        addToUserPicks(game);
    });

    games_F.forEach(( game ) => {
        addToUserPicks(game);
    });

    userPicks.champ = champ;
    userPicks.setChamp = setChamp;

    const findTeam = ( game ) => {
        const team = eval(game);
        return team?.name ?? null;
    };

    const togglePaid = () => setPaid(( value ) => !value);

    const toggleOnlyUpdateTopSection = () => {
        setOnlyUpdateTopSection(( value ) => !value);
    };

    const onChangeGroupSelections = ( group, key, answer ) => {
        if (key === "thirdPlaceAdvanceToKO") {
            groupSelections[group][key] = !groupSelections[group][key];
        } else {
            groupSelections[group][key] = answer;
        }
    };

    const errorAudit = [];

    useEffect(() => {
        const teams_R16 = Object.values(getKOResults(teams)).reduce(
            ( a, matchup ) => {
                matchup.forEach(( team ) => {
                    a.push(team?.name);
                });

                return a;
            },
            []
        );

        const teams_quarters = games_Q.map(( game ) => {
            return findTeam(game);
        });

        const teams_semis = games_S.map(( game ) => {
            return findTeam(game);
        });

        const finals = games_F.map(( game ) => {
            return findTeam(game);
        });

        const champion = champ?.name;

        teams_quarters.forEach(( team, idx ) => {
            if (!teams_R16.includes(team)) {
                const set = eval(`setQ${idx + 1}`);
                set(null);
            }
        });

        teams_semis.forEach(( team, idx ) => {
            if (!teams_quarters.includes(team)) {
                const set = eval(`setS${idx + 1}`);
                set(null);
            }
        });

        finals.forEach(( team, idx ) => {
            if (!teams_semis.includes(team)) {
                const set = eval(`setF${idx + 1}`);
                set(null);
            }
        });

        if (!finals.includes(champion)) {
            setChamp(null);
        }
    }, [userPicks]);

    const resetMasterError = () => {
        setMasterError(false);
        setMasterErrorText(null);
    };

    const onSubmit = async ( evt ) => {
        evt.preventDefault();

        try {
            if (tourneyStage > 3 && !areAllGroupsAreFinished(teams)) {
                setMasterError(true);
                setMasterErrorText('1+ groups have not finished');
                return
            }

            const userObj = {
                id: user?.id,
                name,
                password,
                paid,
                tourneyStage,
            };

            if (deleteUserConfirmed) {
                return dispatch(deleteUser(userObj, history, joe?.id));
            }

            if (onlyUpdateTopSection) {
                return dispatch(updateUser(userObj, history, routes.poolPicks));
            }

            // reset all groupErrors to false
            groupLetters.forEach(( letter ) => {
                const setError = eval(`setGroup${letter}Error`);

                setError(false);
            });

            //audit for invalid tiebreakers
            const validTiebreaker = Number(tiebreaker) % 1 === 0;
            const tiebreakerAsArray = tiebreaker?.split("");

            if (
                !validTiebreaker ||
                tiebreaker === "" ||
                tiebreakerAsArray?.includes(" ") ||
                tiebreaker === "0" ||
                tiebreaker === null
            ) {
                setMasterError(true);
                setMasterErrorText("Invalid Tiebreaker Below");

                return;
            }

            userObj.tiebreaker = tiebreaker;

            clearArr(errorAudit);

            // audit for invalid group picks
            groupLetters.forEach(( letter ) => {
                const groupObj = groupSelections[letter];
                const answers = Object.values(groupObj);
                const setError = eval(`setGroup${letter}Error`);

                if (
                    answers.includes(null) ||
                    answers.includes("not-valid") ||
                    dupeValInArr(answers)
                ) {
                    setError(true);
                    errorAudit.push(1);
                }
            });

            if (errorAudit.length) {
                setMasterError(true);
                setMasterErrorText(
                    "Invalid Dropdown Picks in the Group(s) below:");

                return;
            }

            // audit for invalid thirdTeamToAdvance
            const thirdPlaceToAdvanceAudit = auditThirdPlaceToAdvancePicks(
                groupSelections)

            if (thirdPlaceToAdvanceAudit.error) {
                thirdPlaceToAdvanceAudit.groupErrorList.forEach(( letter ) => {
                    const setError = eval(`setGroup${letter}Error`);

                    errorAudit.push(1);
                    setError(true);
                })

                setMasterErrorText(thirdPlaceToAdvanceAudit.errorMessage)

                setMasterError(true)
            }

            groupLetters.forEach(( letter ) => {
                const nums = [1, 2, 3, 4];

                nums.forEach(( num ) => {
                    userObj[`group${letter}${num}`] = groupSelections[letter][num];

                    if (num === 3) {
                        const key = `thirdPlaceAdvanceToKO_Pick_${letter}`;
                        const value = groupSelections[letter].thirdPlaceAdvanceToKO
                            ? groupSelections[letter][num]
                            : null;

                        userObj[key] = value;
                    }
                });
            });

            if (joe?.tourneyStage >= 4) {
                clearArr(errorAudit);

                const koAudit = ( team, game ) => {
                    if (!team) {
                        setMasterError(true);
                        setMasterErrorText("Incomplete Picks Below");
                        errorAudit.push(1);
                    } else {
                        userObj[`knock${game}`] = team;
                    }
                };

                games_Q.forEach(( game ) => {
                    const team = eval(game);

                    koAudit(team?.name, game);
                });

                games_S.forEach(( game ) => {
                    const team = eval(game);

                    koAudit(team?.name, game);
                });

                games_F.forEach(( game ) => {
                    const team = eval(game);

                    koAudit(team?.name, game);
                });

                koAudit(champ?.name, "Champ");
            }

            !masterError &&
            !errorAudit.length &&
            dispatch(updateUser(userObj, history, routes.poolPicks));
        } catch (err) {
            console.log("reeeed error", err);
        }
    };

    const inputs = ["name", "password", "tourneyStage"];

    const checkboxes = [
        {title: "Paid?", defaultValue: paid, onChange: togglePaid},
        {
            title: "Only Update This Section's Info",
            defaultValue: onlyUpdateTopSection,
            onChange: toggleOnlyUpdateTopSection,
        },
    ];

    return (
        <form id="admin-update-user" onSubmit={onSubmit}>
            <div className="admin-user-top">
                <div className="admin-user-submit-button">
                    <Button text="Submit" form="admin-update-user"/>
                </div>

                {user?.name && (
                    <div className="user-details-cont">
                        {inputs.map(( input ) => (
                            <Input_Cont
                                key={input}
                                selectedUser={user}
                                name={input}
                                set={eval(`set${cap1stLetter(input)}`)}
                            />
                        ))}

                        <div className="paid-cont">
                            {checkboxes.map(( checkbox, idx ) => (
                                <Checkbox_Cont key={idx}
                                               checkboxInfo={checkbox}/>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {user?.id && (
                <div className="admin-user-bottom">
                    <div className="master-error-cont-edit-picks">
                        {masterError && <Error error={masterErrorText}/>}
                    </div>
                    {joe?.tourneyStage >= 4 && (
                        <KO_Cont_UP_Edit
                            userPicks={userPicks}
                            resetMasterError={resetMasterError}
                            zoomData={zoomData}
                        />
                    )}
                    <div className="tiebreaker-cont-edit-picks">
                        <h3>Tiebreaker - total number of goals scored:</h3>

                        <input
                            defaultValue={tiebreaker}
                            onChange={( ev ) => {
                                setTiebreaker(ev.target.value);
                                resetMasterError();
                            }}
                        ></input>
                    </div>
                    <div className="edit-group-picks">
                        <Group_Cont_Unlocked
                            onChangeSelectionObj={onChangeGroupSelections}
                            groupErrorObj={groupErrorObj}
                            selectionObj={groupSelections}
                            resetMasterError={resetMasterError}
                        />
                    </div>
                </div>
            )}

            {user?.id && !deleteUserNeeded && (
                <Button text="Delete User"
                        onClick={() => setDeleteUserNeeded(true)}/>
            )}

            {user?.id && deleteUserNeeded && (
                <Button
                    text="Confirm & Delete User"
                    form="admin-update-user"
                    onClick={() => setDeleteUserConfirmed(true)}
                />
            )}
        </form>
    );
};

export default Single_User_Cont;
