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

  { name: "Brasil", group: "G" },
  { name: "Serbia", group: "G" },
  { name: "Switz", group: "G" },
  { name: "Cameroon", group: "G" },

  { name: "Portugal", group: "H" },
  { name: "Ghana", group: "H" },
  { name: "Uruguay", group: "H" },
  { name: "S. Korea", group: "H" },
];

teamInfo = teamInfo.map((team) => ({
  ...team,
  flag: `https://www.sciencekids.co.nz/images/pictures/flags680/${
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
  }.jpg`,
}));

const users = [
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

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 152,
    tourneyStage: 4,
  },
  {
    email: "jpatcollins@gmail.com",
    password: "stanley",
    name: "Stanley",

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

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 152,
  },
  {
    email: "joseph.collins@toasttab.com",
    password: "e",
    name: "E",

    groupA1: "Netherlands",
    groupA2: "Ecuador",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "USA",
    groupB2: "Wales",
    groupB3: "England",
    groupB4: "Iran",

    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",

    groupD1: "Australia",
    groupD2: "Denmark",
    groupD3: "Tunisia",
    groupD4: "France",

    groupE1: "Costa Rica",
    groupE2: "Japan",
    groupE3: "Germany",
    groupE4: "Spain",

    groupF1: "Morocco",
    groupF2: "Canada",
    groupF3: "Belgium",
    groupF4: "Croatia",

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 130,
  },
  {
    email: "coach@gmail.com",
    password: "coach",
    name: "Coach Raiff",

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "Wales",
    groupB4: "USA",

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

    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",

    groupG1: "Switz",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Brasil",

    groupH1: "Uruguay",
    groupH2: "Portugal",
    groupH3: "Ghana",
    groupH4: "S. Korea",

    tiebreaker: 40,
  },
  {
    email: "kcer917@gmail.com",
    password: "kelly",
    name: "Kelly",

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "USA",
    groupB4: "Wales",

    groupC1: "Poland",
    groupC2: "Mexico",
    groupC3: "Saudi Arabia",
    groupC4: "Argentina",

    groupD1: "Australia",
    groupD2: "Tunisia",
    groupD3: "France",
    groupD4: "Denmark",

    groupE1: "Germany",
    groupE2: "Costa Rica",
    groupE3: "Japan",
    groupE4: "Spain",

    groupF1: "Belgium",
    groupF2: "Morocco",
    groupF3: "Canada",
    groupF4: "Croatia",

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 120,
  },
  {
    email: "frank@gmail.com",
    password: "frank",
    name: "Frank",
  },
  {
    email: "jatcollins@gmail.com",
    password: "stnley",
    name: "Stnley",

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

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 151,
  },
  {
    email: "jseph.collins@toasttab.com",
    password: "eu",
    name: "Eu",

    groupA1: "Netherlands",
    groupA2: "Ecuador",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "USA",
    groupB2: "Wales",
    groupB3: "England",
    groupB4: "Iran",

    groupC1: "Argentina",
    groupC2: "Mexico",
    groupC3: "Poland",
    groupC4: "Saudi Arabia",

    groupD1: "Australia",
    groupD2: "Denmark",
    groupD3: "Tunisia",
    groupD4: "France",

    groupE1: "Costa Rica",
    groupE2: "Japan",
    groupE3: "Germany",
    groupE4: "Spain",

    groupF1: "Morocco",
    groupF2: "Canada",
    groupF3: "Belgium",
    groupF4: "Croatia",

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 131,
  },
  {
    email: "cach@gmail.com",
    password: "cach",
    name: "Cach Raiff",

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "Wales",
    groupB4: "USA",

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

    groupF1: "Belgium",
    groupF2: "Croatia",
    groupF3: "Morocco",
    groupF4: "Canada",

    groupG1: "Switz",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Brasil",

    groupH1: "Uruguay",
    groupH2: "Portugal",
    groupH3: "Ghana",
    groupH4: "S. Korea",

    tiebreaker: 47,
  },
  {
    email: "kcr917@gmail.com",
    password: "klly",
    name: "Klly",

    groupA1: "Ecuador",
    groupA2: "Netherlands",
    groupA3: "Senegal",
    groupA4: "Qatar",

    groupB1: "England",
    groupB2: "Iran",
    groupB3: "USA",
    groupB4: "Wales",

    groupC1: "Poland",
    groupC2: "Mexico",
    groupC3: "Saudi Arabia",
    groupC4: "Argentina",

    groupD1: "Australia",
    groupD2: "Tunisia",
    groupD3: "France",
    groupD4: "Denmark",

    groupE1: "Germany",
    groupE2: "Costa Rica",
    groupE3: "Japan",
    groupE4: "Spain",

    groupF1: "Belgium",
    groupF2: "Morocco",
    groupF3: "Canada",
    groupF4: "Croatia",

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

    tiebreaker: 122,
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

    groupG1: "Brasil",
    groupG2: "Cameroon",
    groupG3: "Serbia",
    groupG4: "Switz",

    groupH1: "Uruguay",
    groupH2: "Ghana",
    groupH3: "Portugal",
    groupH4: "S. Korea",

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
    Brasil,
    Serbia,
    Switz,
    Cameroon,
    Portugal,
    Ghana,
    Uruguay,
    S_Korea,
  ] = await Promise.all(
    teamInfo.map((obj) =>
      Team.create({
        name: obj.name,
        group: obj.group,
        flag: obj.flag,
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
  //   joeUser.map((obj) =>
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
  const [Joe, Stan, E, Coach, Kelly, Frank, y, u, i, o] = await Promise.all(
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
        groupB1: obj.groupB1,
        groupB2: obj.groupB2,
        groupB3: obj.groupB3,
        groupB4: obj.groupB4,
        groupC1: obj.groupC1,
        groupC2: obj.groupC2,
        groupC3: obj.groupC3,
        groupC4: obj.groupC4,
        groupD1: obj.groupD1,
        groupD2: obj.groupD2,
        groupD3: obj.groupD3,
        groupD4: obj.groupD4,
        groupE1: obj.groupE1,
        groupE2: obj.groupE2,
        groupE3: obj.groupE3,
        groupE4: obj.groupE4,
        groupF1: obj.groupF1,
        groupF2: obj.groupF2,
        groupF3: obj.groupF3,
        groupF4: obj.groupF4,
        groupG1: obj.groupG1,
        groupG2: obj.groupG2,
        groupG3: obj.groupG3,
        groupG4: obj.groupG4,
        groupH1: obj.groupH1,
        groupH2: obj.groupH2,
        groupH3: obj.groupH3,
        groupH4: obj.groupH4,
        tiebreaker: obj.tiebreaker,
        tourneyStage: obj.tourneyStage,
      })
    )
  );
  // //////////////////////////////////////////////////
  Netherlands.groupFinishingPosition = 1;
  Senegal.groupFinishingPosition = 2;
  Ecuador.groupFinishingPosition = 3;
  Qatar.groupFinishingPosition = 4;
  //
  England.groupFinishingPosition = 1;
  USA.groupFinishingPosition = 2;
  Iran.groupFinishingPosition = 3;
  Wales.groupFinishingPosition = 4;
  //
  Argentina.groupFinishingPosition = 1;
  Poland.groupFinishingPosition = 2;
  Mexico.groupFinishingPosition = 3;
  Saudi_Arabia.groupFinishingPosition = 4;
  //
  France.groupFinishingPosition = 1;
  Australia.groupFinishingPosition = 2;
  Tunisia.groupFinishingPosition = 3;
  Denmark.groupFinishingPosition = 4;
  //
  Japan.groupFinishingPosition = 1;
  Spain.groupFinishingPosition = 2;
  Germany.groupFinishingPosition = 3;
  Costa_Rica.groupFinishingPosition = 4;
  //
  Morocco.groupFinishingPosition = 1;
  Croatia.groupFinishingPosition = 2;
  Belgium.groupFinishingPosition = 3;
  Canada.groupFinishingPosition = 4;
  //
  Brasil.groupFinishingPosition = 1;
  Switz.groupFinishingPosition = 2;
  Cameroon.groupFinishingPosition = 3;
  Serbia.groupFinishingPosition = 4;
  //
  Portugal.groupFinishingPosition = 1;
  S_Korea.groupFinishingPosition = 2;
  Uruguay.groupFinishingPosition = 3;
  Ghana.groupFinishingPosition = 4;
  //
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
  Brasil.groupIsFinished = true;
  Cameroon.groupIsFinished = true;
  Serbia.groupIsFinished = true;
  Switz.groupIsFinished = true;
  Ghana.groupIsFinished = true;
  S_Korea.groupIsFinished = true;
  Portugal.groupIsFinished = true;
  Uruguay.groupIsFinished = true;
  //////////////////////////////////////////////////
  Joe.knockQ1 = Netherlands.name;
  Joe.knockQ2 = Argentina.name;
  Joe.knockQ3 = Japan.name;
  Joe.knockQ4 = Brasil.name;
  Joe.knockQ5 = England.name;
  Joe.knockQ6 = France.name;
  Joe.knockQ7 = Spain.name;
  Joe.knockQ8 = Switz.name;
  Stan.knockQ1 = USA.name;
  Stan.knockQ2 = Argentina.name;
  Stan.knockQ3 = Croatia.name;
  Stan.knockQ4 = Brasil.name;
  Stan.knockQ5 = England.name;
  Stan.knockQ6 = France.name;
  Stan.knockQ7 = Morocco.name;
  Stan.knockQ8 = Portugal.name;
  E.knockQ1 = USA.name;
  E.knockQ2 = Argentina.name;
  E.knockQ3 = Japan.name;
  E.knockQ4 = Brasil.name;
  E.knockQ5 = England.name;
  E.knockQ6 = Poland.name;
  E.knockQ7 = Spain.name;
  E.knockQ8 = Switz.name;
  Coach.knockQ1 = USA.name;
  Coach.knockQ2 = Argentina.name;
  Coach.knockQ3 = Croatia.name;
  Coach.knockQ4 = Brasil.name;
  Coach.knockQ5 = England.name;
  Coach.knockQ6 = France.name;
  Coach.knockQ7 = Morocco.name;
  Coach.knockQ8 = Portugal.name;
  Kelly.knockQ1 = USA.name;
  Kelly.knockQ2 = Argentina.name;
  Kelly.knockQ3 = Australia.name;
  Kelly.knockQ4 = Brasil.name;
  Kelly.knockQ5 = England.name;
  Kelly.knockQ6 = France.name;
  Kelly.knockQ7 = Spain.name;
  Kelly.knockQ8 = Switz.name;
  //
  Joe.knockS1 = Argentina.name;
  Joe.knockS2 = Brasil.name;
  Joe.knockS3 = France.name;
  Joe.knockS4 = Spain.name;
  Stan.knockS1 = Argentina.name;
  Stan.knockS2 = Brasil.name;
  Stan.knockS3 = England.name;
  Stan.knockS4 = Spain.name;
  E.knockS1 = USA.name;
  E.knockS2 = Brasil.name;
  E.knockS3 = England.name;
  E.knockS4 = Spain.name;
  Coach.knockS1 = USA.name;
  Coach.knockS2 = Brasil.name;
  Coach.knockS3 = England.name;
  Coach.knockS4 = Morocco.name;
  Kelly.knockS1 = USA.name;
  Kelly.knockS2 = Brasil.name;
  Kelly.knockS3 = England.name;
  Kelly.knockS4 = Spain.name;
  //
  Joe.knockF1 = Brasil.name;
  Joe.knockF2 = France.name;
  Stan.knockF1 = Argentina.name;
  Stan.knockF2 = England.name;
  E.knockF1 = USA.name;
  E.knockF2 = England.name;
  Coach.knockF1 = Brasil.name;
  Coach.knockF2 = Morocco.name;
  Kelly.knockF1 = USA.name;
  Kelly.knockF2 = Spain.name;
  //
  Joe.knockChamp = France.name;
  Stan.knockChamp = Argentina.name;
  E.knockChamp = USA.name;
  Coach.knockChamp = Brasil.name;
  Kelly.knockChamp = Spain.name;
  // // //////////////////////////////////////////////////
  Netherlands.advanceToQ = true;
  Argentina.advanceToQ = true;
  Croatia.advanceToQ = true;
  Brasil.advanceToQ = true;
  England.advanceToQ = true;
  France.advanceToQ = true;
  Morocco.advanceToQ = true;
  Portugal.advanceToQ = true;
  USA.outOfTourney = true;
  Australia.outOfTourney = true;
  Japan.outOfTourney = true;
  S_Korea.outOfTourney = true;
  Senegal.outOfTourney = true;
  Poland.outOfTourney = true;
  Spain.outOfTourney = true;
  Switz.outOfTourney = true;
  Argentina.advanceToS = true;
  Croatia.advanceToS = true;
  France.advanceToS = true;
  Morocco.advanceToS = true;
  Netherlands.outOfTourney = true;
  Brasil.outOfTourney = true;
  England.outOfTourney = true;
  Portugal.outOfTourney = true;
  Argentina.advanceToF = true;
  France.advanceToF = true;
  Croatia.outOfTourney = true;
  Morocco.outOfTourney = true;
  Argentina.advanceToChamp = true;
  France.outOfTourney = true;
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
    Brasil.save(),
    Cameroon.save(),
    Serbia.save(),
    Switz.save(),
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
    Ghana.save(),
    S_Korea.save(),
    Portugal.save(),
    Uruguay.save(),
    Joe.save(),
    Stan.save(),
    E.save(),
    Coach.save(),
    Kelly.save(),
  ]);
};

module.exports = syncAndSeed;
