const { expect } = require("chai");
const { calcMaxPts } = require("./src/store/funcs");

const {
  userData_full,
  teamData_full,
  usersData_ko_through_F,
  teamDataThroughFs,
  usersData_ko_through_S,
  teamDataThroughSs,
  usersData_ko_through_Q,
  teamDataThroughQs,
  usersData_ko_start,
  teamData_ko_start,
} = require("./testing/data");

describe(`max pts testing`, () => {
  const maxPtsTesting = [
    {
      description: "tournament is complete",
      userDataToUse: userData_full,
      teamDataToUse: teamData_full,
      userAudit: [
        { name: "Joe", pts: 128 },
        { name: "Anthony", pts: 82 },
        { name: "Kevin", pts: 52 },
        { name: "Pat", pts: 88 },
        { name: "Sarah", pts: 55 },
      ],
    },
    {
      description: "semis are finished, just the final is left",
      userDataToUse: usersData_ko_through_F,
      teamDataToUse: teamDataThroughFs,
      userAudit: [
        { name: "Joe", pts: 128 },
        { name: "Anthony", pts: 82 },
        { name: "Kevin", pts: 62 },
        { name: "Pat", pts: 88 },
        { name: "Sarah", pts: 55 },
      ],
    },
    {
      description: "quarters are finished, semis and final is left",
      userDataToUse: usersData_ko_through_S,
      teamDataToUse: teamDataThroughSs,
      userAudit: [
        { name: "Joe", pts: 128 },
        { name: "Anthony", pts: 82 },
        { name: "Kevin", pts: 68 },
        { name: "Pat", pts: 88 },
        { name: "Sarah", pts: 71 },
      ],
    },
    {
      description: "only the R16 is finished",
      userDataToUse: usersData_ko_through_Q,
      teamDataToUse: teamDataThroughQs,
      userAudit: [
        { name: "Joe", pts: 128 },
        { name: "Anthony", pts: 110 },
        { name: "Kevin", pts: 68 },
        { name: "Pat", pts: 102 },
        { name: "Sarah", pts: 85 },
      ],
    },
    {
      description: "KO stage started, no games complete yet",
      userDataToUse: usersData_ko_start,
      teamDataToUse: teamData_ko_start,
      userAudit: [
        { name: "Joe", pts: 128 },
        { name: "Anthony", pts: 114 },
        { name: "Kevin", pts: 86 },
        { name: "Pat", pts: 114 },
        { name: "Sarah", pts: 89 },
      ],
    },
  ];

  maxPtsTesting.forEach((test) => {
    it(test.description, () => {
      const users = test.userDataToUse;
      const teams = test.teamDataToUse;

      test.userAudit.forEach((user) => {
        const userData = users.find((userr) => userr.name === user.name);

        const result = calcMaxPts(userData, teams);

        expect(result).to.equal(user.pts);
      });
    });
  });
});
