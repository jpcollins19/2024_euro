const {
  db,
  models: { User, Team, Updated },
} = require("../db/index.js");

let teamInfo = [
  { name: "Qatar", group: "A" },
  { name: "Ecuador", group: "A" },
  { name: "Senegal", group: "A" },
  { name: "Netherlands", group: "A" },

  { name: "England", group: "B" },
  { name: "Iran", group: "B" },
  { name: "USA", group: "B" },
  { name: "Wales", group: "B" },

  { name: "Argentina", group: "C" },
  { name: "Saudi Arabia", group: "C" },
  { name: "Mexico", group: "C" },
  { name: "Poland", group: "C" },

  { name: "France", group: "D" },
  { name: "Australia", group: "D" },
  { name: "Denmark", group: "D" },
  { name: "Tunisia", group: "D" },

  { name: "Spain", group: "E" },
  { name: "Costa Rica", group: "E" },
  { name: "Germany", group: "E" },
  { name: "Japan", group: "E" },

  { name: "Belgium", group: "F" },
  { name: "Canada", group: "F" },
  { name: "Morocco", group: "F" },
  { name: "Croatia", group: "F" },
];

// const teamEditObj = {
//   Netherlands: {
//     groupFinishingPosition: 1,
//     W: 2,
//     D: 1,
//     L: 0,
//     GF: 12,
//     GA: 1,
//   },
//   Senegal: {
//     groupFinishingPosition: 2,
//     W: 2,
//     D: 0,
//     L: 1,
//     GF: 1,
//     GA: 4,
//   },
//   Ecuador: {
//     groupFinishingPosition: 3,
//     W: 1,
//     D: 1,
//     L: 1,
//     GF: 14,
//     GA: 12,
//   },
//   Qatar: {
//     groupFinishingPosition: 4,
//     W: 0,
//     D: 0,
//     L: 3,
//     GF: 3,
//     GA: 15,
//   },
// };

const entries = ["W", "D", "L", "GF", "GA", "groupFinishingPosition"];

teamInfo.forEach((team) => {
  team.flag = `https://www.sciencekids.co.nz/images/pictures/flags680/${
    team.name === "Saudi Arabia"
      ? "Saudi_Arabia"
      : team.name === "Brasil"
      ? "Brazil"
      : team.name === "Switz"
      ? "Switzerland"
      : team.name === "USA"
      ? "United_States"
      : team.name === "S. Korea"
      ? "South_Korea"
      : team.name === "Costa Rica"
      ? "Costa_Rica"
      : team.name
  }.jpg`;

  // team.group === "A" &&
  //   entries.forEach((entry) => {
  //     team[entry] = teamEditObj[team?.name][entry];
  //   });
});

