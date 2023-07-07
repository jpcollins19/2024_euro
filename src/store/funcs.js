const { groupLetters } = require("./variables");

const findJoe = (arr) => {
  return arr.find((user) => user?.admin);
};

const G = {
  R1: 0,
  R2: 0,
  R3: 0,
  R4: 0,
};

const createCountObj = (arr, key) => {
  return arr.reduce((a, obj) => {
    a[obj[key]] ? a[obj[key]]++ : (a[obj[key]] = 1);
    return a;
  }, {});
};

const dupeValInArr = (arr) => {
  arr?.length === 5 && arr.pop();

  return arr.length === new Set(arr).size;
};

const urlWord = (str) => {
  return str.split("").reduce((a, letter) => {
    if (letter === " ") {
      letter = "_";
    }
    a += letter;
    return a;
  }, "");
};

const formatSelectedUser = (obj) => {
  return { value: obj, label: obj.name };
};

const cap1stLetter = (str) => {
  return str
    .split("")
    .map((letter, idx) => {
      if (idx === 0) {
        letter = letter.toUpperCase();
      }
      return letter;
    })
    .join("");
};

const findEntry = (str) => {
  // return str.split("advanceTo")[1];
};

const validateEmail = (inputText) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  return inputText.match(mailformat) ? true : false;
};

const formatEmail = (email) => {
  const regex = /[a-zA-Z]/g;

  email = email
    .split("")
    .map((letter) => {
      if (letter.match(regex)) {
        letter = letter.toLowerCase();
      }
      return letter;
    })
    .join("");
  return email;
};

const getUserNames = (arr) => {
  return arr.map((user) => {
    const name = user.name
      .split("")
      .map((letter) => letter.toLowerCase())
      .join("");
    return name;
  });
};

const addFakeUser = (obj, name) => {
  // const keys = Object.keys(obj);
  // const fakeUser = {};
  // keys.forEach((key) => {
  //   key === "name" ? (fakeUser.name = name) : (fakeUser[key] = obj[key]);
  // });
  // return fakeUser;
};

const findR16Teams = (teams, koPositions) => {
  return koPositions.map((koPos) =>
    teams.find((team) => team.knockoutPosition === koPos)
  );
};

const groupCalc = (user, group) => {
  let userGroupPredictions = [];

  for (let i = 1; i <= 4; i++) {
    userGroupPredictions.push(user[`group${group}${i}`]);
  }

  return userGroupPredictions.map((team, idx) => {
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
        if (userPickPosition === 2) twoPts = true;
        if (userPickPosition === 3) twoPts = true;

        break;
      case 2:
        // if (user?.name === "Pat" && group === "A") {
        //   console.log("teamTrueFinishingPosition", teamTrueFinishingPosition);
        //   console.log("userPickPosition", userPickPosition);
        //   console.log("byah", twoPts);
        // }

        if (userPickPosition === 1) twoPts = true;

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
        if (userPickPosition === 1) twoPts = true;

        if (userPickPosition === 2 && team?.thirdPlaceAndAdvancedToKO)
          twoPts = true;

        break;
    }

    if (twoPts) {
      points = 2;
      className = "orange";
    }

    // if (user?.name === "Pat" && group === "A") {
    //   console.log(points, className);
    // }

    return { points, className };
  });
};

const groupTotalCalc = (user) => {
  return groupLetters
    .reduce((a, letter) => {
      user[`group${letter}1`].groupIsFinished && a.push(letter);

      return a;
    }, [])
    .reduce((a, letter) => {
      groupCalc(user, letter)
        .map((obj) => obj.points)
        .forEach((point) => {
          a += point;
        });

      return a;
    }, 0);
};

