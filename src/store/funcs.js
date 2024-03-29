const {
    groupLetters,
    finalMatchups,
    Qs,
    Ss,
    Fs,
    koLetters_maxPts,
    semiMatchups,
    validKoResults,
    regionToAuditMapper,
    tourneyStartDate,
    routes,
    accountCreatedConfirmation,
    passwordResetConfirmation,
    forgotPasswordConfirmation,
} = require("./variables");
const {useSelector} = require("react-redux");

const findJoe = ( arr ) => {
    return arr.find(( user ) => user?.admin);
};

const G = {
    R1: 0,
    R2: 0,
    R3: 0,
    R4: 0,
};

const createCountObj = ( arr, key ) => {
    return arr.reduce(( a, obj ) => {
        a[obj[key]] ? a[obj[key]]++ : (a[obj[key]] = 1);
        return a;
    }, {});
};

const dupeValInArr = ( arr ) => {
    arr?.length === 5 && arr.pop();

    return arr.length !== new Set(arr).size;
};

const formatSelectedUser = ( obj ) => {
    return {value: obj, label: obj.name};
};

const cap1stLetter = ( str ) => {
    let capLetterNeeded = false;

    return str
    .split("")
    .map(( letter, idx ) => {
        if (idx === 0) {
            letter = letter.toUpperCase();
        }

        if (capLetterNeeded) {
            letter = letter.toUpperCase();
            capLetterNeeded = false;
        }

        if (letter === "_") {
            capLetterNeeded = true;
            letter = " ";
        }

        return letter;
    })
    .join("");
};

const findEntry = ( str ) => {
    return str.split("advanceTo")[1];
};

const validateEmail = ( inputText ) => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    return inputText.match(mailformat) ? true : false;
};

const formatEmail = ( email ) => {
    const regex = /[a-zA-Z]/g;

    email = email
    .split("")
    .map(( letter ) => {
        if (letter.match(regex)) {
            letter = letter.toLowerCase();
        }
        return letter;
    })
    .join("");
    return email;
};

const getUserNames = ( arr ) => {
    return arr.map(( user ) => {
        const name = user.name
        .split("")
        .map(( letter ) => letter.toLowerCase())
        .join("");
        return name;
    });
};

const addFakeUser = ( obj, name ) => {
    // const keys = Object.keys(obj);
    // const fakeUser = {};
    // keys.forEach((key) => {
    //   key === "name" ? (fakeUser.name = name) : (fakeUser[key] = obj[key]);
    // });
    // return fakeUser;
};

const findR16Teams = ( teams, koPositions ) => {
    return koPositions.map(( koPos ) =>
        teams.find(( team ) => team.knockoutPosition === koPos)
    );
};

const groupCalc = ( user, group ) => {
    let userGroupPredictions = [];

    for (let i = 1; i <= 4; i++) {
        userGroupPredictions.push(user[`group${group}${i}`]);
    }

    return userGroupPredictions.map(( team, idx ) => {
        const teamTrueFinishingPosition = team.groupFinishingPosition;
        const userPickPosition = idx + 1;

        let points = 0;
        let className = "";

        const userHasThirdPlaceTeamAdvancingFromThisGroup = user[
            `thirdPlaceAdvanceToKO_Pick_${group}`
            ]
            ? true
            : false;

        if (teamTrueFinishingPosition === userPickPosition) {
            switch (userPickPosition) {
                case 1:
                    points = 5;
                    className = "blue";
                    break;
                case 2:
                    points = 4;
                    className = "purple";
                    break;
                case 3:
                    if (
                        team?.thirdPlaceAndAdvancedToKO &&
                        userHasThirdPlaceTeamAdvancingFromThisGroup
                    ) {
                        points = 3;
                        className = "pink";
                    } else {
                        points = 1;
                        className = "green";
                    }
                    break;
                default:
                    points = 1;
                    className = "green";
            }
        }

        let twoPts = false;

        switch (teamTrueFinishingPosition) {
            case 1:
                if (userPickPosition === 2) {
                    twoPts = true;
                }
                if (userPickPosition === 3) {
                    twoPts = true;
                }

                break;
            case 2:
                // if (user?.name === "Pat" && group === "A") {
                //   console.log("teamTrueFinishingPosition", teamTrueFinishingPosition);
                //   console.log("userPickPosition", userPickPosition);
                //   console.log("byah", twoPts);
                // }

                if (userPickPosition === 1) {
                    twoPts = true;
                }

                if (userPickPosition === 3) {
                    if (
                        team?.thirdPlaceAndAdvancedToKO ||
                        userHasThirdPlaceTeamAdvancingFromThisGroup
                    ) {
                        twoPts = true;
                    }
                }

                break;
            case 3:
                if (userPickPosition === 1) {
                    twoPts = true;
                }

                if (userPickPosition === 2 && team?.thirdPlaceAndAdvancedToKO) {
                    twoPts = true;
                }

                break;
        }

        if (twoPts) {
            points = 2;
            className = "orange";
        }

        // if (user?.name === "Pat" && group === "A") {
        //   console.log(points, className);
        // }

        return {points, className};
    });
};

const groupTotalCalc = ( user ) => {
    return groupLetters
    .reduce(( a, letter ) => {
        user[`group${letter}1`].groupIsFinished && a.push(letter);

        return a;
    }, [])
    .reduce(( a, letter ) => {
        groupCalc(user, letter)
        .map(( obj ) => obj.points)
        .forEach(( point ) => {
            a += point;
        });

        return a;
    }, 0);
};

const areAllGroupsAreFinished = ( teams ) => {
    const finishedGroupTeams = teams.reduce(( a, team ) => {
        if (team.groupIsFinished) {
            a++;
        }
        return a;
    }, 0);

    return finishedGroupTeams === 24 ? true : false;
};

