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
    password: "nugget",
    name: "Joe",
    admin: true,
    paid: true,

    groupA1: "Netherlands",
    groupA2: "Ecuador",
    groupA3: "Senegal",
    groupA4: "Qatar",
    thirdPlaceAdvanceToKO_A: "Senegal",
    groupB1: "England",
    groupB2: "USA",
    groupB3: "Wales",
    groupB4: "Iran",
    thirdPlaceAdvanceToKO_B: "Wales",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",
    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Australia",
    groupD4: "Tunisia",
    thirdPlaceAdvanceToKO_D: "Australia",
    groupE1: "Germany",
    groupE2: "Spain",
    groupE3: "Japan",
    groupE4: "Costa Rica",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",
    thirdPlaceAdvanceToKO_F: "Morocco",

    tiebreaker: 165,
    tourneyStage: 1,
  },
  //stan
  {
    email: "jpatcollins@gmail.com",
    password: "stanley",
    name: "stanley",
    paid: true,

    groupA1: "Netherlands",
    groupA2: "Ecuador",
    groupA3: "Senegal",
    groupA4: "Qatar",
    thirdPlaceAdvanceToKO_A: "Senegal",
    groupB1: "England",
    groupB2: "USA",
    groupB3: "Wales",
    groupB4: "Iran",
    thirdPlaceAdvanceToKO_B: "Wales",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",
    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Australia",
    groupD4: "Tunisia",
    thirdPlaceAdvanceToKO_D: "Australia",
    groupE1: "Germany",
    groupE2: "Spain",
    groupE3: "Japan",
    groupE4: "Costa Rica",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",
    thirdPlaceAdvanceToKO_F: "Morocco",

    tiebreaker: 165,
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
    name: "Anthony Cole",
    paid: true,

    groupA1: "Netherlands",
    groupA2: "Senegal",
    groupA3: "Ecuador",
    groupA4: "Qatar",
    groupB1: "England",
    groupB2: "USA",
    groupB3: "Wales",
    groupB4: "Iran",
    thirdPlaceAdvanceToKO_B: "Wales",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",
    thirdPlaceAdvanceToKO_C: "Poland",
    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Tunisia",
    groupD4: "Australia",
    thirdPlaceAdvanceToKO_D: "Tunisia",
    groupE1: "Spain",
    groupE2: "Germany",
    groupE3: "Japan",
    groupE4: "Costa Rica",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",
    thirdPlaceAdvanceToKO_F: "Morocco",

    // knockQ1: "USA",
    // knockQ2: "Argentina",
    // knockQ3: "Croatia",
    // knockQ4: "Brasil",
    // knockQ5: "England",
    // knockQ6: "France",
    // knockQ7: "Spain",
    // knockQ8: "Portugal",

    // knockS1: "Argentina",
    // knockS2: "Brasil",
    // knockS3: "England",
    // knockS4: "Spain",

    // knockF1: "Brasil",
    // knockF2: "England",

    // knockChamp: "England",

    tiebreaker: 155,
  },
  //kevin
  {
    email: "kevin@gmail.com",
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
    thirdPlaceAdvanceToKO_C: "Saudi Arabia",
    groupD1: "Tunisia",
    groupD2: "France",
    groupD3: "Denmark",
    groupD4: "Australia",
    thirdPlaceAdvanceToKO_D: "Denmark",
    groupE1: "Spain",
    groupE2: "Costa Rica",
    groupE3: "Germany",
    groupE4: "Japan",
    thirdPlaceAdvanceToKO_E: "Germany",
    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",
    thirdPlaceAdvanceToKO_F: "Morocco",

    tiebreaker: 159,
  },
  //pat
  {
    email: "pat@gmail.com",
    password: "pat",
    name: "Pat MacQueen",
    paid: true,

    groupA1: "Netherlands",
    groupA2: "Senegal",
    groupA3: "Ecuador",
    groupA4: "Qatar",
    thirdPlaceAdvanceToKO_A: "Ecuador",
    groupB1: "England",
    groupB2: "USA",
    groupB3: "Wales",
    groupB4: "Iran",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",
    thirdPlaceAdvanceToKO_C: "Poland",
    groupD1: "France",
    groupD2: "Denmark",
    groupD3: "Australia",
    groupD4: "Tunisia",
    thirdPlaceAdvanceToKO_D: "Australia",
    groupE1: "Spain",
    groupE2: "Germany",
    groupE3: "Japan",
    groupE4: "Costa Rica",
    thirdPlaceAdvanceToKO_E: "Japan",
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
    thirdPlaceAdvanceToKO_A: "Netherlands",
    groupB1: "Wales",
    groupB2: "USA",
    groupB3: "England",
    groupB4: "Iran",
    thirdPlaceAdvanceToKO_B: "England",
    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Saudi Arabia",
    groupC4: "Poland",
    groupD1: "Denmark",
    groupD2: "France",
    groupD3: "Tunisia",
    groupD4: "Australia",
    thirdPlaceAdvanceToKO_D: "Tunisia",
    groupE1: "Spain",
    groupE2: "Germany",
    groupE3: "Costa Rica",
    groupE4: "Japan",
    groupF1: "Croatia",
    groupF2: "Canada",
    groupF3: "Morocco",
    groupF4: "Belgium",
    thirdPlaceAdvanceToKO_F: "Belgium",

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
    answer: "Last Updated: 10/31/22 at 10:36 am",
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
        password: obj.password,
        name: obj.name,
        admin: obj.admin,
        paid: obj.paid,
        groupA1: obj.groupA1,
        groupA2: obj.groupA2,
        groupA3: obj.groupA3,
        groupA4: obj.groupA4,
        thirdPlaceAdvanceToKO_A: obj.thirdPlaceAdvanceToKO_A,
        groupB1: obj.groupB1,
        groupB2: obj.groupB2,
        groupB3: obj.groupB3,
        groupB4: obj.groupB4,
        thirdPlaceAdvanceToKO_B: obj.thirdPlaceAdvanceToKO_B,
        groupC1: obj.groupC1,
        groupC2: obj.groupC2,
        groupC3: obj.groupC3,
        groupC4: obj.groupC4,
        thirdPlaceAdvanceToKO_C: obj.thirdPlaceAdvanceToKO_C,
        groupD1: obj.groupD1,
        groupD2: obj.groupD2,
        groupD3: obj.groupD3,
        groupD4: obj.groupD4,
        thirdPlaceAdvanceToKO_D: obj.thirdPlaceAdvanceToKO_D,
        groupE1: obj.groupE1,
        groupE2: obj.groupE2,
        groupE3: obj.groupE3,
        groupE4: obj.groupE4,
        thirdPlaceAdvanceToKO_E: obj.thirdPlaceAdvanceToKO_E,
        groupF1: obj.groupF1,
        groupF2: obj.groupF2,
        groupF3: obj.groupF3,
        groupF4: obj.groupF4,
        thirdPlaceAdvanceToKO_F: obj.thirdPlaceAdvanceToKO_F,
        tiebreaker: obj.tiebreaker,
        tourneyStage: obj.tourneyStage,
      })
    )
  );
  // //////////////////////////////////////////////////
  // Netherlands.groupFinishingPosition = 1;
  // Senegal.groupFinishingPosition = 2;
  // Ecuador.groupFinishingPosition = 3;
  // Qatar.groupFinishingPosition = 4;
  // //
  // England.groupFinishingPosition = 1;
  // USA.groupFinishingPosition = 2;
  // Iran.groupFinishingPosition = 3;
  // Wales.groupFinishingPosition = 4;

  // Argentina.groupFinishingPosition = 1;
  // Poland.groupFinishingPosition = 2;
  // Mexico.groupFinishingPosition = 3;
  // Saudi_Arabia.groupFinishingPosition = 4;

  // France.groupFinishingPosition = 1;
  // Australia.groupFinishingPosition = 2;
  // Tunisia.groupFinishingPosition = 3;
  // Denmark.groupFinishingPosition = 4;
  // //
  // Japan.groupFinishingPosition = 1;
  // Spain.groupFinishingPosition = 2;
  // Germany.groupFinishingPosition = 3;
  // Costa_Rica.groupFinishingPosition = 4;
  // //
  // Morocco.groupFinishingPosition = 1;
  // Croatia.groupFinishingPosition = 2;
  // Belgium.groupFinishingPosition = 3;
  // Canada.groupFinishingPosition = 4;

  // Ecuador.groupIsFinished = true;
  // Netherlands.groupIsFinished = true;
  // Qatar.groupIsFinished = true;
  // Senegal.groupIsFinished = true;
  // England.groupIsFinished = true;
  // Iran.groupIsFinished = true;
  // USA.groupIsFinished = true;
  // Wales.groupIsFinished = true;
  // Argentina.groupIsFinished = true;
  // Mexico.groupIsFinished = true;
  // Poland.groupIsFinished = true;
  // Saudi_Arabia.groupIsFinished = true;
  // Denmark.groupIsFinished = true;
  // France.groupIsFinished = true;
  // Australia.groupIsFinished = true;
  // Tunisia.groupIsFinished = true;
  // Costa_Rica.groupIsFinished = true;
  // Germany.groupIsFinished = true;
  // Japan.groupIsFinished = true;
  // Spain.groupIsFinished = true;
  // Belgium.groupIsFinished = true;
  // Canada.groupIsFinished = true;
  // Croatia.groupIsFinished = true;
  // Morocco.groupIsFinished = true;

  // //////////////////////////////////////////////////
  // Joe.knockQ1 = Netherlands.name;
  // Joe.knockQ2 = Argentina.name;
  // Joe.knockQ3 = Japan.name;
  // Joe.knockQ4 = Brasil.name;
  // Joe.knockQ5 = England.name;
  // Joe.knockQ6 = France.name;
  // Joe.knockQ7 = Spain.name;
  // Joe.knockQ8 = Switz.name;
  // Stan.knockQ1 = Netherlands.name;
  // Stan.knockQ2 = Argentina.name;
  // Stan.knockQ3 = Japan.name;
  // Stan.knockQ4 = Brasil.name;
  // Stan.knockQ5 = England.name;
  // Stan.knockQ6 = France.name;
  // Stan.knockQ7 = Spain.name;
  // Stan.knockQ8 = Switz.name;
  // Anthony.knockQ1 = USA.name;
  // Anthony.knockQ2 = Argentina.name;
  // Anthony.knockQ3 = Croatia.name;
  // Anthony.knockQ4 = Brasil.name;
  // Anthony.knockQ5 = England.name;
  // Anthony.knockQ6 = France.name;
  // Anthony.knockQ7 = Spain.name;
  // Anthony.knockQ8 = Portugal.name;
  // Kevin.knockQ1 = USA.name;
  // Kevin.knockQ2 = Argentina.name;
  // Kevin.knockQ3 = Japan.name;
  // Kevin.knockQ4 = Brasil.name;
  // Kevin.knockQ5 = England.name;
  // Kevin.knockQ6 = Poland.name;
  // Kevin.knockQ7 = Morocco.name;
  // Kevin.knockQ8 = Switz.name;
  // Pat.knockQ1 = USA.name;
  // Pat.knockQ2 = Argentina.name;
  // Pat.knockQ3 = Croatia.name;
  // Pat.knockQ4 = Brasil.name;
  // Pat.knockQ5 = England.name;
  // Pat.knockQ6 = France.name;
  // Pat.knockQ7 = Spain.name;
  // Pat.knockQ8 = Portugal.name;
  // Sarah.knockQ1 = USA.name;
  // Sarah.knockQ2 = Argentina.name;
  // Sarah.knockQ3 = Japan.name;
  // Sarah.knockQ4 = Brasil.name;
  // Sarah.knockQ5 = England.name;
  // Sarah.knockQ6 = Poland.name;
  // Sarah.knockQ7 = Spain.name;
  // Sarah.knockQ8 = Switz.name;
  // //
  // Joe.knockS1 = Argentina.name;
  // Joe.knockS2 = Brasil.name;
  // Joe.knockS3 = France.name;
  // Joe.knockS4 = Spain.name;
  // Stan.knockS1 = Argentina.name;
  // Stan.knockS2 = Brasil.name;
  // Stan.knockS3 = France.name;
  // Stan.knockS4 = Spain.name;
  // Anthony.knockS1 = Argentina.name;
  // Anthony.knockS2 = Brasil.name;
  // Anthony.knockS3 = England.name;
  // Anthony.knockS4 = Spain.name;
  // Kevin.knockS1 = Argentina.name;
  // Kevin.knockS2 = Brasil.name;
  // Kevin.knockS3 = Poland.name;
  // Kevin.knockS4 = Morocco.name;
  // Pat.knockS1 = Argentina.name;
  // Pat.knockS2 = Brasil.name;
  // Pat.knockS3 = England.name;
  // Pat.knockS4 = Spain.name;
  // Sarah.knockS1 = Argentina.name;
  // Sarah.knockS2 = Japan.name;
  // Sarah.knockS3 = England.name;
  // Sarah.knockS4 = Spain.name;

  // Joe.knockF1 = Brasil.name;
  // Joe.knockF2 = France.name;
  // Stan.knockF1 = Brasil.name;
  // Stan.knockF2 = France.name;
  // Anthony.knockF1 = Brasil.name;
  // Anthony.knockF2 = England.name;
  // Kevin.knockF1 = Brasil.name;
  // Kevin.knockF2 = Morocco.name;
  // Pat.knockF1 = Brasil.name;
  // Pat.knockF2 = Spain.name;
  // Sarah.knockF1 = Japan.name;
  // Sarah.knockF2 = England.name;
  // //
  // Joe.knockChamp = France.name;
  // Stan.knockChamp = France.name;
  // Anthony.knockChamp = England.name;
  // Kevin.knockChamp = Brasil.name;
  // Pat.knockChamp = Brasil.name;
  // Sarah.knockChamp = Japan.name;
  //////////////////////////////////////////////////
  // Netherlands.advanceToQ = true;
  // Argentina.advanceToQ = true;
  // Croatia.advanceToQ = true;
  // Brasil.advanceToQ = true;
  // England.advanceToQ = true;
  // France.advanceToQ = true;
  // Morocco.advanceToQ = true;
  // Portugal.advanceToQ = true;
  // USA.outOfTourney = true;
  // Australia.outOfTourney = true;
  // Japan.outOfTourney = true;
  // S_Korea.outOfTourney = true;
  // Senegal.outOfTourney = true;
  // Poland.outOfTourney = true;
  // Spain.outOfTourney = true;
  // Switz.outOfTourney = true;
  // Argentina.advanceToS = true;
  // Croatia.advanceToS = true;
  // France.advanceToS = true;
  // Morocco.advanceToS = true;
  // Netherlands.outOfTourney = true;
  // Brasil.outOfTourney = true;
  // England.outOfTourney = true;
  // Portugal.outOfTourney = true;
  // Argentina.advanceToF = true;
  // France.advanceToF = true;
  // Croatia.outOfTourney = true;
  // Morocco.outOfTourney = true;
  // Argentina.advanceToChamp = true;
  // France.outOfTourney = true;
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