const koGameCalc = (user, game, teams) => {
  // const roundInfoObj = {
  //   Q: {
  //     1: ["A1", "B2"],
  //     2: ["C1", "D2"],
  //     3: ["E1", "F2"],
  //     4: ["G1", "H2"],
  //     5: ["B1", "A2"],
  //     6: ["D1", "C2"],
  //     7: ["F1", "E2"],
  //     8: ["H1", "G2"],
  //     points: 2,
  //   },
  //   S: {
  //     1: ["A1", "B2", "C1", "D2"],
  //     2: ["E1", "F2", "G1", "H2"],
  //     3: ["B1", "A2", "D1", "C2"],
  //     4: ["F1", "E2", "H1", "G2"],
  //     points: 4,
  //   },
  //   F: {
  //     1: ["A1", "B2", "C1", "D2", "E1", "F2", "G1", "H2"],
  //     2: ["B1", "A2", "D1", "C2", "F1", "E2", "H1", "G2"],
  //     points: 6,
  //   },
  // };
  // const round = game.split("")[0];
  // const number = game.split("")[1];
  // const usersPick = user[`knock${game}`];
  // let teamThatAdvanced, points;
  // if (game === "Champ") {
  //   teamThatAdvanced = teams.find((team) => team[`advanceTo${game}`]) ?? null;
  // } else {
  //   teamThatAdvanced =
  //     teams.find(
  //       (team) =>
  //         roundInfoObj[round][number].includes(team.knockoutPosition) &&
  //         team[`advanceTo${round}`]
  //     ) ?? null;
  // }
  // let usersPickClass = "unknown";
  // const gameIsFinished = teamThatAdvanced?.name ? true : false;
  // if (gameIsFinished && usersPick?.name) {
  //   usersPickClass =
  //     usersPick.name === teamThatAdvanced.name ? "correct" : "wrong";
  // }
  // if (game === "Champ") {
  //   points = usersPickClass === "correct" ? 10 : 0;
  // } else {
  //   points = usersPickClass === "correct" ? roundInfoObj[round].points : 0;
  // }
  // return {
  //   usersPick,
  //   teamThatAdvanced,
  //   usersPickClass,
  //   points,
  // };
};

const koRoundCalc = (user, round, teams) => {
  // const koRoundGames = {
  //   quarters: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
  //   semis: ["S1", "S2", "S3", "S4"],
  //   final: ["F1", "F2"],
  //   champion: ["Champ"],
  // };
  // return koRoundGames[round].reduce((a, game) => {
  //   const result = koGameCalc(user, game, teams);
  //   a += result.points;
  //   return a;
  // }, 0);
  return 0;
};

const userTotalPoints = (user) => {
  const groupTotal = groupTotalCalc(user);
  if (user.name === "Joe") {
    // console.log("user", user);
    // console.log("groupTotal", groupTotal);
  }

  const koRounds = ["quarters", "semis", "final", "champion"]; //change to import KOLetters variable?

  // const userHasKOPicks = user.knockChamp !== null ? true : false;
  const userHasKOPicks = user.knockChamp ? true : false;

  const koTotals = koRounds.reduce((a, round) => {
    if (userHasKOPicks) {
      const roundTotal = koRoundCalc(user, round, teams);
      a += roundTotal;
    }
    return a;
  }, 0);

  return groupTotal + koTotals;
};

const sortNames = (arr) => {
  return arr.sort((a, b) => {
    let fa = a.name,
      fb = b.name;
    return fa < fb ? -1 : fa > fb ? 1 : 0;
  });
};

const tieBreakerAudit = (arr, actualGoalsScored) => {
  const tiebreakerObj = createCountObj(arr, "tiebreaker");

  const audit = arr
    .map((user) => {
      user.numOfTimes = tiebreakerObj[user.tiebreaker];
      user.tiebreakerStatus =
        user.tiebreaker === actualGoalsScored
          ? "exact"
          : user.tiebreaker < actualGoalsScored
          ? "notOver"
          : "over";
      return user;
    })
    .map((user) => {
      if (user.numOfTimes > 1) user.tieExists = true;
      return user;
    })
    .sort((a, b) => {
      let fa = a.tiebreakerStatus,
        fb = b.tiebreakerStatus;
      return fa < fb ? -1 : fa > fb ? 1 : 0;
    });

  const auditObj = {
    exact: [],
    notOver: [],
    over: [],
  };

  audit.forEach((user) => auditObj[user.tiebreakerStatus].push(user));

  return auditObj;
};

const dupeScoreAudit = (arr, actualGoalsScored) => {
  let rank = arr[0].rank;

  const tiebreakerAuditObj = tieBreakerAudit(arr, actualGoalsScored);

  let answer = [];

  Object.keys(tiebreakerAuditObj).forEach((key) => {
    let userOrder_OG = tiebreakerAuditObj[key].sort((a, b) =>
      key === "over" ? a.tiebreaker - b.tiebreaker : b.tiebreaker - a.tiebreaker
    );

    let newUserOrder = Object.entries(
      userOrder_OG.reduce((a, user) => {
        if (a[user.tiebreaker]) {
          a[user.tiebreaker].push(user.name);
        } else {
          a[user.tiebreaker] = [user.name];
        }
        return a;
      }, {})
    );

    if (key === "notOver") {
      newUserOrder = newUserOrder.sort((a, b) => b[0] - a[0]);
    }

    newUserOrder = newUserOrder
      .map((entry) => {
        if (entry[1].length > 1) {
          entry[1] = entry[1].sort((a, b) => {
            return a < b ? -1 : a > b ? 1 : 0;
          });
        }
        return entry;
      })
      .reduce((a, entry) => {
        entry[1].forEach((name) => a.push(name));
        return a;
      }, []);

    newUserOrder = newUserOrder.map((user) => {
      userOrder_OG.forEach((user_OG) => {
        if (user === user_OG.name) {
          user = user_OG;
        }
      });
      return user;
    });

    answer = [...answer, ...newUserOrder];
  });

  return answer.map((user) => {
    user.rank = rank;
    rank++;
    return user;
  });
};