const koGameCalc = ( user, game, teams ) => {
    const koTeamSeeding = determineR16Seeding(teams);

    const roundInfoObj = Object.entries(koTeamSeeding).reduce(
        ( a, entry ) => {
            let number = Number(entry[0][1]);

            if (entry[0][0] === "R") {
                number = Number(entry[0][4]);
            }

            a.R16[number] = entry[1];

            const positions = entry[1];

            if (number === 1 || number === 2) {
                positions.forEach(( pos ) => {
                    a.Q[1].push(pos);
                    a.S[1].push(pos);
                });
            }

            if (number === 3 || number === 4) {
                positions.forEach(( pos ) => {
                    a.Q[2].push(pos);
                    a.S[1].push(pos);
                });
            }

            if (number === 5 || number === 6) {
                positions.forEach(( pos ) => {
                    a.Q[3].push(pos);
                    a.S[2].push(pos);
                });
            }

            if (number === 7 || number === 8) {
                positions.forEach(( pos ) => {
                    a.Q[4].push(pos);
                    a.S[2].push(pos);
                });
            }

            return a;
        },
        {
            R16: {
                points: 2,
            },
            Q: {
                1: [],
                2: [],
                3: [],
                4: [],
                points: 4,
            },
            S: {
                1: [],
                2: [],
                points: 6,
            },
        }
    );

    let roundOG = game.split("")[0];
    let number = game.split("")[1];
    let round;

    if (roundOG === "R") {
        roundOG = "R16";
        number = game.split("")[4];
    }

    switch (roundOG) {
        case "R16":
            round = "Q";
            break;
        case "Q":
            round = "S";
            break;
        case "S":
            round = "F";
            break;
    }

    const gameMapper = {
        R16_1: "Q1",
        R16_2: "Q2",
        R16_3: "Q3",
        R16_4: "Q4",
        R16_5: "Q5",
        R16_6: "Q6",
        R16_7: "Q7",
        R16_8: "Q8",
        Q1: "S1",
        Q2: "S2",
        Q3: "S3",
        Q4: "S4",
        S1: "F1",
        S2: "F2",
        Champ: "Champ",
    };

    const koGame = gameMapper[game];

    const usersPick = user[`knock${koGame}`];

    let teamThatAdvanced, points;

    const allGroupsAreFinished = areAllGroupsAreFinished(teams);

    if (allGroupsAreFinished) {
        if (game === "Champ") {
            teamThatAdvanced = teams.find(( team ) => team[`advanceTo${game}`])
                ?? null;
        } else {
            // console.log("roundInfoObj", roundInfoObj);
            // console.log("roundOG", roundOG);
            // console.log("round", round);
            // console.log("number", number);

            // console.log("byah", roundInfoObj[roundOG][number]);

            // const nugget = teams.find((team) => team.name === "England");

            // console.log("nugget", nugget);

            teamThatAdvanced =
                teams.find(
                    ( team ) =>
                        roundInfoObj[roundOG][number].includes(
                            team.knockoutPosition) &&
                        team[`advanceTo${round}`]
                ) ?? null;
        }
    }

    // console.log("teamThatAdvanced", teamThatAdvanced);

    let usersPickClass = "unknown";

    const gameIsFinished = teamThatAdvanced?.name ?? false;

    if (usersPick) {
        if (!gameIsFinished && usersPick.outOfTourney) {
            usersPickClass = "wrong";
        }

        if (gameIsFinished && usersPick?.name) {
            usersPickClass =
                usersPick.name === teamThatAdvanced.name ? "correct" : "wrong";
        }
    }

    if (game === "Champ") {
        points = usersPickClass === "correct" ? 10 : 0;
    } else {
        points = usersPickClass === "correct" ? roundInfoObj[roundOG].points
            : 0;
    }

    return {
        usersPick,
        teamThatAdvanced,
        usersPickClass,
        points,
    };
};

const koRoundCalc = ( user, round, teams ) => {
    // const allGroupsAreFinished = areAllGroupsAreFinished(teams);

    // if (!allGroupsAreFinished) return 0;

    // const koRoundGames = {
    //   quarters: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
    //   semis: ["S1", "S2", "S3", "S4"],
    //   final: ["F1", "F2"],
    //   champion: ["Champ"],
    // };

    const koRoundGames = {
        R16: [
            "R16_1",
            "R16_2",
            "R16_3",
            "R16_4",
            "R16_5",
            "R16_6",
            "R16_7",
            "R16_8",
        ],
        quarters: ["Q1", "Q2", "Q3", "Q4"],
        semis: ["S1", "S2"],
        champion: ["Champ"],
    };

    return koRoundGames[round].reduce(( a, game ) => {
        const result = koGameCalc(user, game, teams);

        // console.log("round", round);
        // console.log("result", result);
        a += result.points;
        return a;
    }, 0);
};

const userTotalPoints = ( user, teams ) => {
    const groupTotal = groupTotalCalc(user);

    //console.log("groupTotal", groupTotal);

    const koRounds = ["R16", "quarters", "semis", "champion"];

    const userHasKOPicks = user.knockChamp ? true : false;

    // console.log("userHasKOPicks", userHasKOPicks);

    const koTotals = koRounds.reduce(( a, round ) => {
        if (userHasKOPicks) {
            // console.log("userTotalPoints - round", round);

            const roundTotal = koRoundCalc(user, round, teams);

            // console.log("userTotalPoints - roundTotal", roundTotal);
            a += roundTotal;
        }
        return a;
    }, 0);

    return groupTotal + koTotals;
    // return groupTotal;
};

const sortNames = ( arr ) => {
    return arr.sort(( a, b ) => {
        let fa = a.name,
            fb = b.name;
        return fa < fb ? -1 : fa > fb ? 1 : 0;
    });
};

