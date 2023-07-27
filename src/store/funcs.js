const {
  groupLetters,
  semiMatchups,
  finalMatchups,
  koLetters,
  Qs,
  Ss,
  Fs,
} = require("./variables");

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
  return str.split("advanceTo")[1];
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
  // console.log("byah", teams);
  const koTeamSeeding = determineR16Seeding(teams);

  const roundInfoObj = Object.entries(koTeamSeeding).reduce(
    (a, entry) => {
      const number = Number(entry[0][1]);

      a.Q[number] = entry[1];

      const positions = entry[1];

      if (number === 1 || number === 2) {
        positions.forEach((pos) => {
          a.S[1].push(pos);
          a.F[1].push(pos);
        });
      }

      if (number === 3 || number === 4) {
        positions.forEach((pos) => {
          a.S[2].push(pos);
          a.F[1].push(pos);
        });
      }

      if (number === 5 || number === 6) {
        positions.forEach((pos) => {
          a.S[3].push(pos);
          a.F[2].push(pos);
        });
      }

      if (number === 7 || number === 8) {
        positions.forEach((pos) => {
          a.S[4].push(pos);
          a.F[2].push(pos);
        });
      }

      return a;
    },
    {
      Q: {
        points: 2,
      },
      S: {
        1: [],
        2: [],
        3: [],
        4: [],
        points: 4,
      },
      F: {
        1: [],
        2: [],
        points: 6,
      },
    }
  );

  const round = game.split("")[0];
  const number = game.split("")[1];
  const usersPick = user[`knock${game}`];

  let teamThatAdvanced, points;

  if (game === "Champ") {
    teamThatAdvanced = teams.find((team) => team[`advanceTo${game}`]) ?? null;
  } else {
    teamThatAdvanced =
      teams.find(
        (team) =>
          roundInfoObj[round][number].includes(team.knockoutPosition) &&
          team[`advanceTo${round}`]
      ) ?? null;
  }

  let usersPickClass = "unknown";

  const gameIsFinished = teamThatAdvanced?.name ? true : false;

  if (gameIsFinished && usersPick?.name) {
    usersPickClass =
      usersPick.name === teamThatAdvanced.name ? "correct" : "wrong";
  }

  if (game === "Champ") {
    points = usersPickClass === "correct" ? 10 : 0;
  } else {
    points = usersPickClass === "correct" ? roundInfoObj[round].points : 0;
  }

  return {
    usersPick,
    teamThatAdvanced,
    usersPickClass,
    points,
  };
};

const koRoundCalc = (user, round, teams) => {
  const koRoundGames = {
    quarters: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
    semis: ["S1", "S2", "S3", "S4"],
    final: ["F1", "F2"],
    champion: ["Champ"],
  };

  return koRoundGames[round].reduce((a, game) => {
    const result = koGameCalc(user, game, teams);

    // console.log("round", round);
    // console.log("result", result);
    a += result.points;
    return a;
  }, 0);
};