const users = [
  {
    email: "joe@gmail.com",
    // email: "jpatcollins@gmail.com",
    //emailNotifications: true,
    password: "nugget",
    name: "Joe",
    admin: true,
    paid: true,

    groupA1: "Netherlands",
    groupA2: "Ecuador",
    groupA3: "Senegal",
    groupA4: "Qatar",
    thirdPlaceAdvanceToKO_Pick_A: "Senegal",
    groupB1: "England",
    groupB2: "USA",
    groupB3: "Wales",
    groupB4: "Iran",
    thirdPlaceAdvanceToKO_Pick_B: "Wales",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",
    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Australia",
    groupD4: "Tunisia",
    thirdPlaceAdvanceToKO_Pick_D: "Australia",
    groupE1: "Germany",
    groupE2: "Spain",
    groupE3: "Japan",
    groupE4: "Costa Rica",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",
    thirdPlaceAdvanceToKO_Pick_F: "Morocco",

    tiebreaker: 98,
    tourneyStage: 5,
  },
  //stan
  {
    email: "jpatcollins@gmail.com",
    // email: "stanley@gmail.com",
    emailNotifications: true,
    password: "stanley",
    name: "Stanley",
    paid: true,

    groupA1: "Netherlands",
    groupA2: "Ecuador",
    groupA3: "Senegal",
    groupA4: "Qatar",
    thirdPlaceAdvanceToKO_Pick_A: "Senegal",
    groupB1: "England",
    groupB2: "USA",
    groupB3: "Wales",
    groupB4: "Iran",
    thirdPlaceAdvanceToKO_Pick_B: "Wales",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",
    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Australia",
    groupD4: "Tunisia",
    thirdPlaceAdvanceToKO_Pick_D: "Australia",
    groupE1: "Germany",
    groupE2: "Spain",
    groupE3: "Japan",
    groupE4: "Costa Rica",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",
    thirdPlaceAdvanceToKO_Pick_F: "Morocco",

    tiebreaker: 98,
  },
  //frank
  {
    email: "frank@gmail.com",
    password: "frank",
    name: "frank",
  },
  //anthony
  {
    email: "anthony@gmail.com",
    password: "anthony",
    name: "Anthony",
    paid: true,

    groupA1: "Netherlands",
    groupA2: "Senegal",
    groupA3: "Ecuador",
    groupA4: "Qatar",
    groupB1: "England",
    groupB2: "USA",
    groupB3: "Wales",
    groupB4: "Iran",
    thirdPlaceAdvanceToKO_Pick_B: "Wales",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",
    thirdPlaceAdvanceToKO_Pick_C: "Poland",
    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Tunisia",
    groupD4: "Australia",
    thirdPlaceAdvanceToKO_Pick_D: "Tunisia",
    groupE1: "Spain",
    groupE2: "Germany",
    groupE3: "Japan",
    groupE4: "Costa Rica",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",
    thirdPlaceAdvanceToKO_Pick_F: "Morocco",

    tiebreaker: 155,
  },
  //kevin
  {
    email: "kevin@gmail.com",
    emailNotifications: true,
    password: "kevin",
    name: "Kevin",

    groupA1: "Ecuador",
    groupA2: "Senegal",
    groupA3: "Qatar",
    groupA4: "Netherlands",
    groupB1: "England",
    groupB2: "Iran",
    groupB3: "USA",
    groupB4: "Wales",
    groupC1: "Mexico",
    groupC2: "Poland",
    groupC3: "Saudi Arabia",
    groupC4: "Argentina",
    thirdPlaceAdvanceToKO_Pick_C: "Saudi Arabia",
    groupD1: "Tunisia",
    groupD2: "France",
    groupD3: "Denmark",
    groupD4: "Australia",
    thirdPlaceAdvanceToKO_Pick_D: "Denmark",
    groupE1: "Spain",
    groupE2: "Costa Rica",
    groupE3: "Germany",
    groupE4: "Japan",
    thirdPlaceAdvanceToKO_Pick_E: "Germany",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",
    thirdPlaceAdvanceToKO_Pick_F: "Morocco",

    tiebreaker: 159,
  },
  //pat
  {
    email: "pat@gmail.com",
    password: "pat",
    name: "Pat",
    paid: true,

    groupA1: "Netherlands",
    groupA2: "Senegal",
    groupA3: "Ecuador",
    groupA4: "Qatar",
    thirdPlaceAdvanceToKO_Pick_A: "Ecuador",
    groupB1: "England",
    groupB2: "USA",
    groupB3: "Wales",
    groupB4: "Iran",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",
    thirdPlaceAdvanceToKO_Pick_C: "Poland",
    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Australia",
    groupD4: "Tunisia",
    thirdPlaceAdvanceToKO_Pick_D: "Australia",
    groupE1: "Spain",
    groupE2: "Germany",
    groupE3: "Japan",
    groupE4: "Costa Rica",
    thirdPlaceAdvanceToKO_Pick_E: "Japan",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Canada",
    groupF4: "Morocco",

    tiebreaker: 163,
  },
  //sarah
  {
    email: "sarah@gmail.com",
    password: "sarah",
    name: "Sarah",
    paid: true,

    groupA1: "Ecuador",
    groupA2: "Qatar",
    groupA3: "Netherlands",
    groupA4: "Senegal",
    thirdPlaceAdvanceToKO_Pick_A: "Netherlands",
    groupB1: "Wales",
    groupB2: "USA",
    groupB3: "England",
    groupB4: "Iran",
    thirdPlaceAdvanceToKO_Pick_B: "England",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Saudi Arabia",
    groupC4: "Poland",
    groupD1: "Denmark",
    groupD2: "France",
    groupD3: "Tunisia",
    groupD4: "Australia",
    thirdPlaceAdvanceToKO_Pick_D: "Tunisia",
    groupE1: "Spain",
    groupE2: "Germany",
    groupE3: "Costa Rica",
    groupE4: "Japan",
    groupF1: "Croatia",
    groupF2: "Canada",
    groupF3: "Morocco",
    groupF4: "Belgium",
    thirdPlaceAdvanceToKO_Pick_F: "Belgium",

    tiebreaker: 42,
  },
];