const tieBreakerAudit = ( arr, actualGoalsScored ) => {
    const tiebreakerObj = createCountObj(arr, "tiebreaker");

    const audit = arr
    .map(( user ) => {
        user.numOfTimes = tiebreakerObj[user.tiebreaker];
        user.tiebreakerStatus =
            user.tiebreaker === actualGoalsScored
                ? "exact"
                : user.tiebreaker < actualGoalsScored
                    ? "notOver"
                    : "over";
        return user;
    })
    .map(( user ) => {
        if (user.numOfTimes > 1) {
            user.tieExists = true;
        }
        return user;
    })
    .sort(( a, b ) => {
        let fa = a.tiebreakerStatus,
            fb = b.tiebreakerStatus;
        return fa < fb ? -1 : fa > fb ? 1 : 0;
    });

    const auditObj = {
        exact: [],
        notOver: [],
        over: [],
    };

    audit.forEach(( user ) => auditObj[user.tiebreakerStatus].push(user));

    return auditObj;
};

const dupeScoreAudit = ( arr, actualGoalsScored ) => {
    let rank = arr[0].rank;

    const tiebreakerAuditObj = tieBreakerAudit(arr, actualGoalsScored);

    let answer = [];

    Object.keys(tiebreakerAuditObj).forEach(( key ) => {
        let userOrder_OG = tiebreakerAuditObj[key].sort(( a, b ) =>
            key === "over" ? a.tiebreaker - b.tiebreaker : b.tiebreaker
                - a.tiebreaker
        );

        let newUserOrder = Object.entries(
            userOrder_OG.reduce(( a, user ) => {
                if (a[user.tiebreaker]) {
                    a[user.tiebreaker].push(user.name);
                } else {
                    a[user.tiebreaker] = [user.name];
                }
                return a;
            }, {})
        );

        if (key === "notOver") {
            newUserOrder = newUserOrder.sort(( a, b ) => b[0] - a[0]);
        }

        newUserOrder = newUserOrder
        .map(( entry ) => {
            if (entry[1].length > 1) {
                entry[1] = entry[1].sort(( a, b ) => {
                    return a < b ? -1 : a > b ? 1 : 0;
                });
            }
            return entry;
        })
        .reduce(( a, entry ) => {
            entry[1].forEach(( name ) => a.push(name));
            return a;
        }, []);

        newUserOrder = newUserOrder.map(( user ) => {
            userOrder_OG.forEach(( user_OG ) => {
                if (user === user_OG.name) {
                    user = user_OG;
                }
            });
            return user;
        });

        answer = [...answer, ...newUserOrder];
    });

    return answer.map(( user ) => {
        user.rank = rank;
        rank++;
        return user;
    });
};

const sortRank = ( arr ) => {
    let rank = 1;

    return arr.map(( user ) => {
        user.rank = rank;
        rank++;
        return user;
    });
};

const getCurrentScores = ( users, teams, joe, actualGoalsScored = null ) => {
    let rank = 1;

    // const allGroupsAreFinished = areAllGroupsAreFinished(teams);

    const firstAudit = users
    .reduce(( a, user ) => {
        const total = userTotalPoints(user, teams);

        let max_Pts = 0;

        if (user.knockChamp) {
            max_Pts = calcMaxPts(user, teams);
        } else {
            if (joe.tourneyStage === 5) {
                max_Pts = total;
            } else {
                max_Pts = total + 54;
            }
        }

        const userObj = {
            id: user?.id,
            name: user.name,
            tiebreaker: user.tiebreaker,
            total,
            max_Pts,
            tieExists: false,
            paid: user.paid,
        };

        a.push(userObj);

        return a;
    }, [])
    .sort(( a, b ) => b.total - a.total)
    .map(( user ) => {
        user.rank = rank;
        rank++;

        return user;
    });

    // console.log('firstAudit', firstAudit)

    // console.log("firstAudit", firstAudit);

    let readyToRun = false;

    firstAudit.forEach(( user ) => {
        if (user.total !== 0) {
            readyToRun = true;
        }
    });

    if (readyToRun) {
        let dupeScores = [];

        let nonDupeScores = [];

        let newDupeScores = [];

        const scores = createCountObj(firstAudit, "total");

        firstAudit.forEach(( user ) => {
            scores[user.total] === 1
                ? nonDupeScores.push(user)
                : dupeScores.push(user);
        });

        if (dupeScores.length) {
            const scoreObj = dupeScores.reduce(( a, user ) => {
                a[user.total] ? a[user.total].push(user)
                    : (a[user.total] = [user]);
                return a;
            }, {});

            Object.keys(scoreObj).forEach(( key ) => {
                const newDupeScoreRank = dupeScoreAudit(
                    scoreObj[key],
                    actualGoalsScored
                );
                newDupeScores = [...newDupeScores, ...newDupeScoreRank];
            });

            const newRank = [...newDupeScores, ...nonDupeScores];

            return newRank.sort(( a, b ) => a.rank - b.rank);
        }

        return nonDupeScores;
    }

    let result = sortNames(firstAudit);

    if (!readyToRun) {
        result = sortRank(firstAudit);
    }

    return result;
};

const allUsersPaid = ( arr ) => {
    const paidAudit = arr.map(( user ) => user.paid);
    return !paidAudit.includes(false);
};

const usersAreTied = ( arr ) => {
    const tieAudit = arr.map(( user ) => user.tieExists);
    return tieAudit.includes(true);
};

const colorDescriptionTableNeeded = ( arr ) => {
    //audit to see if the color table is needed.
    //returns false if all users are paid, and there are no ties

    const allUsersHavePaid = allUsersPaid(arr);
    const userTieExists = usersAreTied(arr);

    let answer = true;

    if (allUsersHavePaid && !userTieExists) {
        answer = false;
    }

    return answer;
};

const userStatusClass = ( user ) => {
    return !user.paid
        ? "not-paid"
        : user.tieExists
            ? "tie"
            : user.paid
                ? "paid"
                : "";
};

const isPoolPicksPage = ( pathname ) => {
    return pathname === routes.poolPicks;
};

