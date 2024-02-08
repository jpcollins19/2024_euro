const { expect } = require("chai");
const {
  getCurrentScores,
  groupCalc,
  groupTotalCalc,
  urlWord,
  koGameCalc,
  koRoundCalc,
  userTotalPoints,
  colorDescriptionTableNeeded,
  auditThirdPlaceToAdvancePicks,
  determineR16Seeding,
  formatPathname,
  cap1stLetter,
  formatURL,
  shouldPayoutShow,
  calcPayout,
} = require("./src/store/funcs");

const {
  groupLetters,
  koLetters,
  Qs,
  Ss,
  Fs,
} = require("./src/store/variables");

const {
  userData_full,
  teamData_full,
  teamDataThroughQs,
  teamDataThroughSs,
  teamDataThroughFs,
} = require("./testing/data");

describe("Cals everthing correctly", () => {
  let users, teams;
  beforeEach(() => {
    users = userData_full;
    teams = teamData_full;
  });

  const resetGroupIsFinishedToTrueForAll = (user) => {
    const groupKeys = [];

    groupLetters.forEach((letter) => {
      for (let i = 1; i <= 4; i++) {
        groupKeys.push(`group${letter}${i}`);
      }
    });

    groupKeys.forEach((key) => {
      user[key].groupIsFinished = true;
    });
  };

  const addUserChampBack = (user) => {
    const userChampPicks = {
      Joe: "France",
      Stanley: "France",
      Pat: "France",
      Kevin: "England",
      Sarah: "Spain",
      Anthony: "Mexico",
    };

    const usersPick = userChampPicks[user.name];
    //
    const teamInfo = teamData_full.find((team) => team.name === usersPick);

    user.knockChamp = teamInfo;
  };

  describe("Calcs leaderboard", () => {
    let koObj, names, scores, tieExists, answer, joe;

    beforeEach(() => {
      users = users.filter((user) => user?.tiebreaker);
      joe = users.find((user) => user?.name === "Joe");
    });

    describe("stage testing", () => {
      const stageTesting = [
        {
          stage: 2,
          expectation:
            "no groups are finished - should list names alphabetically",
          adjustGroups: true,
          groupSlice: 0,
          correctResults: {
            0: { rank: 1, name: "Anthony", total: 0, tieExists: false },
            1: { rank: 2, name: "Joe", total: 0, tieExists: false },
            2: { rank: 3, name: "Kevin", total: 0, tieExists: false },
            3: { rank: 4, name: "Pat", total: 0, tieExists: false },
            4: { rank: 5, name: "Sarah", total: 0, tieExists: false },
            5: { rank: 6, name: "Stanley", total: 0, tieExists: false },
          },
        },
        {
          stage: 3,
          expectation: "first 2 groups are finished",
          adjustGroups: true,
          groupSlice: 2,
          correctResults: {
            0: { rank: 1, name: "Joe", total: 26, tieExists: true },
            1: { rank: 2, name: "Stanley", total: 26, tieExists: true },
            2: { rank: 3, name: "Anthony", total: 21, tieExists: false },
            3: { rank: 4, name: "Pat", total: 21, tieExists: false },
            4: { rank: 5, name: "Sarah", total: 13, tieExists: false },
            5: { rank: 6, name: "Kevin", total: 9, tieExists: false },
          },
        },
        {
          stage: 4,
          expectation: "all groups are finished",
          adjustGroups: false,
          correctResults: {
            0: { rank: 1, name: "Joe", total: 74, tieExists: true },
            1: { rank: 2, name: "Stanley", total: 74, tieExists: true },
            2: { rank: 3, name: "Anthony", total: 60, tieExists: false },
            3: { rank: 4, name: "Pat", total: 60, tieExists: false },
            4: { rank: 5, name: "Sarah", total: 35, tieExists: false },
            5: { rank: 6, name: "Kevin", total: 32, tieExists: false },
          },
        },
      ];

      stageTesting.forEach((test) => {
        it(`stage ${test.stage} - ${test.expectation}`, () => {
          users.forEach((user) => {
            user.knockChamp = null;

            resetGroupIsFinishedToTrueForAll(user);

            if (test.adjustGroups) {
              let letters = groupLetters.slice(test.groupSlice);

              const groupKeys = [];

              letters.forEach((letter) => {
                for (let i = 1; i <= 4; i++) {
                  groupKeys.push(`group${letter}${i}`);
                }
              });

              groupKeys.forEach((key) => {
                user[key].groupIsFinished = false;
              });
            }
          });

          answer = getCurrentScores(users, teams, joe);

          answer.forEach((user, idx) => {
            expect(user.rank).to.equal(test.correctResults[idx].rank);
            expect(user.name).to.equal(test.correctResults[idx].name);
            expect(user.total).to.equal(test.correctResults[idx].total);
            expect(user.tieExists).to.equal(test.correctResults[idx].tieExists);
          });
        });
      });
    });
  });

  describe("Calcs everyone's overall scores", () => {
    let user, groupTotal, userOverallTotal, gameAnswer, koRoundTotal;

    const usersObj = {
      Joe: {
        groups: {
          A: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
          B: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
          C: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          D: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
          E: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          F: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
        },
        midStage3: 1,
        midStage3Total: 13,
        groupsFinishedTotal: 74,

        koRounds: {
          R16: {
            R16_1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_2: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "Mexico" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_3: {
              usersPick: { name: "Belgium" },
              teamThatAdvanced: { name: "Belgium" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_4: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_5: {
              usersPick: { name: "Germany" },
              teamThatAdvanced: { name: "Germany" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_6: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_7: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_8: {
              usersPick: { name: "USA" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "correct",
              points: 2,
            },
          },
          quarters: {
            Q1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 4,
            },
            Q2: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "correct",
              points: 4,
            },
            Q3: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 4,
            },
            Q4: {
              usersPick: { name: "USA" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "correct",
              points: 4,
            },
          },
          semis: {
            S1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 6,
            },
            S2: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 6,
            },
          },

          champion: {
            Champ: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 10,
            },
          },
        },
        koRoundFinishedTotal_R16: 16,
        koRoundFinished_R16_overallTotal: 90,

        koRoundFinishedTotal_Q: 16,
        koRoundFinished_Q_overallTotal: 106,
        midStage5_Q_overallTotal: 45,

        koRoundFinishedTotal_S: 12,
        koRoundFinished_S_overallTotal: 118,

        koRoundFinishedTotal_C: 10,
        koRoundFinished_C_overallTotal: 128,
      },

      Stanley: {
        groups: {
          A: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
          B: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
          C: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          D: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
          E: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          F: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
        },
        midStage3: 2,
        midStage3Total: 26,
        groupsFinishedTotal: 74,

        koRounds: {
          R16: {
            R16_1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_2: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "Mexico" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_3: {
              usersPick: { name: "Belgium" },
              teamThatAdvanced: { name: "Belgium" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_4: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_5: {
              usersPick: { name: "Germany" },
              teamThatAdvanced: { name: "Germany" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_6: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_7: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_8: {
              usersPick: { name: "USA" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "correct",
              points: 2,
            },
          },
          quarters: {
            Q1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 4,
            },
            Q2: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "correct",
              points: 4,
            },
            Q3: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 4,
            },
            Q4: {
              usersPick: { name: "USA" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "correct",
              points: 4,
            },
          },
          semis: {
            S1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 6,
            },
            S2: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 6,
            },
          },

          champion: {
            Champ: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 10,
            },
          },
        },
        koRoundFinishedTotal_R16: 16,
        koRoundFinished_R16_overallTotal: 90,

        koRoundFinishedTotal_Q: 16,
        koRoundFinished_Q_overallTotal: 106,

        koRoundFinishedTotal_S: 12,
        koRoundFinished_S_overallTotal: 118,

        koRoundFinishedTotal_C: 10,
        koRoundFinished_C_overallTotal: 128,
      },

      Pat: {
        groups: {
          A: [
            { points: 5, className: "blue" },
            { points: 2, className: "orange" },
            { points: 2, className: "orange" },
            { points: 1, className: "green" },
          ],
          B: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          C: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          D: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
          E: [
            { points: 2, className: "orange" },
            { points: 2, className: "orange" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          F: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
        },
        midStage3: 4,
        midStage3Total: 45,
        groupsFinishedTotal: 60,

        koRounds: {
          R16: {
            R16_1: {
              usersPick: { name: "Australia" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_2: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "Mexico" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_3: {
              usersPick: { name: "Belgium" },
              teamThatAdvanced: { name: "Belgium" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_4: {
              usersPick: { name: "Denmark" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_5: {
              usersPick: { name: "Germany" },
              teamThatAdvanced: { name: "Germany" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_6: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_7: {
              usersPick: { name: "Morocco" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_8: {
              usersPick: { name: "Ecuador" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
          quarters: {
            Q1: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q2: {
              usersPick: { name: "Belgium" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q3: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 4,
            },
            Q4: {
              usersPick: { name: "Ecuador" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
          semis: {
            S1: {
              usersPick: { name: "Belgium" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "wrong",
              points: 0,
            },
            S2: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 6,
            },
          },

          champion: {
            Champ: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 10,
            },
          },
        },
        koRoundFinishedTotal_R16: 8,
        koRoundFinished_R16_overallTotal: 68,

        koRoundFinishedTotal_Q: 4,
        koRoundFinished_Q_overallTotal: 72,

        koRoundFinishedTotal_S: 6,
        koRoundFinished_S_overallTotal: 78,

        koRoundFinishedTotal_C: 10,
        koRoundFinished_C_overallTotal: 88,
      },

      Kevin: {
        groups: {
          A: [
            { points: 2, className: "orange" },
            { points: 2, className: "orange" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          B: [
            { points: 5, className: "blue" },
            { points: 0, className: "" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          C: [
            { points: 2, className: "orange" },
            { points: 0, className: "" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          D: [
            { points: 0, className: "" },
            { points: 2, className: "orange" },
            { points: 2, className: "orange" },
            { points: 0, className: "" },
          ],
          E: [
            { points: 2, className: "orange" },
            { points: 0, className: "" },
            { points: 2, className: "orange" },
            { points: 0, className: "" },
          ],
          F: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
        },
        midStage3: 5,
        midStage3Total: 19,
        groupsFinishedTotal: 32,

        koRounds: {
          R16: {
            R16_1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_2: {
              usersPick: { name: "Netherlands" },
              teamThatAdvanced: { name: "Mexico" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_3: {
              usersPick: { name: "Wales" },
              teamThatAdvanced: { name: "Belgium" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_4: {
              usersPick: { name: "Denmark" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_5: {
              usersPick: { name: "Germany" },
              teamThatAdvanced: { name: "Germany" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_6: {
              usersPick: { name: "Croatia" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_7: {
              usersPick: { name: "Morocco" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_8: {
              usersPick: { name: "USA" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "correct",
              points: 2,
            },
          },
          quarters: {
            Q1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 4,
            },
            Q2: {
              usersPick: { name: "Wales" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q3: {
              usersPick: { name: "Croatia" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q4: {
              usersPick: { name: "USA" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "correct",
              points: 4,
            },
          },
          semis: {
            S1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 6,
            },
            S2: {
              usersPick: { name: "USA" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "wrong",
              points: 0,
            },
          },

          champion: {
            Champ: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
        },
        koRoundFinishedTotal_R16: 6,
        koRoundFinished_R16_overallTotal: 38,

        koRoundFinishedTotal_Q: 8,
        koRoundFinished_Q_overallTotal: 46,

        koRoundFinishedTotal_S: 6,
        koRoundFinished_S_overallTotal: 52,

        koRoundFinishedTotal_C: 0,
        koRoundFinished_C_overallTotal: 52,
      },

      Sarah: {
        groups: {
          A: [
            { points: 2, className: "orange" },
            { points: 0, className: "" },
            { points: 2, className: "orange" },
            { points: 0, className: "" },
          ],
          B: [
            { points: 2, className: "orange" },
            { points: 4, className: "purple" },
            { points: 2, className: "orange" },
            { points: 1, className: "green" },
          ],
          C: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          D: [
            { points: 2, className: "orange" },
            { points: 2, className: "orange" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          E: [
            { points: 2, className: "orange" },
            { points: 2, className: "orange" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          F: [
            { points: 2, className: "orange" },
            { points: 0, className: "" },
            { points: 3, className: "pink" },
            { points: 0, className: "" },
          ],
        },
        midStage3: 3,
        midStage3Total: 22,
        groupsFinishedTotal: 35,

        koRounds: {
          R16: {
            R16_1: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_2: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "Mexico" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_3: {
              usersPick: { name: "Wales" },
              teamThatAdvanced: { name: "Belgium" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_4: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_5: {
              usersPick: { name: "Senegal" },
              teamThatAdvanced: { name: "Germany" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_6: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_7: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_8: {
              usersPick: { name: "USA" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "correct",
              points: 2,
            },
          },
          quarters: {
            Q1: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q2: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "correct",
              points: 4,
            },
            Q3: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 4,
            },
            Q4: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
          semis: {
            S1: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "wrong",
              points: 0,
            },
            S2: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "wrong",
              points: 0,
            },
          },

          champion: {
            Champ: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
        },
        koRoundFinishedTotal_R16: 12,
        koRoundFinished_R16_overallTotal: 47,

        koRoundFinishedTotal_Q: 8,
        koRoundFinished_Q_overallTotal: 55,

        koRoundFinishedTotal_S: 0,
        koRoundFinished_S_overallTotal: 55,

        koRoundFinishedTotal_C: 0,
        koRoundFinished_C_overallTotal: 55,
      },

      Anthony: {
        groups: {
          A: [
            { points: 5, className: "blue" },
            { points: 2, className: "orange" },
            { points: 0, className: "" },
            { points: 1, className: "green" },
          ],
          B: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
          C: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          D: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          E: [
            { points: 2, className: "orange" },
            { points: 2, className: "orange" },
            { points: 1, className: "green" },
            { points: 1, className: "green" },
          ],
          F: [
            { points: 5, className: "blue" },
            { points: 4, className: "purple" },
            { points: 3, className: "pink" },
            { points: 1, className: "green" },
          ],
        },
        midStage3: 1,
        midStage3Total: 8,
        groupsFinishedTotal: 60,

        koRounds: {
          R16: {
            R16_1: {
              usersPick: { name: "Australia" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "wrong",
              points: 0,
            },
            R16_2: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "Mexico" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_3: {
              usersPick: { name: "Belgium" },
              teamThatAdvanced: { name: "Belgium" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_4: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_5: {
              usersPick: { name: "Germany" },
              teamThatAdvanced: { name: "Germany" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_6: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_7: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "correct",
              points: 2,
            },
            R16_8: {
              usersPick: { name: "Ecuador" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
          quarters: {
            Q1: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q2: {
              usersPick: { name: "Belgium" },
              teamThatAdvanced: { name: "Spain" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q3: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 4,
            },
            Q4: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "USA" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
          semis: {
            S1: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "wrong",
              points: 0,
            },
            S2: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 6,
            },
          },

          champion: {
            Champ: {
              usersPick: { name: "Mexico" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
        },
        koRoundFinishedTotal_R16: 12,
        koRoundFinished_R16_overallTotal: 72,

        koRoundFinishedTotal_Q: 4,
        koRoundFinished_Q_overallTotal: 76,

        koRoundFinishedTotal_S: 6,
        koRoundFinished_S_overallTotal: 82,

        koRoundFinishedTotal_C: 0,
        koRoundFinished_C_overallTotal: 82,
      },
    };

    Object.keys(usersObj).forEach((userName) => {
      describe(`${userName}'s Scores`, () => {
        beforeEach(() => {
          user = users.find((userr) => userr.name === userName);
        });

        describe(`${userName}'s Group Stage`, () => {
          beforeEach(() => {
            resetGroupIsFinishedToTrueForAll(user);

            user.knockChamp = null;
          });

          Object.keys(usersObj[userName].groups).forEach((group) => {
            it(`calcs ${userName}'s group ${group} total & className correctly`, () => {
              const groupResults = groupCalc(user, group);

              for (let i = 0; i < groupResults.length; i++) {
                const expectedPoints =
                  usersObj[userName].groups[group][i].points;

                const expectedClassName =
                  usersObj[userName].groups[group][i].className;

                expect(groupResults[i].points).to.equal(expectedPoints);
                expect(groupResults[i].className).to.equal(expectedClassName);
              }
            });
          });

          describe(`calculates ${userName}'s total group scores correctly with only ${usersObj[userName].midStage3} group(s) complete`, () => {
            beforeEach(() => {
              let letters = groupLetters.slice(usersObj[userName].midStage3);

              const groupKeys = [];

              letters.forEach((letter) => {
                for (let i = 1; i <= 4; i++) {
                  groupKeys.push(`group${letter}${i}`);
                }
              });

              groupKeys.forEach((key) => {
                user[key].groupIsFinished = false;
              });
            });

            it(`groupTotalCalc func`, () => {
              groupTotal = groupTotalCalc(user);
              expect(groupTotal).to.equal(usersObj[userName].midStage3Total);
            });

            it(`userTotalPoints func`, () => {
              userOverallTotal = userTotalPoints(user);

              expect(userOverallTotal).to.equal(
                usersObj[userName].midStage3Total
              );
            });
          });

          describe(`calculates ${userName}'s total group scores correctly at the end of stage 3`, () => {
            beforeEach(() => {});

            it(`groupTotalCalc func`, () => {
              groupTotal = groupTotalCalc(user);

              expect(groupTotal).to.equal(
                usersObj[userName].groupsFinishedTotal
              );
            });

            it(`userTotalPoints func`, () => {
              userOverallTotal = userTotalPoints(user);

              expect(userOverallTotal).to.equal(
                usersObj[userName].groupsFinishedTotal
              );
            });
          });
        });

        describe(`${userName}'s Knockout rounds`, () => {
          Object.keys(usersObj[userName].koRounds).forEach((round) => {
            describe(`${userName}: ${round}`, () => {
              let letter = round.toUpperCase().split("")[0];

              if (letter === "R") {
                letter = "R16";
              }

              beforeEach(() => {
                addUserChampBack(user);

                const knockKeys = [];

                const knockObj = {
                  Q: 8,
                  S: 4,
                  F: 2,
                  Champ: 1,
                };

                koLetters.forEach((round) => {
                  switch (round) {
                    case "Champ":
                      knockKeys.push(`knock${round}`);
                      break;
                    default:
                      for (let i = 1; i <= knockObj[round]; i++) {
                        knockKeys.push(`knock${round}${i}`);
                      }
                  }
                });

                switch (round) {
                  case "R16":
                    knockKeys.forEach((key) => {
                      const teamInfoToUse = teamDataThroughQs.find(
                        (team) => team.name === user[key].name
                      );
                      user[key] = teamInfoToUse;
                    });
                    break;
                  case "quarters":
                    knockKeys.forEach((key) => {
                      const teamInfoToUse = teamDataThroughSs.find(
                        (team) => team.name === user[key].name
                      );
                      user[key] = teamInfoToUse;
                    });
                    break;
                }
              });

              describe(`when ${round} is finished`, () => {
                Object.keys(usersObj[userName].koRounds[round]).forEach(
                  (game) => {
                    describe(`game: ${game}`, () => {
                      beforeEach(() => {
                        const round = game.split("")[0];
                        let teamsArrToUse;

                        switch (round) {
                          case "R":
                            teamsArrToUse = teamDataThroughQs;
                            break;
                          case "Q":
                            teamsArrToUse = teamDataThroughSs;
                            break;
                          case "S":
                            teamsArrToUse = teamDataThroughFs;
                            break;
                          default:
                            teamsArrToUse = teamData_full;
                        }

                        gameAnswer = koGameCalc(user, game, teamsArrToUse);
                      });

                      it(`pulls in users prediction correctly`, () => {
                        expect(gameAnswer.usersPick.name).to.equal(
                          usersObj[userName].koRounds[round][game].usersPick
                            .name
                        );
                      });

                      it(`game: ${game} - pulls in the team that advanced correctly`, () => {
                        expect(gameAnswer.teamThatAdvanced.name).to.equal(
                          usersObj[userName].koRounds[round][game]
                            .teamThatAdvanced.name
                        );
                      });

                      it(`game: ${game} - pulls in the users className correctly`, () => {
                        expect(gameAnswer.usersPickClass).to.equal(
                          usersObj[userName].koRounds[round][game]
                            .usersPickClass
                        );
                      });

                      it(`game: ${game} - calcs users points correctly`, () => {
                        expect(gameAnswer.points).to.equal(
                          usersObj[userName].koRounds[round][game].points
                        );
                      });
                    });
                  }
                );

                it(`calcs ${userName}'s overall total for ${round} correctly`, () => {
                  koRoundTotal = koRoundCalc(user, round, teamData_full);

                  expect(koRoundTotal).to.equal(
                    usersObj[userName][`koRoundFinishedTotal_${letter}`]
                  );
                });

                it(`calcs ${userName}'s overall total correctly (userTotalPoints func)`, () => {
                  switch (letter) {
                    case "R16":
                      teams = teamDataThroughQs;
                      break;
                    case "Q":
                      teams = teamDataThroughSs;
                      break;
                    case "S":
                      teams = teamDataThroughFs;
                      break;
                    default:
                      teams = teamData_full;
                  }

                  userOverallTotal = userTotalPoints(user, teams);

                  expect(userOverallTotal).to.equal(
                    usersObj[userName][`koRoundFinished_${letter}_overallTotal`]
                  );
                });
              });
            });
          });
        });
      });
    });
  });
});

describe("determineR16Seeding", () => {
  const determineR16SeedingTesting = [
    {
      scenario: "ABCD",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Wales", "Australia", "Poland"],
      expectedMatchups: {
        R16_1: ["B1", "A3"],
        R16_3: ["F1", "C3"],
        R16_5: ["E1", "B3"],
        R16_7: ["C1", "D3"],
      },
    },
    {
      scenario: "ABCE",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Wales", "Japan", "Poland"],
      expectedMatchups: {
        R16_1: ["B1", "A3"],
        R16_3: ["F1", "C3"],
        R16_5: ["E1", "B3"],
        R16_7: ["C1", "E3"],
      },
    },
    {
      scenario: "ABCF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Wales", "Morocco", "Poland"],
      expectedMatchups: {
        R16_1: ["B1", "A3"],
        R16_3: ["F1", "C3"],
        R16_5: ["E1", "B3"],
        R16_7: ["C1", "F3"],
      },
    },
    {
      scenario: "ABDE",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Wales", "Australia", "Japan"],
      expectedMatchups: {
        R16_1: ["B1", "D3"],
        R16_3: ["F1", "B3"],
        R16_5: ["E1", "A3"],
        R16_7: ["C1", "E3"],
      },
    },
    {
      scenario: "ABDF",
      teamAdjustments: false,
      expectedMatchups: {
        R16_1: ["B1", "D3"],
        R16_3: ["F1", "B3"],
        R16_5: ["E1", "A3"],
        R16_7: ["C1", "F3"],
      },
    },
    {
      scenario: "ABEF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Wales", "Morocco", "Japan"],
      expectedMatchups: {
        R16_1: ["B1", "E3"],
        R16_3: ["F1", "A3"],
        R16_5: ["E1", "B3"],
        R16_7: ["C1", "F3"],
      },
    },
    {
      scenario: "ACDE",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Poland", "Australia", "Japan"],
      expectedMatchups: {
        R16_1: ["B1", "E3"],
        R16_3: ["F1", "A3"],
        R16_5: ["E1", "C3"],
        R16_7: ["C1", "D3"],
      },
    },
    {
      scenario: "ACDF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Poland", "Australia", "Morocco"],
      expectedMatchups: {
        R16_1: ["B1", "F3"],
        R16_3: ["F1", "A3"],
        R16_5: ["E1", "C3"],
        R16_7: ["C1", "D3"],
      },
    },
    {
      scenario: "ACEF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Poland", "Japan", "Morocco"],
      expectedMatchups: {
        R16_1: ["B1", "E3"],
        R16_3: ["F1", "A3"],
        R16_5: ["E1", "C3"],
        R16_7: ["C1", "F3"],
      },
    },
    {
      scenario: "ADEF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Senegal", "Australia", "Japan", "Morocco"],
      expectedMatchups: {
        R16_1: ["B1", "E3"],
        R16_3: ["F1", "A3"],
        R16_5: ["E1", "D3"],
        R16_7: ["C1", "F3"],
      },
    },
    {
      scenario: "BCDE",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Wales", "Poland", "Australia", "Japan"],
      expectedMatchups: {
        R16_1: ["B1", "E3"],
        R16_3: ["F1", "C3"],
        R16_5: ["E1", "B3"],
        R16_7: ["C1", "D3"],
      },
    },
    {
      scenario: "BCDF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Wales", "Poland", "Australia", "Morocco"],
      expectedMatchups: {
        R16_1: ["B1", "F3"],
        R16_3: ["F1", "B3"],
        R16_5: ["E1", "C3"],
        R16_7: ["C1", "D3"],
      },
    },
    {
      scenario: "BCEF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Wales", "Poland", "Japan", "Morocco"],
      expectedMatchups: {
        R16_1: ["B1", "F3"],
        R16_3: ["F1", "B3"],
        R16_5: ["E1", "C3"],
        R16_7: ["C1", "E3"],
      },
    },
    {
      scenario: "BDEF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Wales", "Australia", "Japan", "Morocco"],
      expectedMatchups: {
        R16_1: ["B1", "F3"],
        R16_3: ["F1", "B3"],
        R16_5: ["E1", "D3"],
        R16_7: ["C1", "E3"],
      },
    },
    {
      scenario: "CDEF",
      teamAdjustments: true,
      teamsToAdjustToThird: ["Poland", "Australia", "Japan", "Morocco"],
      expectedMatchups: {
        R16_1: ["B1", "F3"],
        R16_3: ["F1", "C3"],
        R16_5: ["E1", "D3"],
        R16_7: ["C1", "E3"],
      },
    },
  ];
  let teams;
  const resetTeamFinishingPositions = (teams) => {
    const teamsToPutBackToThird = ["Senegal", "Wales", "Australia", "Morocco"];
    const teamsToPutBackToFourth = ["Poland", "Japan"];
    const adjustTeam = (team, position) => {
      team.thirdPlaceAndAdvancedToKO = position === 3 ? true : false;
      const teamGroup = team.knockoutPosition.split("")[0];
      const koPos = `${teamGroup}${position}`;
      team.knockoutPosition = koPos;
      team.groupFinishingPosition = position;
      return team;
    };
    teams.forEach((team) => {
      if (teamsToPutBackToThird.includes(team?.name)) {
        team = adjustTeam(team, 3);
      }
      if (teamsToPutBackToFourth.includes(team?.name)) {
        team = adjustTeam(team, 4);
      }
    });
    return teams;
  };
  beforeEach(() => {
    teams = teamData_full;
    teams = resetTeamFinishingPositions(teams);
  });
  const adjustCurrentTeamFinishingPositions = (
    allTeams,
    teamsToAdjust,
    newFinishingPosition
  ) => {
    allTeams.forEach((team) => {
      if (teamsToAdjust.includes(team?.name)) {
        if (newFinishingPosition === 3) {
          team.thirdPlaceAndAdvancedToKO = true;
        }
        const teamGroup = team.knockoutPosition.split("")[0];
        const newKOPos = `${teamGroup}${newFinishingPosition}`;
        team.knockoutPosition = newKOPos;
        team.groupFinishingPosition = newFinishingPosition;
      }
    });
    return allTeams;
  };
  determineR16SeedingTesting.forEach((test) => {
    it(`advancing 3rd place teams are: ${test.scenario}`, () => {
      if (test.teamAdjustments) {
        teams.forEach((team) => (team.thirdPlaceAndAdvancedToKO = false));
        teams = adjustCurrentTeamFinishingPositions(
          teams,
          ["Senegal", "Wales", "Australia", "Morocco"],
          4
        );
        teams = adjustCurrentTeamFinishingPositions(
          teams,
          test.teamsToAdjustToThird,
          3
        );
      }
      const answer = determineR16Seeding(teams);
      const staticGames = {
        R16_2: ["A1", "C2"],
        R16_4: ["D2", "E2"],
        R16_6: ["D1", "F2"],
        R16_8: ["A2", "B2"],
      };
      const expectedMatchups = test.expectedMatchups;
      const correctResults = {
        ...expectedMatchups,
        ...staticGames,
      };
      const correctResultsEntries = Object.entries(correctResults);
      correctResultsEntries.forEach((entry) => {
        const game = entry[0];
        const correctMatchup = entry[1];
        const correctTeam1 = correctMatchup[0];
        const correctTeam2 = correctMatchup[1];
        const answerMatchup = answer[game];
        const answerTeam1 = answerMatchup[0];
        const answerTeam2 = answerMatchup[1];
        expect(correctTeam1).to.equal(answerTeam1);
        expect(correctTeam2).to.equal(answerTeam2);
      });
    });
  });
});

describe("colorDescriptionTableNeeded func", () => {
  const colorDescriptionTableNeededFuncTesting = [
    {
      paid: false,
      ties: false,
      result: true,
      testCases: [
        { paidNames: ["Bunda"] },
        { paidNames: ["Frank", "Jill", "Aboona", "Jill"] },
        {
          paidNames: [
            "Frank",
            "Jill",
            "Aboona",
            "Jill",
            "Joe",
            "Kelly",
            "Stanley",
            "Coach",
          ],
        },
      ],
    },
    {
      paid: false,
      ties: true,
      result: true,
      testCases: [
        { paidNames: ["Bunda"], tieNames: ["Bunda", "Aboona"] },
        {
          paidNames: ["Bunda", "Jill", "Coach"],
          tieNames: ["Joe", "Kelly"],
        },
      ],
    },
    {
      paid: true,
      ties: true,
      result: true,
      testCases: [
        { tieNames: ["Aboona", "Jill"] },
        { tieNames: ["Coach", "Joe", "Kelly"] },
      ],
    },
    {
      paid: true,
      ties: false,
      result: false,
      testCases: [],
    },
  ];
  describe("returns correct boolean based on leaderboard rankings", () => {
    colorDescriptionTableNeededFuncTesting.forEach((scenario) => {
      it(`all users paid = ${scenario.paid}; tie exists = ${scenario.ties}`, () => {
        scenario.testCases.forEach((testCase) => {
          users = [
            { name: "Aboona", tieExists: false, paid: true },
            { name: "Bunda", tieExists: false, paid: true },
            { name: "Coach", tieExists: false, paid: true },
            { name: "Frank", tieExists: false, paid: true },
            { name: "Jill", tieExists: false, paid: true },
            { name: "Joe", tieExists: false, paid: true },
            { name: "Kelly", tieExists: false, paid: true },
            { name: "Stanley", tieExists: false, paid: true },
          ];
          users.forEach((user) => {
            scenario.ties &&
              testCase.tieNames.forEach((name) => {
                if (user.name === name) user.tieExists = true;
              });
            !scenario.paid &&
              testCase.paidNames.forEach((name) => {
                if (user.name === name) user.paid = false;
              });
          });
          answer = colorDescriptionTableNeeded(users);
          expect(answer).to.equal(scenario.result);
        });
      });
    });
  });
});

describe("urlWord", () => {
  it("works", () => {
    const group = urlWord("group");
    const leaderboard = urlWord("leaderboard");
    const my_picks = urlWord("my picks");
    const pool_picks = urlWord("pool picks");
    const group_details = urlWord("group details");
    expect(group).to.equal("group");
    expect(leaderboard).to.equal("leaderboard");
    expect(my_picks).to.equal("my_picks");
    expect(pool_picks).to.equal("pool_picks");
    expect(group_details).to.equal("group_details");
  });
});

describe("auditThirdPlaceToAdvancePicks", () => {
  const auditThirdPlaceToAdvancePicksTesting = [
    {
      scenario: "no",
      obj: {
        A: false,
        B: false,
        C: false,
        D: false,
        E: false,
        F: false,
      },
      answer: { outcome: "-4", groupErrors: ["A", "B", "C", "D", "E", "F"] },
    },
    {
      scenario: 1,
      obj: {
        A: false,
        B: true,
        C: false,
        D: false,
        E: false,
        F: false,
      },
      answer: { outcome: "-3", groupErrors: ["A", "C", "D", "E", "F"] },
    },
    {
      scenario: 2,
      obj: {
        A: false,
        B: true,
        C: false,
        D: false,
        E: true,
        F: false,
      },
      answer: { outcome: "-2", groupErrors: ["A", "C", "D", "F"] },
    },
    {
      scenario: 3,
      obj: {
        A: true,
        B: false,
        C: false,
        D: true,
        E: false,
        F: true,
      },
      answer: { outcome: "-1", groupErrors: ["B", "C", "E"] },
    },
    {
      scenario: 4,
      obj: {
        A: true,
        B: true,
        C: false,
        D: true,
        E: true,
        F: false,
      },
      answer: { outcome: "=", groupErrors: [] },
    },
    {
      scenario: 5,
      obj: {
        A: true,
        B: true,
        C: true,
        D: true,
        E: false,
        F: true,
      },
      answer: { outcome: "+1", groupErrors: ["A", "B", "C", "D", "F"] },
    },
    {
      scenario: 6,
      obj: {
        A: true,
        B: true,
        C: true,
        D: true,
        E: true,
        F: true,
      },
      answer: { outcome: "+2", groupErrors: ["A", "B", "C", "D", "E", "F"] },
    },
  ];
  auditThirdPlaceToAdvancePicksTesting.forEach((scenario) => {
    it(`with ${scenario.scenario} picks`, () => {
      const answer = auditThirdPlaceToAdvancePicks(scenario.obj);
      expect(scenario.answer.outcome).to.equal(answer.outcome);
      scenario.answer.groupErrors.forEach((letter, i) => {
        expect(letter).to.equal(answer.groupErrors[i]);
      });
      answer.groupErrors.forEach((letter, i) => {
        expect(letter).to.equal(scenario.answer.groupErrors[i]);
      });
    });
  });
});

describe("formatPathname", () => {
  const formatPathnameTesting = [
    { value: "email_notifications", result: "Email Notifications" },
  ];
  formatPathnameTesting.forEach((test) => {
    it(`${test.value}`, () => {
      const result = formatPathname(test.value);
      expect(result).to.equal(test.result);
    });
  });
});

describe("cap1stLetter", () => {
  const cap1stLetterTesting = [
    { value: "rank", result: "Rank" },
    { value: "name", result: "Name" },
    { value: "total", result: "Total" },
    { value: "max_Pts", result: "Max Pts" },
    { value: "pool_picks", result: "Pool Picks" },
  ];
  cap1stLetterTesting.forEach((test) => {
    it(`${test.value}`, () => {
      const result = cap1stLetter(test.value);
      expect(result).to.equal(test.result);
    });
  });
});

describe("formatURL", () => {
  const formatURLTesting = [
    { value: "My Picks v. Your Picks", result: "my_picks_v_your_picks" },
    { value: "Golfer v. Golfer", result: "golfer_v_golfer" },
    { value: "Who Picked This Golfer", result: "who_picked_this_golfer" },
  ];
  formatURLTesting.forEach((test) => {
    it(`${test.value}`, () => {
      const result = formatURL(test.value);
      expect(result).to.equal(test.result);
    });
  });
});

describe("shouldPayoutShow", () => {
  const testsToRun = [
    {
      scenario: "tourney hasnt started yet & user is not logged in",
      joe: { tourneyStage: 1 },
      user: { id: null, tiebreaker: null },
      result: false,
    },
    {
      scenario: "tourney hasnt started yet, user is logged in w/ no picks",
      joe: { tourneyStage: 1 },
      user: { id: true, tiebreaker: null },
      result: true,
    },
    {
      scenario: "tourney hasnt started yet, user is logged in w/ picks",
      joe: { tourneyStage: 1 },
      user: { id: true, tiebreaker: true },
      result: true,
    },
    {
      scenario: "tourney has started & user is not logged in",
      joe: { tourneyStage: 2 },
      user: { id: null, tiebreaker: null },
      result: false,
    },
    {
      scenario: "tourney has started, user is logged in w/ no picks",
      joe: { tourneyStage: 2 },
      user: { id: true, tiebreaker: null },
      result: false,
    },
    {
      scenario: "tourney has started, user is logged in w/ picks",
      joe: { tourneyStage: 3 },
      user: { id: true, tiebreaker: true },
      result: true,
    },
  ];

  testsToRun.forEach((test) => {
    it(`${test.scenario}`, () => {
      const result = shouldPayoutShow(test.joe, test.user);

      expect(result).to.equal(test.result);
    });
  });
});

describe("calcPayout", () => {
  const testsToRun = [
    {
      scenario: 1,
      users: [1],
      result: { firstPlace: 15, secondPlace: 5, thirdPlace: 0, numOfPicks: 1 },
    },
    {
      scenario: 2,
      users: [1, 2],
      result: { firstPlace: 30, secondPlace: 10, thirdPlace: 0, numOfPicks: 2 },
    },
    {
      scenario: 3,
      users: [1, 2, 3],
      result: { firstPlace: 45, secondPlace: 15, thirdPlace: 0, numOfPicks: 3 },
    },
    {
      scenario: 4,
      users: [1, 2, 3, 4],
      result: { firstPlace: 60, secondPlace: 20, thirdPlace: 0, numOfPicks: 4 },
    },
    {
      scenario: 5,
      users: [1, 2, 3, 4, 5],
      result: {
        firstPlace: 60,
        secondPlace: 20,
        thirdPlace: 20,
        numOfPicks: 5,
      },
    },
    {
      scenario: 9,
      users: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      result: {
        firstPlace: 120,
        secondPlace: 40,
        thirdPlace: 20,
        numOfPicks: 9,
      },
    },
    {
      scenario: 15,
      users: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      result: {
        firstPlace: 210,
        secondPlace: 70,
        thirdPlace: 20,
        numOfPicks: 15,
      },
    },
  ];

  testsToRun.forEach((test) => {
    it(`submitted picks count = ${test.scenario}`, () => {
      const result = calcPayout(test.users);

      expect(result.firstPlace).to.equal(test.result.firstPlace);
      expect(result.secondPlace).to.equal(test.result.secondPlace);
      expect(result.thirdPlace).to.equal(test.result.thirdPlace);
      expect(result.numOfPicks).to.equal(test.result.numOfPicks);
    });
  });
});