const joeUser = [
  {
    email: "joe@gmail.com",
    password: "nugget",
    name: "Joe",
    admin: true,
    paid: true,

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "USA",
    groupB4: "Wales",

    groupC1: "Argentina",
    groupC2: "Poland",
    groupC3: "Mexico",
    groupC4: "Saudi Arabia",

    groupD1: "Denmark",
    groupD2: "Australia",
    groupD3: "France",
    groupD4: "Tunisia",

    groupE1: "Germany",
    groupE2: "Costa Rica",
    groupE3: "Japan",
    groupE4: "Spain",

    groupF1: "Morocco",
    groupF2: "Canada",
    groupF3: "Belgium",
    groupF4: "Croatia",

    tiebreaker: 152,
  },
];

const joeNoPicks = [
  {
    email: "joe@gmail.com",
    password: "nugget",
    name: "Joe",
    admin: true,
    paid: true,
  },
];

const updated = [
  {
    idd: 1,
    answer: "10/31/22 @ 10:36 am CT",
  },
];

const syncAndSeed = async () => {
  await db.sync({ force: true });
  // /////////////////////////////////////////////////////////////
  const [
    Qatar,
    Ecuador,
    Senegal,
    Netherlands,
    England,
    Iran,
    USA,
    Wales,
    Argentina,
    Saudi_Arabia,
    Mexico,
    Poland,
    France,
    Australia,
    Denmark,
    Tunisia,
    Spain,
    Costa_Rica,
    Germany,
    Japan,
    Belgium,
    Canada,
    Morocco,
    Croatia,
  ] = await Promise.all(
    teamInfo.map((obj) =>
      Team.create({
        name: obj.name,
        group: obj.group,
        flag: obj.flag,
        W: obj.W,
        D: obj.D,
        L: obj.L,
        GF: obj.GF,
        GA: obj.GA,
        groupFinishingPosition: obj.groupFinishingPosition,
      })
    )
  );
  const [updatedAnswer] = await Promise.all(
    updated.map((obj) =>
      Updated.create({
        idd: obj.idd,
        answer: obj.answer,
      })
    )
  );

  // const [Joe] = await Promise.all(
  //   joeNoPicks.map((obj) =>
  //     User.create({
  //       email: obj.email,
  //       password: obj.password,
  //       name: obj.name,
  //       admin: obj.admin,
  //       paid: obj.paid,
  //       groupA1: obj.groupA1,
  //       groupA2: obj.groupA2,
  //       groupA3: obj.groupA3,
  //       groupA4: obj.groupA4,
  //       groupB1: obj.groupB1,
  //       groupB2: obj.groupB2,
  //       groupB3: obj.groupB3,
  //       groupB4: obj.groupB4,
  //       groupC1: obj.groupC1,
  //       groupC2: obj.groupC2,
  //       groupC3: obj.groupC3,
  //       groupC4: obj.groupC4,
  //       groupD1: obj.groupD1,
  //       groupD2: obj.groupD2,
  //       groupD3: obj.groupD3,
  //       groupD4: obj.groupD4,
  //       groupE1: obj.groupE1,
  //       groupE2: obj.groupE2,
  //       groupE3: obj.groupE3,
  //       groupE4: obj.groupE4,
  //       groupF1: obj.groupF1,
  //       groupF2: obj.groupF2,
  //       groupF3: obj.groupF3,
  //       groupF4: obj.groupF4,
  //       groupG1: obj.groupG1,
  //       groupG2: obj.groupG2,
  //       groupG3: obj.groupG3,
  //       groupG4: obj.groupG4,
  //       groupH1: obj.groupH1,
  //       groupH2: obj.groupH2,
  //       groupH3: obj.groupH3,
  //       groupH4: obj.groupH4,
  //       tiebreaker: obj.tiebreaker,
  //     })
  //   )
  // );
  // //////////////////////////////////////////////////
  const [Joe, Stan, Frank, Anthony, Kevin, Pat, Sarah] = await Promise.all(
    users.map((obj) =>
      User.create({
        email: obj.email,
        emailNotifications: obj.emailNotifications,
        password: obj.password,
        name: obj.name,
        admin: obj.admin,
        paid: obj.paid,
        groupA1: obj.groupA1,
        groupA2: obj.groupA2,
        groupA3: obj.groupA3,
        groupA4: obj.groupA4,
        thirdPlaceAdvanceToKO_Pick_A: obj.thirdPlaceAdvanceToKO_Pick_A,
        groupB1: obj.groupB1,
        groupB2: obj.groupB2,
        groupB3: obj.groupB3,
        groupB4: obj.groupB4,
        thirdPlaceAdvanceToKO_Pick_B: obj.thirdPlaceAdvanceToKO_Pick_B,
        groupC1: obj.groupC1,
        groupC2: obj.groupC2,
        groupC3: obj.groupC3,
        groupC4: obj.groupC4,
        thirdPlaceAdvanceToKO_Pick_C: obj.thirdPlaceAdvanceToKO_Pick_C,
        groupD1: obj.groupD1,
        groupD2: obj.groupD2,
        groupD3: obj.groupD3,
        groupD4: obj.groupD4,
        thirdPlaceAdvanceToKO_Pick_D: obj.thirdPlaceAdvanceToKO_Pick_D,
        groupE1: obj.groupE1,
        groupE2: obj.groupE2,
        groupE3: obj.groupE3,
        groupE4: obj.groupE4,
        thirdPlaceAdvanceToKO_Pick_E: obj.thirdPlaceAdvanceToKO_Pick_E,
        groupF1: obj.groupF1,
        groupF2: obj.groupF2,
        groupF3: obj.groupF3,
        groupF4: obj.groupF4,
        thirdPlaceAdvanceToKO_Pick_F: obj.thirdPlaceAdvanceToKO_Pick_F,
        tiebreaker: obj.tiebreaker,
        tourneyStage: obj.tourneyStage,
      })
    )
  );
  // //////////////////////////////////////////////////
  Netherlands.groupFinishingPosition = 1;
  Ecuador.groupFinishingPosition = 2;
  Senegal.groupFinishingPosition = 3;
  Qatar.groupFinishingPosition = 4;
  //
  England.groupFinishingPosition = 1;
  USA.groupFinishingPosition = 2;
  Wales.groupFinishingPosition = 3;
  Iran.groupFinishingPosition = 4;

  Argentina.groupFinishingPosition = 1;
  Mexico.groupFinishingPosition = 2;
  Poland.groupFinishingPosition = 3;
  Saudi_Arabia.groupFinishingPosition = 4;

  France.groupFinishingPosition = 1;
  Denmark.groupFinishingPosition = 2;
  Australia.groupFinishingPosition = 3;
  Tunisia.groupFinishingPosition = 4;
  //
  Germany.groupFinishingPosition = 1;
  Spain.groupFinishingPosition = 2;
  Japan.groupFinishingPosition = 3;
  Costa_Rica.groupFinishingPosition = 4;
  //
  Belgium.groupFinishingPosition = 1;
  Croatia.groupFinishingPosition = 2;
  Morocco.groupFinishingPosition = 3;
  Canada.groupFinishingPosition = 4;

  Ecuador.groupIsFinished = true;
  Netherlands.groupIsFinished = true;
  Qatar.groupIsFinished = true;
  Senegal.groupIsFinished = true;
  England.groupIsFinished = true;
  Iran.groupIsFinished = true;
  USA.groupIsFinished = true;
  Wales.groupIsFinished = true;
  Argentina.groupIsFinished = true;
  Mexico.groupIsFinished = true;
  Poland.groupIsFinished = true;
  Saudi_Arabia.groupIsFinished = true;
  Denmark.groupIsFinished = true;
  France.groupIsFinished = true;
  Australia.groupIsFinished = true;
  Tunisia.groupIsFinished = true;
  Costa_Rica.groupIsFinished = true;
  Germany.groupIsFinished = true;
  Japan.groupIsFinished = true;
  Spain.groupIsFinished = true;
  Belgium.groupIsFinished = true;
  Canada.groupIsFinished = true;
  Croatia.groupIsFinished = true;
  Morocco.groupIsFinished = true;

  Senegal.thirdPlaceAndAdvancedToKO = true;
  Wales.thirdPlaceAndAdvancedToKO = true;
  Australia.thirdPlaceAndAdvancedToKO = true;
  Morocco.thirdPlaceAndAdvancedToKO = true;

  // //////////////////////////////////////////////////
  Joe.knockQ1 = England.name;
  Joe.knockQ2 = Mexico.name;
  Joe.knockQ3 = Belgium.name;
  Joe.knockQ4 = Spain.name;
  Joe.knockQ5 = Germany.name;
  Joe.knockQ6 = France.name;
  Joe.knockQ7 = Argentina.name;
  Joe.knockQ8 = USA.name;
  Stan.knockQ1 = England.name;
  Stan.knockQ2 = Mexico.name;
  Stan.knockQ3 = Belgium.name;
  Stan.knockQ4 = Spain.name;
  Stan.knockQ5 = Germany.name;
  Stan.knockQ6 = France.name;
  Stan.knockQ7 = Argentina.name;
  Stan.knockQ8 = USA.name;
  Anthony.knockQ1 = Australia.name;
  Anthony.knockQ2 = Mexico.name;
  Anthony.knockQ3 = Belgium.name;
  Anthony.knockQ4 = Spain.name;
  Anthony.knockQ5 = Germany.name;
  Anthony.knockQ6 = France.name;
  Anthony.knockQ7 = Argentina.name;
  Anthony.knockQ8 = Ecuador.name;
  Kevin.knockQ1 = England.name;
  Kevin.knockQ2 = Netherlands.name;
  Kevin.knockQ3 = Wales.name;
  Kevin.knockQ4 = Denmark.name;
  Kevin.knockQ5 = Germany.name;
  Kevin.knockQ6 = Croatia.name;
  Kevin.knockQ7 = Morocco.name;
  Kevin.knockQ8 = USA.name;
  Pat.knockQ1 = Australia.name;
  Pat.knockQ2 = Mexico.name;
  Pat.knockQ3 = Belgium.name;
  Pat.knockQ4 = Denmark.name;
  Pat.knockQ5 = Germany.name;
  Pat.knockQ6 = France.name;
  Pat.knockQ7 = Morocco.name;
  Pat.knockQ8 = Ecuador.name;
  // Sarah.knockQ1 = England.name;
  // Sarah.knockQ2 = Mexico.name;
  // Sarah.knockQ3 = Wales.name;
  // Sarah.knockQ4 = Spain.name;
  // Sarah.knockQ5 = Senegal.name;
  // Sarah.knockQ6 = France.name;
  // Sarah.knockQ7 = Argentina.name;
  // Sarah.knockQ8 = USA.name;
  //
  Joe.knockS1 = England.name;
  Joe.knockS2 = Spain.name;
  Joe.knockS3 = France.name;
  Joe.knockS4 = USA.name;
  Stan.knockS1 = England.name;
  Stan.knockS2 = Spain.name;
  Stan.knockS3 = France.name;
  Stan.knockS4 = USA.name;
  Anthony.knockS1 = Mexico.name;
  Anthony.knockS2 = Belgium.name;
  Anthony.knockS3 = France.name;
  Anthony.knockS4 = Argentina.name;
  Kevin.knockS1 = England.name;
  Kevin.knockS2 = Wales.name;
  Kevin.knockS3 = Croatia.name;
  Kevin.knockS4 = USA.name;
  Pat.knockS1 = Mexico.name;
  Pat.knockS2 = Belgium.name;
  Pat.knockS3 = France.name;
  Pat.knockS4 = Ecuador.name;
  // Sarah.knockS1 = Mexico.name;
  // Sarah.knockS2 = Spain.name;
  // Sarah.knockS3 = France.name;
  // Sarah.knockS4 = Argentina.name;
  // //
  Joe.knockF1 = England.name;
  Joe.knockF2 = France.name;
  Stan.knockF1 = England.name;
  Stan.knockF2 = France.name;
  Anthony.knockF1 = Mexico.name;
  Anthony.knockF2 = France.name;
  Kevin.knockF1 = England.name;
  Kevin.knockF2 = USA.name;
  Pat.knockF1 = Belgium.name;
  Pat.knockF2 = France.name;
  // Sarah.knockF1 = Spain.name;
  // Sarah.knockF2 = Argentina.name;
  // //
  Joe.knockChamp = France.name;
  Stan.knockChamp = France.name;
  Anthony.knockChamp = Mexico.name;
  Kevin.knockChamp = England.name;
  Pat.knockChamp = France.name;
  // Sarah.knockChamp = Spain.name;
  // //////////////////////////////////////////////////
  England.advanceToQ = true;
  Mexico.advanceToQ = true;
  Belgium.advanceToQ = true;
  Spain.advanceToQ = true;
  Germany.advanceToQ = true;
  France.advanceToQ = true;
  Argentina.advanceToQ = true;
  USA.advanceToQ = true;
  Australia.outOfTourney = true;
  Netherlands.outOfTourney = true;
  Wales.outOfTourney = true;
  Denmark.outOfTourney = true;
  Senegal.outOfTourney = true;
  Croatia.outOfTourney = true;
  Morocco.outOfTourney = true;
  Ecuador.outOfTourney = true;
  England.advanceToS = true;
  Spain.advanceToS = true;
  France.advanceToS = true;
  USA.advanceToS = true;
  Mexico.outOfTourney = true;
  Belgium.outOfTourney = true;
  Germany.outOfTourney = true;
  Argentina.outOfTourney = true;
  England.advanceToF = true;
  // France.advanceToF = true;
  Spain.outOfTourney = true;
  // USA.outOfTourney = true;
  // France.advanceToChamp = true;
  // England.outOfTourney = true;
  await Promise.all([
    Ecuador.save(),
    Netherlands.save(),
    Qatar.save(),
    Senegal.save(),
    Argentina.save(),
    Mexico.save(),
    Poland.save(),
    Saudi_Arabia.save(),
    Costa_Rica.save(),
    Germany.save(),
    Japan.save(),
    Spain.save(),
    England.save(),
    Iran.save(),
    USA.save(),
    Wales.save(),
    Denmark.save(),
    France.save(),
    Australia.save(),
    Tunisia.save(),
    Belgium.save(),
    Canada.save(),
    Croatia.save(),
    Morocco.save(),
    Joe.save(),
    Stan.save(),
    Anthony.save(),
    Kevin.save(),
    Pat.save(),
    Sarah.save(),
  ]);
};

module.exports = syncAndSeed;