const auditThirdPlaceToAdvancePicks = ( groupSelections ) => {
    const groupWasAnswered = groupLetters.reduce(( a, letter ) => {
        a[letter] = !!groupSelections[letter].thirdPlaceAdvanceToKO;

        return a;
    }, {});

    const groupAnswers = Object.values(groupWasAnswered);

    const falseAudit = groupAnswers.filter(( answer ) => !answer);

    let error = false;
    let groupErrorList = [];
    let errorMessage = null;

    //early exit if IGO
    if (falseAudit.length === 2) {
        return {error, groupErrorList, errorMessage};
    }

    error = true;

    const answeredAudit = groupAnswers.reduce(
        ( a, answer ) => {
            answer ? a.answered++ : a.notAnswered++;

            return a;
        },
        {answered: 0, notAnswered: 0}
    );

    const addToGroupErrorList = ( entryBoolean ) => {
        Object.entries(groupWasAnswered)
        .filter(( entry ) => entry[1] === entryBoolean)
        .forEach(( entry ) => groupErrorList.push(entry[0]));
    };

    const tooManyPicks = answeredAudit.answered > 4;

    const errorMessageBase = "3rd Place To Advance Error:";

    let numOfPicksNeeded, teams;

    if (tooManyPicks) {
        addToGroupErrorList(true);

        numOfPicksNeeded = answeredAudit.answered + -4;
        teams = answeredAudit.answered === 5 ? "team" : "teams";

        errorMessage = `${errorMessageBase} need to un-select ${numOfPicksNeeded} ${teams} from advancing from ${numOfPicksNeeded} of the groups below:`;
    } else {
        addToGroupErrorList(false);

        numOfPicksNeeded = 4 - answeredAudit.answered;
        teams = answeredAudit.answered === 3 ? "team" : "teams";

        errorMessage = `${errorMessageBase} need to select ${numOfPicksNeeded} more ${teams} to advance out of the groups below:`;
    }

    return {error, groupErrorList, errorMessage};
};

// const auditThirdPlaceToAdvancePicks = ( groupSelections ) => {
//
//     const groupWasAnswered = groupLetters.reduce(
//         ( a, letter ) => {
//
//             a[letter] = !!groupSelections[letter].thirdPlaceAdvanceToKO
//
//             return a
//         }, {});
//
//     const groupAnswers = Object.values(groupWasAnswered)
//
//     const falseAudit = groupAnswers.filter(answer => !answer)
//
//     let error = false
//     let groupErrorList = []
//     let errorMessage = null
//
//     //early exit if IGO
//     if (falseAudit.length === 2) {
//         return {error, groupErrorList, errorMessage}
//     }
//
//     error = true
//
//     const answeredAudit = groupAnswers.reduce(( a, answer ) => {
//         answer ? a.answered++ : a.notAnswered++
//
//         return a
//     }, {answered: 0, notAnswered: 0})
//
//     const addToGroupErrorList = ( entryBoolean ) => {
//         Object.entries(groupWasAnswered)
//         .filter(entry => entry[1] === entryBoolean)
//         .forEach(entry => groupErrorList.push(entry[0]))
//     }
//
//     const tooManyPicks = answeredAudit.answered > 4
//
//     const errorMessageBase = '3rd Place To Advance Error:'
//
//     let numOfPicksNeeded, teams
//
//     if (tooManyPicks) {
//         addToGroupErrorList(true)
//
//         numOfPicksNeeded = answeredAudit.answered + -4
//         teams = answeredAudit.answered === 5 ? 'team' : 'teams'
//
//         errorMessage = `${errorMessageBase} need to un-select ${numOfPicksNeeded} ${teams} from advancing from ${numOfPicksNeeded} of the groups below:`
//
//     } else {
//         addToGroupErrorList(false)
//
//         numOfPicksNeeded = 4 - answeredAudit.answered
//         teams = answeredAudit.answered === 3 ? 'team' : 'teams'
//
//         errorMessage = `${errorMessageBase} need to select ${numOfPicksNeeded} more ${teams} to advance out of the groups below:`
//     }
//
//     return {error, groupErrorList, errorMessage}
//
// };

const determineR16Seeding = ( teams ) => {
    const staticGames = {
        R16_2: ["A1", "C2"],
        R16_4: ["D2", "E2"],
        R16_6: ["D1", "F2"],
        R16_8: ["A2", "B2"],
    };

    const groupsThatHaveTeamsAdvancingFrom3rd = teams
    .reduce(( a, team ) => {
        if (team.thirdPlaceAndAdvancedToKO) {
            const teamGroup = team.knockoutPosition.split("")[0];
            a.push(teamGroup);
        }

        return a;
    }, [])
    .sort()
    .reduce(( a, letter ) => {
        a += letter;

        return a;
    }, "");

    const correctMatchups = {
        ABCD: {
            R16_1: ["B1", "A3"],
            R16_3: ["F1", "C3"],
            R16_5: ["E1", "B3"],
            R16_7: ["C1", "D3"],
        },
        ABCE: {
            R16_1: ["B1", "A3"],
            R16_3: ["F1", "C3"],
            R16_5: ["E1", "B3"],
            R16_7: ["C1", "E3"],
        },
        ABCF: {
            R16_1: ["B1", "A3"],
            R16_3: ["F1", "C3"],
            R16_5: ["E1", "B3"],
            R16_7: ["C1", "F3"],
        },
        ABDE: {
            R16_1: ["B1", "D3"],
            R16_3: ["F1", "B3"],
            R16_5: ["E1", "A3"],
            R16_7: ["C1", "E3"],
        },
        ABDF: {
            R16_1: ["B1", "D3"],
            R16_3: ["F1", "B3"],
            R16_5: ["E1", "A3"],
            R16_7: ["C1", "F3"],
        },
        ABEF: {
            R16_1: ["B1", "E3"],
            R16_3: ["F1", "A3"],
            R16_5: ["E1", "B3"],
            R16_7: ["C1", "F3"],
        },
        ACDE: {
            R16_1: ["B1", "E3"],
            R16_3: ["F1", "A3"],
            R16_5: ["E1", "C3"],
            R16_7: ["C1", "D3"],
        },
        ACDF: {
            R16_1: ["B1", "F3"],
            R16_3: ["F1", "A3"],
            R16_5: ["E1", "C3"],
            R16_7: ["C1", "D3"],
        },
        ACEF: {
            R16_1: ["B1", "E3"],
            R16_3: ["F1", "A3"],
            R16_5: ["E1", "C3"],
            R16_7: ["C1", "F3"],
        },
        ADEF: {
            R16_1: ["B1", "E3"],
            R16_3: ["F1", "A3"],
            R16_5: ["E1", "D3"],
            R16_7: ["C1", "F3"],
        },
        BCDE: {
            R16_1: ["B1", "E3"],
            R16_3: ["F1", "C3"],
            R16_5: ["E1", "B3"],
            R16_7: ["C1", "D3"],
        },
        BCDF: {
            R16_1: ["B1", "F3"],
            R16_3: ["F1", "B3"],
            R16_5: ["E1", "C3"],
            R16_7: ["C1", "D3"],
        },
        BCEF: {
            R16_1: ["B1", "F3"],
            R16_3: ["F1", "B3"],
            R16_5: ["E1", "C3"],
            R16_7: ["C1", "E3"],
        },
        BDEF: {
            R16_1: ["B1", "F3"],
            R16_3: ["F1", "B3"],
            R16_5: ["E1", "D3"],
            R16_7: ["C1", "E3"],
        },
        CDEF: {
            R16_1: ["B1", "F3"],
            R16_3: ["F1", "C3"],
            R16_5: ["E1", "D3"],
            R16_7: ["C1", "E3"],
        },
    };

    const remainingMatchups =
        correctMatchups[groupsThatHaveTeamsAdvancingFrom3rd];

    return {...staticGames, ...remainingMatchups};
};