const userTotalPoints = (user, teams) => {
  const groupTotal = groupTotalCalc(user);

  //console.log("groupTotal", groupTotal);

  const koRounds = ["quarters", "semis", "final", "champion"];

  const userHasKOPicks = user.knockChamp ? true : false;

  // console.log("userHasKOPicks", userHasKOPicks);

  const koTotals = koRounds.reduce((a, round) => {
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

const getCurrentScores = (users, teams, actualGoalsScored = null) => {
  let rank = 1;

  // console.log("users-nuggets", users);

  const firstAudit = users
    .reduce((a, user) => {
      const total = userTotalPoints(user, teams);
      const maxPts = calcMaxPts(user, teams);

      const userObj = {
        id: user?.id,
        name: user.name,
        tiebreaker: user.tiebreaker,
        total,
        maxPts,
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

const determineR16Seeding = (teams) => {
  const staticGames = {
    Q2: ["A1", "C2"],
    Q4: ["D2", "E2"],
    Q6: ["D1", "F2"],
    Q8: ["A2", "B2"],
  };

  const groupsThatHaveTeamsAdvancingFrom3rd = teams
    .reduce((a, team) => {
      if (team.thirdPlaceAndAdvancedToKO) {
        const teamGroup = team.knockoutPosition.split("")[0];
        a.push(teamGroup);
      }

      return a;
    }, [])
    .sort()
    .reduce((a, letter) => {
      a += letter;

      return a;
    }, "");

  const correctMatchups = {
    ABCD: {
      Q1: ["B1", "A3"],
      Q3: ["F1", "C3"],
      Q5: ["E1", "B3"],
      Q7: ["C1", "D3"],
    },
    ABCE: {
      Q1: ["B1", "A3"],
      Q3: ["F1", "C3"],
      Q5: ["E1", "B3"],
      Q7: ["C1", "E3"],
    },
    ABCF: {
      Q1: ["B1", "A3"],
      Q3: ["F1", "C3"],
      Q5: ["E1", "B3"],
      Q7: ["C1", "F3"],
    },
    ABDE: {
      Q1: ["B1", "D3"],
      Q3: ["F1", "B3"],
      Q5: ["E1", "A3"],
      Q7: ["C1", "E3"],
    },
    ABDF: {
      Q1: ["B1", "D3"],
      Q3: ["F1", "B3"],
      Q5: ["E1", "A3"],
      Q7: ["C1", "F3"],
    },
    ABEF: {
      Q1: ["B1", "E3"],
      Q3: ["F1", "A3"],
      Q5: ["E1", "B3"],
      Q7: ["C1", "F3"],
    },
    ACDE: {
      Q1: ["B1", "E3"],
      Q3: ["F1", "A3"],
      Q5: ["E1", "C3"],
      Q7: ["C1", "D3"],
    },
    ACDF: {
      Q1: ["B1", "F3"],
      Q3: ["F1", "A3"],
      Q5: ["E1", "C3"],
      Q7: ["C1", "D3"],
    },
    ACEF: {
      Q1: ["B1", "E3"],
      Q3: ["F1", "A3"],
      Q5: ["E1", "C3"],
      Q7: ["C1", "F3"],
    },
    ADEF: {
      Q1: ["B1", "E3"],
      Q3: ["F1", "A3"],
      Q5: ["E1", "D3"],
      Q7: ["C1", "F3"],
    },
    BCDE: {
      Q1: ["B1", "E3"],
      Q3: ["F1", "C3"],
      Q5: ["E1", "B3"],
      Q7: ["C1", "D3"],
    },
    BCDF: {
      Q1: ["B1", "F3"],
      Q3: ["F1", "B3"],
      Q5: ["E1", "C3"],
      Q7: ["C1", "D3"],
    },
    BCEF: {
      Q1: ["B1", "F3"],
      Q3: ["F1", "B3"],
      Q5: ["E1", "C3"],
      Q7: ["C1", "E3"],
    },
    BDEF: {
      Q1: ["B1", "F3"],
      Q3: ["F1", "B3"],
      Q5: ["E1", "D3"],
      Q7: ["C1", "E3"],
    },
    CDEF: {
      Q1: ["B1", "F3"],
      Q3: ["F1", "C3"],
      Q5: ["E1", "D3"],
      Q7: ["C1", "E3"],
    },
  };

  const remainingMatchups =
    correctMatchups[groupsThatHaveTeamsAdvancingFrom3rd];

  return { ...staticGames, ...remainingMatchups };
};

const findSemisTeam = (results, game) => {
  let targetTeam = undefined;

  semiMatchups[game].forEach((game) => {
    results[game].forEach((team) => {
      if (team.advanceToS) targetTeam = team;
    });
  });

  return targetTeam;
};

const findFinalsTeam = (results, game) => {
  let targetTeam = undefined;

  finalMatchups[game].forEach((game) => {
    results[game].forEach((team) => {
      if (team.advanceToF) targetTeam = team;
    });
  });

  return targetTeam;
};

const findChamp = (results) => {
  let targetTeam = undefined;

  Object.values(results).forEach((teamArr) => {
    teamArr.forEach((team) => {
      if (team.advanceToChamp) targetTeam = team;
    });
  });

  return targetTeam;
};

const calcMaxPts = (user, teams) => {
  const userCurrentTotal = userTotalPoints(user, teams);

  const KOSeeding = determineR16Seeding(teams);

  const allKOGames = koLetters.reduce((a, letter) => {
    switch (letter) {
      case "Q":
        Qs.forEach((num) => a.push(`${letter}${num}`));
        break;
      case "S":
        Ss.forEach((num) => a.push(`${letter}${num}`));
        break;
      case "F":
        Fs.forEach((num) => a.push(`${letter}${num}`));
        break;
      default:
        a.push("Champ");
    }

    return a;
  }, []);

  const findRound = (str) => {
    return str === "Champ" ? str : str.split("")[0];
  };

  const gamesToAudit = allKOGames.reduce((a, game) => {
    const round = findRound(game);
    let isGameComplete, gamesToLookAt, didATeamAdvance;

    const determineIfAnyTeamsAdvanced = (games, key) => {
      return games.reduce((a, game) => {
        const seeds = KOSeeding[game];

        seeds.forEach((seed) => {
          const team = teams.find((team) => team.knockoutPosition === seed);

          a.push(team[`advanceTo${key}`]);
        });

        return a;
      }, []);
    };

    switch (round) {
      case "Champ":
        gamesToLookAt = [...finalMatchups.F1, ...finalMatchups.F2];
        break;
      case "F":
        gamesToLookAt = finalMatchups[game];
        break;
      case "S":
        gamesToLookAt = semiMatchups[game];
        break;
      case "Q":
        gamesToLookAt = [game];
        break;
    }

    didATeamAdvance = determineIfAnyTeamsAdvanced(gamesToLookAt, round);
    isGameComplete = didATeamAdvance.includes(true);

    !isGameComplete && a.push(game);

    return a;
  }, []);

  const userFuturePoints = gamesToAudit.reduce((a, game) => {
    const round = findRound(game);

    const usersPick = user[`knock${game}`];
    const isUsersPickStillInTourney = !usersPick.outOfTourney;

    const pointObj = {
      Champ: 10,
      F: 6,
      S: 4,
      Q: 2,
    };

    if (isUsersPickStillInTourney) a += pointObj[round];

    return a;
  }, 0);

  const isTourneyComplete = teams.find((team) => team.advanceToChamp);

  return isTourneyComplete
    ? userCurrentTotal
    : userCurrentTotal + userFuturePoints;
};

const getWebsiteUpdatedEmailDateVerbiage = () => {
  const date = new Date();

  Date.prototype.customFormat = function (formatString) {
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
    if (h == 0) h = 24;
    if (h > 12) h -= 12;
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
  findSemisTeam,
  findFinalsTeam,
  findChamp,
  calcMaxPts,
  getWebsiteUpdatedEmailDateVerbiage,
};