const sortRank = (arr) => {
  let rank = 1;

  return arr.map((user) => {
    user.rank = rank;
    rank++;
    return user;
  });
};

const getCurrentScores = (users, actualGoalsScored = null) => {
  let rank = 1;

  // console.log("users-nuggets", users);

  const firstAudit = users
    .reduce((a, user) => {
      const total = userTotalPoints(user);

      const userObj = {
        id: user?.id,
        name: user.name,
        tiebreaker: user.tiebreaker,
        total,
        tieExists: false,
        paid: user.paid,
      };

      a.push(userObj);

      return a;
    }, [])
    .sort((a, b) => b.total - a.total)
    .map((user) => {
      user.rank = rank;
      rank++;
      return user;
    });

  // console.log('firstAudit', firstAudit)

  // console.log("firstAudit", firstAudit);

  let readyToRun = false;

  firstAudit.forEach((user) => {
    if (user.total !== 0) readyToRun = true;
  });

  if (readyToRun) {
    let dupeScores = [];

    let nonDupeScores = [];

    let newDupeScores = [];

    const scores = createCountObj(firstAudit, "total");

    firstAudit.forEach((user) => {
      scores[user.total] === 1
        ? nonDupeScores.push(user)
        : dupeScores.push(user);
    });

    if (dupeScores.length) {
      const scoreObj = dupeScores.reduce((a, user) => {
        a[user.total] ? a[user.total].push(user) : (a[user.total] = [user]);
        return a;
      }, {});

      Object.keys(scoreObj).forEach((key) => {
        const newDupeScoreRank = dupeScoreAudit(
          scoreObj[key],
          actualGoalsScored
        );
        newDupeScores = [...newDupeScores, ...newDupeScoreRank];
      });

      const newRank = [...newDupeScores, ...nonDupeScores];

      return newRank.sort((a, b) => a.rank - b.rank);
    }

    return nonDupeScores;
  }

  let result = sortNames(firstAudit);

  if (!readyToRun) {
    result = sortRank(firstAudit);
  }

  return result;
};

const allUsersPaid = (arr) => {
  const paidAudit = arr.map((user) => user.paid);
  return !paidAudit.includes(false);
};

const usersAreTied = (arr) => {
  const tieAudit = arr.map((user) => user.tieExists);
  return tieAudit.includes(true);
};

const colorDescriptionTableNeeded = (arr) => {
  //audit to see if the color table is needed.
  //returns false if all users are paid, and there are no ties

  const allUsersHavePaid = allUsersPaid(arr);
  const userTieExists = usersAreTied(arr);

  let answer = true;

  if (allUsersHavePaid && !userTieExists) answer = false;

  return answer;
};

const userStatusClass = (user) => {
  return !user.paid
    ? "not-paid"
    : user.tieExists
    ? "tie"
    : user.paid
    ? "paid"
    : "";
};

const isPoolPicksPage = (pathname) => {
  const path = pathname.split("/")[1];

  return path === "pool_picks";
};

const auditThirdPlaceToAdvancePicks = (obj) => {
  let answer = { outcome: "=", groupErrors: [] };
  let count = -4;

  Object.values(obj).forEach((boolean) => boolean && count++);

  if (count === 0) {
    return answer;
  }

  if (count < 0) {
    answer.outcome = `${count}`;

    Object.entries(obj).forEach((entry) => {
      if (!entry[1]) {
        answer.groupErrors.push(entry[0]);
      }
    });
  }

  if (count > 0) {
    answer.outcome = `+${count}`;

    Object.entries(obj).forEach((entry) => {
      if (entry[1]) {
        answer.groupErrors.push(entry[0]);
      }
    });
  }

  return answer;
};

const determineR16Seeding = () => {
  return {
    Q1: ["A1", "B2"],
    Q2: ["C1", "D2"],
    Q3: ["E1", "F2"],
    Q4: ["A1", "A2"],
    Q5: ["B1", "A2"],
    Q6: ["D1", "C2"],
    Q7: ["F1", "E2"],
    Q8: ["A1", "A2"],
  };
};

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
  urlWord,
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
};