const findSemisTeam = ( results, game ) => {
    let targetTeam = undefined;

    semiMatchups[game].forEach(( game ) => {
        results[game].forEach(( team ) => {
            if (team.advanceToS) {
                targetTeam = team;
            }
        });
    });

    return targetTeam;
};

const findFinalsTeam = ( results, game ) => {
    let targetTeam = undefined;

    finalMatchups[game].forEach(( game ) => {
        results[game].forEach(( team ) => {
            if (team.advanceToF) {
                targetTeam = team;
            }
        });
    });

    return targetTeam;
};

const findChamp = ( results ) => {
    let targetTeam = undefined;

    Object.values(results).forEach(( teamArr ) => {
        teamArr.forEach(( team ) => {
            if (team.advanceToChamp) {
                targetTeam = team;
            }
        });
    });

    return targetTeam;
};

const calcMaxPts = ( user, teams ) => {
    const userCurrentTotal = userTotalPoints(user, teams);

    const KOSeeding = determineR16Seeding(teams);

    const allKOGames = koLetters_maxPts.reduce(( a, letter ) => {
        switch (letter) {
            case "R16_":
                Qs.forEach(( num ) => a.push(`${letter}${num}`));
                break;
            case "Q":
                Ss.forEach(( num ) => a.push(`${letter}${num}`));
                break;
            case "S":
                Fs.forEach(( num ) => a.push(`${letter}${num}`));
                break;
            default:
                a.push("Champ");
        }

        return a;
    }, []);

    const findRound = ( str ) => {
        return str === "Champ" ? str : str.split("")[0];
    };

    const gamesToAudit = allKOGames.reduce(( a, game ) => {
        const round = findRound(game);

        let isGameComplete, gamesToLookAt, didATeamAdvance;

        const determineIfAnyTeamsAdvanced = ( games, round_OG ) => {
            return games.reduce(( a, game ) => {
                let roundToUse;

                switch (round_OG) {
                    case "Champ":
                        roundToUse = "Champ";
                        break;
                    case "S":
                        roundToUse = "F";
                        break;
                    case "Q":
                        roundToUse = "S";
                        break;
                    case "R":
                        roundToUse = "Q";
                        break;
                }

                const finishingPositions = KOSeeding[game];

                finishingPositions.forEach(( finishingPosition ) => {
                    const team = teams.find(
                        ( team ) => team.knockoutPosition === finishingPosition
                    );

                    a.push(team[`advanceTo${roundToUse}`]);
                });

                return a;
            }, []);
        };

        switch (round) {
            case "Champ":
                gamesToLookAt = [...finalMatchups.S1, ...finalMatchups.S2];
                break;
            case "S":
                gamesToLookAt = finalMatchups[game];
                break;
            case "Q":
                gamesToLookAt = semiMatchups[game];
                break;
            case "R":
                gamesToLookAt = [game];
                break;
        }

        didATeamAdvance = determineIfAnyTeamsAdvanced(gamesToLookAt, round);
        isGameComplete = didATeamAdvance.includes(true);

        !isGameComplete && a.push(game);

        return a;
    }, []);

    const userFuturePoints = gamesToAudit.reduce(( a, game ) => {
        const startOfStr = game.slice(0, game.length - 1);
        const lastIdx = game.slice(game.length - 1);

        const gameObjMapper = {S: "F", Q: "S", R16_: "Q"};

        if (game !== "Champ") {
            game = `${gameObjMapper[startOfStr]}${lastIdx}`;
        }

        const round = findRound(game);

        const usersPick = user[`knock${game}`];

        let isUsersPickStillInTourney = false;

        if (usersPick) {
            isUsersPickStillInTourney = !usersPick.outOfTourney;
        }

        const pointObj = {
            Champ: 10,
            F: 6,
            S: 4,
            Q: 2,
        };

        if (isUsersPickStillInTourney) {
            a += pointObj[round];
        }

        return a;
    }, 0);

    const isTourneyComplete = teams.find(( team ) => team.advanceToChamp);

    return isTourneyComplete
        ? userCurrentTotal
        : userCurrentTotal + userFuturePoints;
};

