const findJoe = (arr) => {
  return arr.find((user) => user.admin);
};

const groupCalc = (user, group) => {
  let userGroupTeamRanks = [];

  for (let i = 1; i <= 4; i++) {
    userGroupTeamRanks.push(user[`group${group}${i}`]);
  }

  return userGroupTeamRanks.map((team, idx) => {
    const finishingPosition = team.groupFinishingPosition;

    let points = 0;
    let className = "";

    if (finishingPosition === idx + 1) {
      switch (idx + 1) {
        case 1:
          points = 3;
          className = "blue";
          break;
        case 2:
          points = 2;
          className = "purple";
          break;
        default:
          points = 1;
          className = "green";
      }
    }

    const reversedGroupAdvansers =
      (finishingPosition === 1 && idx + 1 === 2) ||
      (finishingPosition === 2 && idx + 1 === 1);

    if (reversedGroupAdvansers) {
      points = 1;
      className = "orange";
    }

    return { points, className };
  });
};

const groupTotalCalc = (user) => {
  return ["A", "B", "C", "D", "E", "F", "G", "H"]
    .reduce((a, letter) => {
      if (user[`group${letter}1`].groupIsFinished) {
        a.push(letter);
      }

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

const knockoutRoundCalc = (round, userObj, teams) => {
  // let advancingTeams, userPicks;
  // switch (round) {
  //   case "quarters":
  //     advancingTeams = teams.filter((team) => team.advanceToQ);
  //     userPicks = Object.entries(userObj).reduce((a, arr) => {
  //       const key = arr[0];
  //       if (
  //         key === "knockQ1" ||
  //         key === "knockQ2" ||
  //         key === "knockQ3" ||
  //         key === "knockQ4" ||
  //         key === "knockQ5" ||
  //         key === "knockQ6" ||
  //         key === "knockQ7" ||
  //         key === "knockQ8"
  //       ) {
  //         a.push(arr[1]);
  //       }
  //       return a;
  //     }, []);
  //     break;
  //   case "semis":
  //     advancingTeams = teams.filter((team) => team.advanceToS);
  //     userPicks = Object.entries(userObj).reduce((a, arr) => {
  //       const key = arr[0];
  //       if (
  //         key === "knockS1" ||
  //         key === "knockS2" ||
  //         key === "knockS3" ||
  //         key === "knockS4"
  //       ) {
  //         a.push(arr[1]);
  //       }
  //       return a;
  //     }, []);
  //     break;
  //   case "finals":
  //     advancingTeams = teams.filter((team) => team.advanceToF);
  //     userPicks = Object.entries(userObj).reduce((a, arr) => {
  //       const key = arr[0];
  //       if (key === "knockF1" || key === "knockF2") {
  //         a.push(arr[1]);
  //       }
  //       return a;
  //     }, []);
  //     break;
  //   case "champ":
  //     advancingTeams = teams.filter((team) => team.advanceToChamp);
  //     userPicks = Object.entries(userObj).reduce((a, arr) => {
  //       const key = arr[0];
  //       if (key === "knockChamp") {
  //         a.push(arr[1]);
  //       }
  //       return a;
  //     }, []);
  // }
  // const knockoutObj = { [round]: 0 };
  // return advancingTeams.reduce((a, team) => {
  //   if (userPicks.includes(team.name)) {
  //     const points =
  //       round === "quarters"
  //         ? 2
  //         : round === "semis"
  //         ? 4
  //         : round === "finals"
  //         ? 6
  //         : round === "champ"
  //         ? 10
  //         : 0;
  //     a[round] += points;
  //   }
  //   return a;
  // }, knockoutObj);
};

const G = {
  R1: 0,
  R2: 0,
  R3: 0,
  R4: 0,
};

const totalScoreCalc = (
  groupA = G,
  groupB = G,
  groupC = G,
  groupD = G,
  groupE = G,
  groupF = G,
  groupG = G,
  groupH = G,
  Quart = { quarters: 0 },
  Semi = { semis: 0 },
  Final = { finals: 0 },
  Champ = { champ: 0 }
) => {
  // const points = [];
  // for (let i = 0; i < 8; i++) {
  //   const converter = {
  //     0: "A",
  //     1: "B",
  //     2: "C",
  //     3: "D",
  //     4: "E",
  //     5: "F",
  //     6: "G",
  //     7: "H",
  //   };
  //   const groupVar = eval(`group${converter[i]}`);
  //   Object.entries(groupVar)
  //     .map((entry) => {
  //       return entry[1];
  //     })
  //     .map((val) => points.push(val));
  // }
  // points.push(Quart.quarters);
  // points.push(Semi.semis);
  // points.push(Final.finals);
  // points.push(Champ.champ);
  // return points.reduce((a, b) => a + b);
};

const createCountObj = (arr, key) => {
  return arr.reduce((a, obj) => {
    a[obj[key]] ? a[obj[key]]++ : (a[obj[key]] = 1);
    return a;
  }, {});
};

const audit = (arr, actualGoalsScored) => {
  // let rank = arr[0].rank;
  // const tiebreakers = createCountObj(arr, "tiebreaker");
  // const audit = arr
  //   .map((userObj) => {
  //     userObj.numOfTimes = tiebreakers[userObj.tiebreaker];
  //     userObj.tiebreakerStatus =
  //       userObj.tiebreaker === actualGoalsScored
  //         ? "exact"
  //         : userObj.tiebreaker < actualGoalsScored
  //         ? "notOver"
  //         : "over";
  //     return userObj;
  //   })
  //   .map((userObj) => {
  //     if (userObj.numOfTimes > 1) userObj.tieExists = true;
  //     return userObj;
  //   })
  //   .sort((a, b) => {
  //     let fa = a.tiebreakerStatus,
  //       fb = b.tiebreakerStatus;
  //     return fa < fb ? -1 : fa > fb ? 1 : 0;
  //   });
  // const auditObj = {
  //   exact: [],
  //   notOver: [],
  //   over: [],
  // };
  // audit.forEach((user) => auditObj[user.tiebreakerStatus].push(user));
  // let answer = [];
  // Object.keys(auditObj).forEach((key) => {
  //   const keySorted = auditObj[key].sort((a, b) =>
  //     key === "over" ? a.tiebreaker - b.tiebreaker : b.tiebreaker - a.tiebreaker
  //   );
  //   answer = [...answer, ...keySorted];
  // });
  // return answer.map((userObj) => {
  //   userObj.rank = rank;
  //   rank++;
  //   return userObj;
  // });
};

const currentScoresObj = (users, teams, actualGoalsScored = null) => {
  // let rank = 1;
  // const firstAudit = users
  //   .reduce((a, user) => {
  //     const total = totalScoreCalc(
  //       singleGroupCalc(user, teams, "A"),
  //       singleGroupCalc(user, teams, "B"),
  //       singleGroupCalc(user, teams, "C"),
  //       singleGroupCalc(user, teams, "D"),
  //       singleGroupCalc(user, teams, "E"),
  //       singleGroupCalc(user, teams, "F"),
  //       singleGroupCalc(user, teams, "G"),
  //       singleGroupCalc(user, teams, "H"),
  //       knockoutRoundCalc("quarters", user, teams),
  //       knockoutRoundCalc("semis", user, teams),
  //       knockoutRoundCalc("finals", user, teams),
  //       knockoutRoundCalc("champ", user, teams)
  //     );
  //     const userObj = {
  //       name: user.name,
  //       tiebreaker: user.tiebreaker,
  //       total,
  //       tieExists: false,
  //       paid: user.paid,
  //     };
  //     a.push(userObj);
  //     return a;
  //   }, [])
  //   .sort((a, b) => b.total - a.total)
  //   .map((user) => {
  //     user.rank = rank;
  //     rank++;
  //     return user;
  //   });
  // let readyToRun = false;
  // firstAudit.forEach((user) => {
  //   if (user.total !== 0) readyToRun = true;
  // });
  // if (readyToRun) {
  //   let dupeScores = [];
  //   let nonDupeScores = [];
  //   let newDupeScores = [];
  //   const scores = createCountObj(firstAudit, "total");
  //   firstAudit.forEach((user) => {
  //     scores[user.total] === 1
  //       ? nonDupeScores.push(user)
  //       : dupeScores.push(user);
  //   });
  //   if (dupeScores.length) {
  //     const scoreObj = dupeScores.reduce((a, user) => {
  //       a[user.total] ? a[user.total].push(user) : (a[user.total] = [user]);
  //       return a;
  //     }, {});
  //     Object.keys(scoreObj).forEach((key) => {
  //       const newRanking = audit(scoreObj[key], actualGoalsScored);
  //       newDupeScores = [...newDupeScores, ...newRanking];
  //     });
  //     return [...newDupeScores, ...nonDupeScores];
  //   }
  //   return nonDupeScores;
  // }
  // return firstAudit;
};

const teamRankSort = (teams) => {
  // const sorted = teams.sort((a, b) => b.Pts - a.Pts);
  // return sorted.reduce((a, team, idx) => {
  //   a[idx + 1] = team.name;
  //   return a;
  // }, {});
};

const dupeValInArr = (arr) => {
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

const capFirstLetter = (str) => {
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
  const keys = Object.keys(obj);
  const fakeUser = {};
  keys.forEach((key) => {
    key === "name" ? (fakeUser.name = name) : (fakeUser[key] = obj[key]);
  });
  return fakeUser;
};

const findR16Teams = (teams, koPositions) => {
  return koPositions.map((koPos) =>
    teams.find((team) => team.knockoutPosition === koPos)
  );
};

const koGameCalc = (user, game, teams) => {
  const roundInfoObj = {
    Q: {
      1: ["A1", "B2"],
      2: ["C1", "D2"],
      3: ["E1", "F2"],
      4: ["G1", "H2"],
      5: ["B1", "A2"],
      6: ["D1", "C2"],
      7: ["F1", "E2"],
      8: ["H1", "G2"],
      points: 2,
    },
    S: {
      1: ["A1", "B2", "C1", "D2"],
      2: ["E1", "F2", "G1", "H2"],
      3: ["B1", "A2", "D1", "C2"],
      4: ["F1", "E2", "H1", "G2"],
      points: 4,
    },
    F: {
      1: ["A1", "B2", "C1", "D2", "E1", "F2", "G1", "H2"],
      2: ["B1", "A2", "D1", "C2", "F1", "E2", "H1", "G2"],
      points: 6,
    },
  };

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

  let usersPickClass = "";

  const gameIsFinished = teamThatAdvanced?.name ? true : false;

  if (gameIsFinished) {
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

    a += result.points;

    return a;
  }, 0);
};

const knockoutClass = (user, teams, position) => {
  // const usersTeamPick = user[`knock${position}`];
  // const round = position === "Champ" ? "Champ" : position.split("")[0];
  // const number = position === "Champ" ? "Champ" : position.split("")[1];
  // const placeObj = {
  //   Q: {
  //     1: ["A1", "B2"],
  //     2: ["C1", "D2"],
  //     3: ["E1", "F2"],
  //     4: ["G1", "H2"],
  //     5: ["B1", "A2"],
  //     6: ["D1", "C2"],
  //     7: ["F1", "E2"],
  //     8: ["H1", "G2"],
  //   },
  //   S: {
  //     1: ["A1", "B2", "C1", "D2"],
  //     2: ["E1", "F2", "G1", "H2"],
  //     3: ["B1", "A2", "D1", "C2"],
  //     4: ["F1", "E2", "H1", "G2"],
  //   },
  //   F: {
  //     1: ["A1", "B2", "C1", "D2", "E1", "F2", "G1", "H2"],
  //     2: ["B1", "A2", "D1", "C2", "F1", "E2", "H1", "G2"],
  //   },
  // };
  // let advancingTeam, knockoutPos, team;
  // if (position !== "Champ") {
  //   knockoutPos = placeObj[round][number];
  // }
  // switch (round) {
  //   case "Q":
  //     team = teams.find(
  //       (team) =>
  //         team[`advanceTo${round}`] &&
  //         knockoutPos.includes(team.knockoutPosition)
  //     );
  //     advancingTeam = team?.name;
  //     break;
  //   case "S":
  //     team = teams.find(
  //       (team) =>
  //         team[`advanceTo${round}`] &&
  //         knockoutPos.includes(team.knockoutPosition)
  //     );
  //     advancingTeam = team?.name;
  //     break;
  //   case "F":
  //     team = teams.find(
  //       (team) =>
  //         team[`advanceTo${round}`] &&
  //         knockoutPos.includes(team.knockoutPosition)
  //     );
  //     advancingTeam = team?.name;
  //     break;
  //   case "Champ":
  //     team = teams.find((team) => team[`advanceTo${round}`]);
  //     advancingTeam = team?.name;
  //     break;
  //   default:
  //     throw "error";
  // }
  // if (usersTeamPick?.name === advancingTeam) return "correct";
  // if (usersTeamPick?.outOfTourney) return "wrong";
  // return "";
};

module.exports = {
  findJoe,
  validateEmail,
  koGameCalc,
  koRoundCalc,
  groupCalc,
  groupTotalCalc,
  totalScoreCalc,
  knockoutRoundCalc,
  knockoutClass,
  currentScoresObj,
  teamRankSort,
  dupeValInArr,
  urlWord,
  formatSelectedUser,
  capFirstLetter,
  findEntry,
  formatEmail,
  getUserNames,
  addFakeUser,
  findR16Teams,
};