const getWebsiteUpdatedEmailDateVerbiage = () => {
    const date = new Date();

    Date.prototype.customFormat = function ( formatString ) {
        let YYYY,
            // MM,
            M,
            DDDD,
            // DD,
            D,
            hhh,
            // hh,
            h,
            mm,
            m,
            AMPM;

        YYYY = this.getFullYear();
        // MM = (M = this.getMonth() + 1) < 10 ? "0" + M : M;
        M = this.getMonth() + 1;

        // DD = (D = this.getDate()) < 10 ? "0" + D : D;
        D = this.getDate();

        DDDD = [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ][this.getDay()];

        formatString = formatString
        .replace("#YYYY#", YYYY)
        // .replace("#MM#", MM)
        .replace("#M#", M)
        .replace("#DDDD#", DDDD)
        .replace("#D#", D);

        h = this.getHours();
        if (h == 0) {
            h = 24;
        }
        if (h > 12) {
            h -= 12;
        }
        // hh = h < 10 ? "0" + h : h;
        AMPM = hhh < 12 ? "AM" : "PM";
        mm = (m = this.getMinutes()) < 10 ? "0" + m : m;

        return formatString
        .replace("#h#", h)
        .replace("#mm#", mm)
        .replace("#AMPM#", AMPM);
    };

    const subjectLine = date.customFormat("#DDDD# - #M#/#D#/#YYYY#");

    const emailBody = date.customFormat("#h#:#mm# #AMPM# CT");

    return [subjectLine, emailBody];
};

const formatPathname = ( str ) => {
    const split = str.split("_");

    return split.reduce(( a, word, idx ) => {
        word = word
        .split("")
        .map(( letter, idx ) => {
            if (idx === 0) {
                letter = letter.toUpperCase();
            }
            return letter;
        })
        .join("");
        a += word;
        if (idx + 1 !== split.length) {
            a += " ";
        }
        return a;
    }, "");
};

const formatURL = ( route ) => {
    const space = /\s/g;
    const period = /\./g;

    return route.toLowerCase().replaceAll(space, "_").replaceAll(period, "");
};

const formatTeamClass_KO = ( usersPicksForGame, boxType, gameInfo, round ) => {
    return usersPicksForGame.map(( team ) => {
        if (!team) {
            team = {};
        } else {
            team.flagClass =
                boxType === "small" ? "team-flag-ko" : "team-flag-ko-champ";
        }

        team.nameClass =
            boxType === "small" ? "team-name-ko" : "team-name-ko-champ";

        team.userClass = "";

        if (!gameInfo && round !== "R16") {
            team.userClass = "not-submitted";
            team.name = " ";
        }

        if (gameInfo?.usersPick) {
            if (team?.name === gameInfo.usersPick?.name) {
                team.userClass = gameInfo?.usersPickClass;
                team.usersPickForThisGame = true;
            }
        }

        if (team?.outOfTourney) {
            team.flagClass += " opacity-60";

            switch (round) {
                case "Q":
                    if (!team?.advanceToQ) {
                        team.userClass = "wrong";
                    }
                    break;
                case "S":
                    if (!team?.advanceToS) {
                        team.userClass = "wrong";
                    }
                    break;
                case "F":
                    if (!team?.advanceToF) {
                        team.userClass = "wrong";
                    }
                    break;
            }
            return team;
        }

        const teamHasAdvanced = gameInfo?.teamThatAdvanced?.name ?? false;

        if (teamHasAdvanced) {
            if (team?.name !== gameInfo.teamThatAdvanced?.name) {
                team.flagClass += " opacity-60";
            }
        }

        return team;
    });
};

const formatTeamClass_KO_Z_In_FF = ( usersPicksForGame, boxType ) => {
    return usersPicksForGame.map(( team ) => {
        const gameInfo = team?.gameInfo;

        if (!team) {
            team = {};
        } else {
            team.flagClass =
                boxType === "small" ? "team-flag-ko" : "team-flag-ko-champ";
        }

        team.nameClass =
            boxType === "small" ? "team-name-ko" : "team-name-ko-champ";

        team.userClass = "";

        if (!gameInfo) {
            team.userClass = "not-submitted";
            team.name = " ";
        }

        if (team?.gameInfo?.usersPick) {
            if (team?.name === gameInfo.usersPick?.name) {
                team.userClass = gameInfo?.usersPickClass;
                team.usersPickForThisGame = true;
            }
        }

        if (team?.outOfTourney) {
            team.flagClass += " opacity-60";

            if (!team?.advanceToS) {
                team.userClass = "wrong";
            }

            return team;
        }

        const teamHasAdvanced = team?.gameInfo?.teamThatAdvanced?.name ?? false;

        if (teamHasAdvanced) {
            if (team?.name !== gameInfo.teamThatAdvanced?.name) {
                team.flagClass += " opacity-60";
            }
        }

        return team;
    });
};

// const adjustPicks_KO = (a) => {
//     if (a.round === "R16") {
//         switch (a.teamPos) {
//             case 1:
//                 results[a.game][0].advanceToQ = true;
//                 results[a.game][0].outOfTourney = false;
//
//                 results[a.game][1].advanceToQ = false;
//                 results[a.game][1].advanceToS = false;
//                 results[a.game][1].advanceToF = false;
//                 results[a.game][1].advanceToChamp = false;
//                 results[a.game][1].outOfTourney = true;
//                 break;
//             case 2:
//                 results[a.game][1].advanceToQ = true;
//                 results[a.game][1].outOfTourney = false;
//
//                 results[a.game][0].advanceToQ = false;
//                 results[a.game][0].advanceToS = false;
//                 results[a.game][0].advanceToF = false;
//                 results[a.game][0].advanceToChamp = false;
//                 results[a.game][0].outOfTourney = true;
//                 break;
//         }
//     }
//
//     if (a.round === "Q") {
//         const teamThatAdvanced = results[a.game].find(
//             (team) => team.advanceToQ);
//
//         const otherTeamGame =
//             a.gameNum % 2 === 0 ? `R16_${a.gameNum - 1}` : `R16_${a.gameNum
//             + 1}`;
//
//         const teamThatGotKnockedOut = results[otherTeamGame].find(
//             (team) => team.advanceToQ
//         );
//
//         teamThatAdvanced.advanceToS = true;
//         teamThatAdvanced.outOfTourney = false;
//
//         teamThatGotKnockedOut.advanceToS = false;
//         teamThatGotKnockedOut.advanceToF = false;
//         teamThatGotKnockedOut.advanceToChamp = false;
//         teamThatGotKnockedOut.outOfTourney = true;
//     }
//
//     if (a.round === "S") {
//         let teamThatAdvanced, teamThatGotKnockedOut;
//
//         semiMatchups[a.game].forEach((game) => {
//             const targetTeam = results[game].find((team) => team.advanceToS);
//
//             if (targetTeam) {
//                 teamThatAdvanced = targetTeam;
//             }
//         });
//
//         const otherTeamGame =
//             a.gameNum % 2 === 0 ? `Q${a.gameNum - 1}` : `Q${a.gameNum + 1}`;
//
//         semiMatchups[otherTeamGame].forEach((game) => {
//             const targetTeam = results[game].find((team) => team.advanceToS);
//
//             if (targetTeam) {
//                 teamThatGotKnockedOut = targetTeam;
//             }
//         });
//
//         if (teamThatAdvanced) {
//             teamThatAdvanced.advanceToF = true;
//             teamThatAdvanced.outOfTourney = false;
//         }
//
//         if (teamThatGotKnockedOut) {
//             teamThatGotKnockedOut.advanceToF = false;
//             teamThatGotKnockedOut.advanceToChamp = false;
//             teamThatGotKnockedOut.outOfTourney = true;
//         }
//     }
//
//     if (a.round === "F") {
//         let teamThatAdvanced, teamThatGotKnockedOut;
//
//         finalMatchups[a.game].forEach((game) => {
//             const targetTeam = results[game].find((team) => team.advanceToF);
//
//             if (targetTeam) {
//                 teamThatAdvanced = targetTeam;
//             }
//         });
//
//         const otherTeamGame = a.game === "S1" ? "S2" : "S1";
//
//         finalMatchups[otherTeamGame].forEach((game) => {
//             const targetTeam = results[game].find((team) => team.advanceToF);
//
//             if (targetTeam) {
//                 teamThatGotKnockedOut = targetTeam;
//             }
//         });
//
//         if (teamThatAdvanced) {
//             teamThatAdvanced.advanceToChamp = true;
//             teamThatAdvanced.outOfTourney = false;
//         }
//
//         if (teamThatGotKnockedOut) {
//             teamThatGotKnockedOut.advanceToChamp = false;
//             teamThatGotKnockedOut.outOfTourney = true;
//         }
//     }
//
//     setTeamAdjusted(!teamAdjusted);
// };

const getKOResults = ( teams ) => {
    const seedMatchups = determineR16Seeding(teams);

    return Object.entries(seedMatchups).reduce(( a, entry ) => {
        const game = entry[0];

        a[game] = entry[1].map(( knockoutPosition ) => {
            return teams.find(
                ( team ) => team?.knockoutPosition === knockoutPosition);
        });

        return a;
    }, {});
};

const getUserKoResult = ( userPicks ) => {
    let result = "";

    userPicks.forEach(( team ) => {
        if (
            team?.usersPickForThisGame &&
            validKoResults.includes(team?.userClass)
        ) {
            result = team.userClass;
        }
    });

    return result;
};

const checkForOpacity_Z_In = ( usersPicks, round ) => {
    return usersPicks.map(( team ) => {
        if (team.outOfTourney) {
            switch (round) {
                case "R16":
                    if (!team.advanceToQ) {
                        team.opacity = "opacity-60";
                    }
                    break;
                case "Q":
                    if (!team.advanceToS) {
                        team.opacity = "opacity-60";
                    }
                    break;
                case "S":
                    if (!team.advanceToS) {
                        team.opacity = "opacity-60";
                    }
                    break;
            }
        }

        return team;
    });
};

const findPreviousGameWinners_R16 = ( user, teams, usersPicks,
    gamesToAudit ) => {
    if (!user?.knockChamp) {
        return usersPicks;
    }

    const regionPreviousGameWinners = gamesToAudit.map(( game ) => {
        const previousGameInfo = koGameCalc(user, game, teams);

        return previousGameInfo?.teamThatAdvanced?.name;
    });

    return usersPicks.map(( team, idx ) => {
        team.showPreviousWinnerTop = null;
        team.showPreviousWinnerBottom = null;

        const previousRegionWinner = regionPreviousGameWinners[idx];

        if (previousRegionWinner && team?.name !== previousRegionWinner) {
            idx === 0
                ? (team.showPreviousWinnerTop = previousRegionWinner)
                : (team.showPreviousWinnerBottom = previousRegionWinner);
        }

        return team;
    });
};

const findPreviousGameWinner_FF = ( teams, usersPick, gamesToAudit, side ) => {
    const seedMatchups = determineR16Seeding(teams);

    let regionWinner = null;

    gamesToAudit.forEach(( game ) => {
        const groupFinishingPositions = seedMatchups[game];

        groupFinishingPositions.forEach(( finishingPosition ) => {
            const team = teams.find(
                ( team ) => team.knockoutPosition === finishingPosition
            );

            if (team.advanceToS) {
                regionWinner = team.name;
            }
        });
    });

    if (regionWinner && usersPick?.name !== regionWinner) {
        if (side === "top") {
            usersPick.showPreviousWinnerTop = regionWinner;
        } else {
            usersPick.showPreviousWinnerBottom = regionWinner;
        }
    }

    return usersPick;
};

const findPreviousGameWinner_Finals = (
    user,
    teams,
    usersPick,
    gamesToAudit,
    gameToAudit // 'F' or 'Champ'
) => {
    if (!user?.knockChamp) {
        return usersPick;
    }

    const seedMatchups = determineR16Seeding(teams);

    let winningTeam = null;

    gamesToAudit.forEach(( game ) => {
        const groupFinishingPositions = seedMatchups[game];

        groupFinishingPositions.forEach(( finishingPosition ) => {
            const team = teams.find(
                ( team ) => team.knockoutPosition === finishingPosition
            );

            if (team[`advanceTo${gameToAudit}`]) {
                winningTeam = team.name;
            }
        });
    });

    if (winningTeam && usersPick?.name !== winningTeam) {
        usersPick.showPreviousWinnerTop = winningTeam;
    }

    return usersPick;
};

const isUserMissingOtherRegionPicks = ( user, regionToAudit ) => {
    const userPicksInRegionToAAudit = regionToAuditMapper[regionToAudit].map(
        ( game ) => user[game]
    );

    return userPicksInRegionToAAudit.includes(null) ? "missing" : "igo";
};

const createPreTourneyDataNotAvailableYetMessage = ( str ) => {
    return `${str} will not be viewable until the tournament commences on ${tourneyStartDate}`;
};

const shouldPayoutShow = ( joe, user ) => {
    const tourneyStarted = joe?.tourneyStage !== 1;
    const userSubmittedPicks = user?.tiebreaker ?? false;

    return (
        (!tourneyStarted && user?.id) || (tourneyStarted && userSubmittedPicks)
    );
};

const getActiveUsers = ( users ) => {
    return users.filter(( user ) => user?.tiebreaker);
};

const calcPayout = ( users ) => {
    const pot = users?.length * 20;

    const result = {
        firstPlace: 0,
        secondPlace: 0,
        thirdPlace: 0,
        numOfPicks: users?.length,
    };

    switch (users?.length) {
        case 1:
            result.firstPlace = 15;
            result.secondPlace = 5;
            result.thirdPlace = 0;
            break;
        case 2:
            result.firstPlace = 30;
            result.secondPlace = 10;
            result.thirdPlace = 0;
            break;
        case 3:
            result.firstPlace = 45;
            result.secondPlace = 15;
            result.thirdPlace = 0;
            break;
        case 4:
            result.firstPlace = 60;
            result.secondPlace = 20;
            result.thirdPlace = 0;
            break;
        default:
            result.thirdPlace = 20;
            result.firstPlace = (pot - result.thirdPlace) * 0.75;
            result.secondPlace = (pot - result.thirdPlace) * 0.25;
    }

    return result;
};

const isLastIdx = ( arr, idx ) => {
    return idx !== arr.length - 1;
};

const addSpace = ( arr, idx ) => {
    return isLastIdx(arr, idx) ? " " : "";
};

const getNavBarVerbiageFromPath = ( route, userIsLoggedIn = false ) => {
    const arrayOfPaths = route.split("/");

    arrayOfPaths.shift();

    let result = "";

    let keepRunning = true;

    arrayOfPaths.forEach(( path, idx ) => {
        const words = path.split("-");

        return (
            keepRunning &&
            words.forEach(( word, idx ) => {
                if (word === "in" && userIsLoggedIn) {
                    result += "Out";

                    keepRunning = false;

                    return result;
                }

                result += cap1stLetter(word);

                if (word === "users" && result.includes("Admin")) {
                    keepRunning = false;
                }

                if (word === "rules") {
                    result += "/General Info";
                }

                result += addSpace(words, idx);

                if (word === "admin") {
                    result += " - ";
                }
            })
        );
    });

    return result;
};

const getIsUserSignedIn = ( user ) => {
    return !!user?.id;
};

const getIsUserAdmin = ( user ) => {
    return !!user?.admin;
};

const handleMobileClick = ( ref, closeMobileMenu ) => {
    const handler = ( event ) => {
        !ref.current.contains(event.target) &&
        event.target.className !== "dropdown-route-row" &&
        closeMobileMenu();
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
        document.removeEventListener("mousedown", handler);
        document.removeEventListener("touchstart", handler);
    };
};

const clearArr = ( arr ) => {
    while (arr.length) {
        arr.pop();
        return clearArr(arr);
    }
};

const getActionConfirmationText = ( path ) => {
    let result = 'unknown path'

    switch (path) {
        case routes.accountCreated:
            result = accountCreatedConfirmation
            break;
        case routes.pwResetConfirmation:
            result = passwordResetConfirmation
            break;
        case routes.forgotPwConfirmation:
            result = forgotPasswordConfirmation
            break;
    }

    return result
};

const getGroupTeams = ( group, teams ) => {
    return teams.filter(( team ) => team.group === group)
    .sort(( a, b ) => a.groupFinishingPosition - b.groupFinishingPosition);
}

module.exports = {
    findJoe,
    validateEmail,
    koGameCalc,
    koRoundCalc,
    groupCalc,
    groupTotalCalc,
    userTotalPoints,
    getCurrentScores,
    dupeValInArr,
    formatSelectedUser,
    cap1stLetter,
    findEntry,
    formatEmail,
    getUserNames,
    addFakeUser,
    findR16Teams,
    colorDescriptionTableNeeded,
    allUsersPaid,
    usersAreTied,
    userStatusClass,
    isPoolPicksPage,
    auditThirdPlaceToAdvancePicks,
    determineR16Seeding,
    findSemisTeam,
    findFinalsTeam,
    findChamp,
    calcMaxPts,
    getWebsiteUpdatedEmailDateVerbiage,
    formatPathname,
    formatURL,
    areAllGroupsAreFinished,
    formatTeamClass_KO,
    // adjustPicks_KO,
    getKOResults,
    getUserKoResult,
    checkForOpacity_Z_In,
    findPreviousGameWinners_R16,
    formatTeamClass_KO_Z_In_FF,
    findPreviousGameWinner_FF,
    findPreviousGameWinner_Finals,
    isUserMissingOtherRegionPicks,
    createPreTourneyDataNotAvailableYetMessage,
    shouldPayoutShow,
    getActiveUsers,
    calcPayout,
    getNavBarVerbiageFromPath,
    getIsUserSignedIn,
    getIsUserAdmin,
    handleMobileClick,
    clearArr,
    getActionConfirmationText,
    getGroupTeams
};
