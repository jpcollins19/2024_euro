const { expect } = require("chai");
const {
  singleGroupCalc,
  totalScoreCalc,
  knockoutRoundCalc,
  knockoutPartTeamPush,
  knockoutPartClassPush,
  currentScoresObj,
  teamRankSort,
  urlWord,
  addFakeUser,
} = require("./src/store/funcs");

describe("Cals everthing correctly", () => {
  let teams, users;
  beforeEach(() => {
    teams = [
      {
        knockoutPosition: "C1",
        id: "970e6e09-0208-4ab6-9aa6-557d54f4b841",
        name: "Argentina",
        group: "C",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: true,
        advanceToChamp: true,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.138Z",
        updatedAt: "2022-06-16T18:57:23.369Z",
      },
      {
        knockoutPosition: "A2",
        id: "02031838-fa5b-4dd7-8f5a-086c4c0f6103",
        name: "Netherlands",
        group: "A",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.137Z",
        updatedAt: "2022-06-16T18:57:23.369Z",
      },
      {
        knockoutPosition: "C3",
        id: "7492d408-b204-4fe4-9ec7-f79554d8ca60",
        name: "Poland",
        group: "C",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.138Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "C2",
        id: "8a2d46a5-1758-4c29-beda-770cf0eedd40",
        name: "Mexico",
        group: "C",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.138Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "A3",
        id: "208163e3-edfb-49ae-8b49-c4de252e8a10",
        name: "Qatar",
        group: "A",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.136Z",
        updatedAt: "2022-06-16T18:57:23.369Z",
      },
      {
        knockoutPosition: "A4",
        id: "a0ed7b1b-5712-41a6-801a-30743373802e",
        name: "Senegal",
        group: "A",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.137Z",
        updatedAt: "2022-06-16T18:57:23.369Z",
      },
      {
        knockoutPosition: "C4",
        id: "66163e20-2d45-4875-80eb-cd93f1f5031c",
        name: "Saudi Arabia",
        group: "C",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.138Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "A1",
        id: "5ef47394-0a78-4a3e-9018-b74dcd3f3d11",
        name: "Ecuador",
        group: "A",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.137Z",
        updatedAt: "2022-06-16T18:57:23.369Z",
      },
      {
        knockoutPosition: "E2",
        id: "3d1a738f-563e-4c9e-aca9-8f90b1ce8a8e",
        name: "Costa Rica",
        group: "E",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.139Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "E1",
        id: "d2b2af5a-a8f3-4869-a56c-775a6a1bd85f",
        name: "Germany",
        group: "E",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.139Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "E3",
        id: "05cf6827-ac42-4fd8-b2de-d5b72fa4eb99",
        name: "Japan",
        group: "E",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.139Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "G1",
        id: "bb3b4206-3cfe-45b8-b643-1b3d006f5878",
        name: "Brasil",
        group: "G",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.140Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "E4",
        id: "69392b89-675c-45ab-88fd-08ec229f0bff",
        name: "Spain",
        group: "E",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.139Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "G3",
        id: "d0393c09-e686-4a99-96eb-b23188f28628",
        name: "Serbia",
        group: "G",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.140Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "G2",
        id: "8f83d293-16ea-44c0-9210-80b8fe0ee7b8",
        name: "Cameroon",
        group: "G",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.141Z",
        updatedAt: "2022-06-16T18:57:23.376Z",
      },
      {
        knockoutPosition: "B1",
        id: "998701c2-2836-4091-984e-2ac783ab8c1b",
        name: "England",
        group: "B",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.137Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "G4",
        id: "45b74074-9384-4f3d-acc4-8a306e6b7fe4",
        name: "Switz",
        group: "G",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.140Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "B2",
        id: "35a3ccaf-969f-44a4-a201-81ac32c2bd6d",
        name: "Iran",
        group: "B",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.138Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "B3",
        id: "67c5211b-243b-406f-8eab-a4eabcff91f6",
        name: "USA",
        group: "B",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.138Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "B4",
        id: "df2331ef-d943-45ec-a5dc-473f3a23be34",
        name: "Wales",
        group: "B",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.138Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "D3",
        id: "bad8470b-f665-4471-9c24-6ba58a9e98a6",
        name: "France",
        group: "D",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.139Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "D2",
        id: "25010b27-6b60-4110-a1ee-60280c4e936e",
        name: "Denmark",
        group: "D",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.139Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "D4",
        id: "43f457f0-c092-4303-8e13-e4bd248e5bbd",
        name: "Tunisia",
        group: "D",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.139Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "D1",
        id: "977db6eb-d555-4b91-a712-7eb835992ffa",
        name: "Australia",
        group: "D",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: true,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.139Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "F1",
        id: "16d0d6ca-987b-4b3e-ba95-a79d162f5038",
        name: "Belgium",
        group: "F",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: true,
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.140Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "F2",
        id: "ad1a19f4-90b2-4e64-8ada-475facde73e7",
        name: "Canada",
        group: "F",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: true,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.140Z",
        updatedAt: "2022-06-16T18:57:23.377Z",
      },
      {
        knockoutPosition: "F4",
        id: "afbec184-72bd-4f25-8163-4e35be2eed69",
        name: "Morocco",
        group: "F",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.140Z",
        updatedAt: "2022-06-16T18:57:23.378Z",
      },
      {
        knockoutPosition: "F3",
        id: "d105bbca-d8bc-4de4-ad35-01bf50ad9e29",
        name: "Croatia",
        group: "F",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.140Z",
        updatedAt: "2022-06-16T18:57:23.378Z",
      },
      {
        knockoutPosition: "H2",
        id: "73c5edc4-73bc-4c4f-8303-9add2534e27c",
        name: "S. Korea",
        group: "H",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 2,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.145Z",
        updatedAt: "2022-06-16T18:57:23.379Z",
      },
      {
        knockoutPosition: "H1",
        id: "80c92933-5dee-48dc-9c97-c2eb670cfc7b",
        name: "Ghana",
        group: "H",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 1,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-06-16T18:57:23.143Z",
        updatedAt: "2022-06-16T18:57:23.379Z",
      },
      {
        knockoutPosition: "H3",
        id: "5b042c5f-b372-4910-bc61-0c629710451f",
        name: "Portugal",
        group: "H",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 3,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.142Z",
        updatedAt: "2022-06-16T18:57:23.379Z",
      },
      {
        knockoutPosition: "H4",
        id: "c4276b70-2b1e-499f-93a9-d6bbfac35159",
        name: "Uruguay",
        group: "H",
        MP: 0,
        W: 0,
        D: 0,
        L: 0,
        GF: 0,
        GA: 0,
        GD: 0,
        pts: 0,
        groupIsFinished: true,
        groupFinishingPosition: 4,
        advanceToQ: false,
        advanceToS: false,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: false,
        createdAt: "2022-06-16T18:57:23.145Z",
        updatedAt: "2022-06-16T18:57:23.379Z",
      },
    ];
    users = [
      {
        id: "a36c82ab-120f-4dfa-96c5-e1f81584a799",
        email: "joe@gmail.com",
        password:
          "$2b$05$yJuo7mO3wcokSA/KembPEOaTKjw2.oAixXQfzmTbiwwBDS6oGAloq",
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
        knockQ1: "Ecuador",
        knockQ2: "Argentina",
        knockQ3: "Canada",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Australia",
        knockQ7: "Belgium",
        knockQ8: "Cameroon",
        knockS1: "Argentina",
        knockS2: "Brasil",
        knockS3: "Australia",
        knockS4: "Belgium",
        knockF1: "Argentina",
        knockF2: "Australia",
        knockChamp: "Argentina",
        tiebreaker: 152,
        tourneyStage: 1,
        createdAt: "2022-06-16T19:12:30.134Z",
        updatedAt: "2022-06-16T19:12:30.205Z",
      },
      {
        id: "7c55faae-f532-4228-b440-99f70f568206",
        email: "stanley@gmail.com",
        password:
          "$2b$05$AITAKiyvtLD4HEmuPgp6U.VptrQ8FLOrAg.PNjXdRDoTOz.5OSwuS",
        name: "Stanley",
        admin: true,
        paid: false,
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
        knockQ1: "Ecuador",
        knockQ2: "Argentina",
        knockQ3: "Canada",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Australia",
        knockQ7: "Belgium",
        knockQ8: "Cameroon",
        knockS1: "Argentina",
        knockS2: "Brasil",
        knockS3: "Australia",
        knockS4: "Belgium",
        knockF1: "Argentina",
        knockF2: "Australia",
        knockChamp: "Argentina",
        tiebreaker: 140,
        tourneyStage: 1,
        createdAt: "2022-06-16T19:12:30.135Z",
        updatedAt: "2022-06-16T19:12:30.205Z",
      },
      {
        id: "0b96f4cb-bb7e-42d9-91e1-12507c331d0d",
        email: "e@gmail.com",
        password:
          "$2b$05$BINafvPLPtmlBs6YzQYrIu7yx9s8UiF3jOBQv1tJuajKWIsmML6WG",
        name: "E",
        admin: false,
        paid: false,
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
        knockQ1: "Iran",
        knockQ2: "Argentina",
        knockQ3: "Canada",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Australia",
        knockQ7: "Costa Rica",
        knockQ8: "Cameroon",
        knockS1: "Iran",
        knockS2: "Canada",
        knockS3: "England",
        knockS4: "Costa Rica",
        knockF1: "Canada",
        knockF2: "Costa Rica",
        knockChamp: "Canada",
        tiebreaker: 130,
        tourneyStage: 1,
        createdAt: "2022-06-16T19:12:30.135Z",
        updatedAt: "2022-06-16T19:12:30.205Z",
      },
      {
        id: "ae12b4d1-3d99-4d32-8def-a240b971136d",
        email: "coach@gmail.com",
        password:
          "$2b$05$ibjWPe6JuhbgJd0J26yrL.dtCpyOFZMrN1e4N0BoE7qmAsMTZ4hD.",
        name: "Coach Raiff",
        admin: false,
        paid: false,
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
        knockQ1: "Ecuador",
        knockQ2: "Argentina",
        knockQ3: "Germany",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Mexico",
        knockQ7: "Belgium",
        knockQ8: "Ghana",
        knockS1: "Ecuador",
        knockS2: "Brasil",
        knockS3: "Mexico",
        knockS4: "Belgium",
        knockF1: "Brasil",
        knockF2: "Mexico",
        knockChamp: "Brasil",
        tiebreaker: 40,
        tourneyStage: 1,
        createdAt: "2022-06-16T19:12:30.135Z",
        updatedAt: "2022-06-16T19:12:30.206Z",
      },
      {
        id: "be582866-559b-4fc0-a0eb-a3b01b729839",
        email: "kelly@gmail.com",
        password:
          "$2b$05$lO3VtZUAe3tUKcKM6WFosebAcJ3JTB1NBO7OYi8cYtvZsgssrAj86",
        name: "Kelly",
        admin: false,
        paid: false,
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
        knockQ1: "Iran",
        knockQ2: "Argentina",
        knockQ3: "Germany",
        knockQ4: "Brasil",
        knockQ5: "England",
        knockQ6: "Australia",
        knockQ7: "Belgium",
        knockQ8: "Ghana",
        knockS1: "Iran",
        knockS2: "Germany",
        knockS3: "Australia",
        knockS4: "Ghana",
        knockF1: "Germany",
        knockF2: "Ghana",
        knockChamp: "Germany",
        tiebreaker: 120,
        tourneyStage: 1,
        createdAt: "2022-06-16T19:12:30.136Z",
        updatedAt: "2022-06-16T19:12:30.206Z",
      },
    ];
  });

  describe("Calcs leaderboard", () => {
    let names, scores, tieExists, answer;

    describe("no ties", () => {
      it("calculates no ties correctly", () => {
        users = users.filter((part) => part.name !== "Stanley");

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        expect(names["1"]).to.equal("Joe");
        expect(names["2"]).to.equal("Kelly");
        expect(names["3"]).to.equal("Coach Raiff");
        expect(names["4"]).to.equal("E");
        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(51);
        expect(scores["3"]).to.equal(49);
        expect(scores["4"]).to.equal(39);
      });
    });

    describe("with a tie", () => {
      let frank, sally, jill, mark, tieNames;

      it("scenario #1 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 98
              : user.name === "Stanley"
              ? 102
              : user.tiebreaker;

          return user;
        });

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Joe");
        expect(names["2"]).to.equal("Stanley");
        expect(names["3"]).to.equal("Kelly");
        expect(names["4"]).to.equal("Coach Raiff");
        expect(names["5"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(49);
        expect(scores["5"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
      });

      it("scenario #1 - 3+ users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe" || user.name === "Stanley"
              ? 102
              : user.tiebreaker;

          if (user.name === "Stanley") {
            frank = addFakeUser(user, "Frank");
            sally = addFakeUser(user, "Sally");
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        sally.tiebreaker = 98;

        users = [...users, frank, sally, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Sally");
        expect(names["2"]).to.equal("Joe");
        expect(names["3"]).to.equal("Stanley");
        expect(names["4"]).to.equal("Frank");
        expect(names["5"]).to.equal("Jill");
        expect(names["6"]).to.equal("Kelly");
        expect(names["7"]).to.equal("Coach Raiff");
        expect(names["8"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(92);
        expect(scores["5"]).to.equal(92);
        expect(scores["6"]).to.equal(51);
        expect(scores["7"]).to.equal(49);
        expect(scores["8"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(true);
        expect(tieExists["3"]).to.equal(true);
        expect(tieExists["4"]).to.equal(true);
        expect(tieExists["5"]).to.equal(true);
        expect(tieExists["6"]).to.equal(false);
        expect(tieExists["7"]).to.equal(false);
        expect(tieExists["8"]).to.equal(false);
      });

      it("scenario #2 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 102
              : user.name === "Stanley"
              ? 98
              : user.tiebreaker;

          return user;
        });

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Stanley");
        expect(names["2"]).to.equal("Joe");
        expect(names["3"]).to.equal("Kelly");
        expect(names["4"]).to.equal("Coach Raiff");
        expect(names["5"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(49);
        expect(scores["5"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
      });

      it("scenario #2 - 3+ users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 102
              : user.name === "Stanley"
              ? 98
              : user.tiebreaker;

          if (user.name === "Joe") {
            frank = addFakeUser(user, "Frank");
          }

          if (user.name === "Kelly") {
            user.groupC1 = "Argentina";
            user.groupC3 = "Poland";
            user.groupC3 = "Saudi Arabia";
            user.groupD2 = "Denmark";
            user.groupD4 = "Tunisia";
            user.knockQ1 = "Ecuador";
            user.knockQ3 = "Canada";
            user.knockQ8 = "Cameroon";
            user.knockS1 = "Argentina";
            user.knockS2 = "Brasil";
            user.knockS4 = "Cameroon";
            user.knockF1 = "Argentina";
            user.knockF2 = "Australia";
            user.knockChamp = "Argentina";
          }

          return user;
        });

        users = [...users, frank];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Frank", "Joe"];

        expect(names["1"]).to.equal("Kelly");
        expect(names["2"]).to.equal("Stanley");
        expect(tieNames.includes(names["3"])).to.equal(true);
        expect(tieNames.includes(names["4"])).to.equal(true);
        expect(names["5"]).to.equal("Coach Raiff");
        expect(names["6"]).to.equal("E");

        expect(scores["1"]).to.equal(93);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(92);
        expect(scores["5"]).to.equal(49);
        expect(scores["6"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(true);
        expect(tieExists["4"]).to.equal(true);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
      });

      it("scenario #3 - only 2 users tied", () => {
        //test with 2 users tied at one score, and 2 users tied at another score

        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 100
              : user.name === "Stanley"
              ? 98
              : user.tiebreaker;

          if (user.name === "Kelly") {
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        jill.tiebreaker = 90;

        users = [...users, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Joe");
        expect(names["2"]).to.equal("Stanley");
        expect(names["3"]).to.equal("Jill");
        expect(names["4"]).to.equal("Kelly");
        expect(names["5"]).to.equal("Coach Raiff");
        expect(names["6"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(51);
        expect(scores["5"]).to.equal(49);
        expect(scores["6"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
      });

      it("scenario #3 - 3+ users tied", () => {
        //test with ties in the middle of the pack too
        //test with 2 users tied at one score, and 3+ users tied at another score

        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 100
              : user.name === "Stanley"
              ? 98
              : user.tiebreaker;

          if (user.name === "Stanley") {
            frank = addFakeUser(user, "Frank");
            sally = addFakeUser(user, "Sally");
            jill = addFakeUser(user, "Jill");
            mark = addFakeUser(user, "Mark");
          }

          return user;
        });

        frank.knockChamp = "Australia";
        jill.knockChamp = "Australia";
        mark.knockChamp = "Australia";

        jill.tiebreaker = 100;
        frank.tiebreaker = 113;

        users = [...users, frank, sally, jill, mark];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Stanley", "Sally"];

        expect(names["1"]).to.equal("Joe");
        expect(tieNames.includes(names["2"])).to.equal(true);
        expect(tieNames.includes(names["3"])).to.equal(true);
        expect(names["4"]).to.equal("Jill");
        expect(names["5"]).to.equal("Mark");
        expect(names["6"]).to.equal("Frank");
        expect(names["7"]).to.equal("Kelly");
        expect(names["8"]).to.equal("Coach Raiff");
        expect(names["9"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(82);
        expect(scores["5"]).to.equal(82);
        expect(scores["6"]).to.equal(82);
        expect(scores["7"]).to.equal(51);
        expect(scores["8"]).to.equal(49);
        expect(scores["9"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(true);
        expect(tieExists["3"]).to.equal(true);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
        expect(tieExists["7"]).to.equal(false);
        expect(tieExists["8"]).to.equal(false);
        expect(tieExists["9"]).to.equal(false);
      });

      it("scenario #4 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 98
              : user.name === "Stanley"
              ? 100
              : user.tiebreaker;

          return user;
        });

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Stanley");
        expect(names["2"]).to.equal("Joe");
        expect(names["3"]).to.equal("Kelly");
        expect(names["4"]).to.equal("Coach Raiff");
        expect(names["5"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(49);
        expect(scores["5"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
      });

      it("scenario #4 - 3+ users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 98
              : user.name === "Stanley"
              ? 100
              : user.tiebreaker;

          if (user.name === "Stanley") {
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        users = [...users, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Stanley", "Jill"];

        expect(tieNames.includes(names["1"])).to.equal(true);
        expect(tieNames.includes(names["2"])).to.equal(true);
        expect(names["3"]).to.equal("Joe");
        expect(names["4"]).to.equal("Kelly");
        expect(names["5"]).to.equal("Coach Raiff");
        expect(names["6"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(51);
        expect(scores["5"]).to.equal(49);
        expect(scores["6"]).to.equal(39);

        expect(tieExists["1"]).to.equal(true);
        expect(tieExists["2"]).to.equal(true);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
      });

      it("scenario #5 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 100
              : user.name === "Stanley"
              ? 106
              : user.tiebreaker;

          if (user.name === "E") {
            mark = addFakeUser(user, "Mark");
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        mark.tiebreaker = 100;
        jill.tiebreaker = 100;

        users = [...users, mark, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Mark", "Jill"];

        expect(names["1"]).to.equal("Joe");
        expect(names["2"]).to.equal("Stanley");
        expect(names["3"]).to.equal("Kelly");
        expect(names["4"]).to.equal("Coach Raiff");
        expect(tieNames.includes(names["5"])).to.equal(true);
        expect(tieNames.includes(names["6"])).to.equal(true);
        expect(names["7"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(49);
        expect(scores["5"]).to.equal(39);
        expect(scores["6"]).to.equal(39);
        expect(scores["7"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(true);
        expect(tieExists["6"]).to.equal(true);
        expect(tieExists["7"]).to.equal(false);
      });

      it("scenario #5 - 3+ users tied", () => {
        //test with ties in the middle of the pack too
        //test with 2 users tied at one score, and 2 users tied at another score
        //test with 2 users tied at one score, and 3+ users tied at another score

        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 100
              : user.name === "Stanley"
              ? 106
              : user.tiebreaker;

          if (user.name === "Stanley") {
            frank = addFakeUser(user, "Frank");
            sally = addFakeUser(user, "Sally");
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        frank.groupA2 = "Qatar";
        frank.groupA4 = "Netherlands";
        sally.groupA2 = "Qatar";
        sally.groupA4 = "Netherlands";
        jill.groupA2 = "Qatar";
        jill.groupA4 = "Netherlands";

        jill.tiebreaker = 100;

        users = [...users, frank, sally, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Frank", "Sally"];

        expect(names["1"]).to.equal("Joe");
        expect(names["2"]).to.equal("Stanley");
        expect(names["3"]).to.equal("Jill");
        expect(tieNames.includes(names["4"])).to.equal(true);
        expect(tieNames.includes(names["5"])).to.equal(true);
        expect(names["6"]).to.equal("Kelly");
        expect(names["7"]).to.equal("Coach Raiff");
        expect(names["8"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(90);
        expect(scores["4"]).to.equal(90);
        expect(scores["5"]).to.equal(90);
        expect(scores["6"]).to.equal(51);
        expect(scores["7"]).to.equal(49);
        expect(scores["8"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(true);
        expect(tieExists["5"]).to.equal(true);
        expect(tieExists["6"]).to.equal(false);
        expect(tieExists["7"]).to.equal(false);
        expect(tieExists["8"]).to.equal(false);
      });

      it("scenario #6 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 102
              : user.name === "Stanley"
              ? 100
              : user.tiebreaker;

          if (user.name === "Kelly") {
            user.groupC1 = "Argentina";
            user.groupC3 = "Poland";
            user.groupC3 = "Saudi Arabia";
            user.groupD2 = "Denmark";
            user.groupD4 = "Tunisia";
            user.knockQ1 = "Ecuador";
            user.knockQ3 = "Canada";
            user.knockQ8 = "Cameroon";
            user.knockS1 = "Argentina";
            user.knockS2 = "Brasil";
            user.knockS4 = "Cameroon";
            user.knockF1 = "Argentina";
            user.knockF2 = "Australia";
            user.knockChamp = "Argentina";
          }

          return user;
        });

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Kelly");
        expect(names["2"]).to.equal("Stanley");
        expect(names["3"]).to.equal("Joe");
        expect(names["4"]).to.equal("Coach Raiff");
        expect(names["5"]).to.equal("E");

        expect(scores["1"]).to.equal(93);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(49);
        expect(scores["5"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
      });

      it("scenario #6 - 3+ users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 102
              : user.name === "Stanley"
              ? 100
              : user.tiebreaker;

          if (user.name === "Joe") {
            frank = addFakeUser(user, "Frank");
          }

          return user;
        });

        users = [...users, frank];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Joe", "Frank"];

        expect(names["1"]).to.equal("Stanley");
        expect(tieNames.includes(names["2"])).to.equal(true);
        expect(tieNames.includes(names["3"])).to.equal(true);
        expect(names["4"]).to.equal("Kelly");
        expect(names["5"]).to.equal("Coach Raiff");
        expect(names["6"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(51);
        expect(scores["5"]).to.equal(49);
        expect(scores["6"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(true);
        expect(tieExists["3"]).to.equal(true);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
      });

      it("scenario #7 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 102
              : user.name === "Stanley"
              ? 105
              : user.tiebreaker;

          if (user.name === "E") {
            sally = addFakeUser(user, "Sally");
          }

          return user;
        });

        sally.tiebreaker = 110;

        users = [...users, sally];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Joe");
        expect(names["2"]).to.equal("Stanley");
        expect(names["3"]).to.equal("Kelly");
        expect(names["4"]).to.equal("Coach Raiff");
        expect(names["5"]).to.equal("Sally");
        expect(names["6"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(49);
        expect(scores["5"]).to.equal(39);
        expect(scores["6"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
      });

      it("scenario #7 - 3+ users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 102
              : user.name === "Stanley"
              ? 110
              : user.tiebreaker;

          if (user.name === "Joe") {
            frank = addFakeUser(user, "Frank");
            mark = addFakeUser(user, "Mark");
            sally = addFakeUser(user, "Sally");
          }

          return user;
        });

        frank.tiebreaker = 106;
        mark.tiebreaker = 101;
        sally.tiebreaker = 106;

        users = [...users, frank, mark, sally];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Sally", "Frank"];

        expect(names["1"]).to.equal("Mark");
        expect(names["2"]).to.equal("Joe");
        expect(tieNames.includes(names["3"])).to.equal(true);
        expect(tieNames.includes(names["4"])).to.equal(true);
        expect(names["5"]).to.equal("Stanley");
        expect(names["6"]).to.equal("Kelly");
        expect(names["7"]).to.equal("Coach Raiff");
        expect(names["8"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(92);
        expect(scores["5"]).to.equal(92);
        expect(scores["6"]).to.equal(51);
        expect(scores["7"]).to.equal(49);
        expect(scores["8"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(true);
        expect(tieExists["4"]).to.equal(true);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
        expect(tieExists["7"]).to.equal(false);
        expect(tieExists["8"]).to.equal(false);
      });

      it("scenario #8 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 120
              : user.name === "Stanley"
              ? 105
              : user.tiebreaker;

          if (user.name === "Kelly") {
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        jill.tiebreaker = 110;

        users = [...users, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Stanley");
        expect(names["2"]).to.equal("Joe");
        expect(names["3"]).to.equal("Jill");
        expect(names["4"]).to.equal("Kelly");
        expect(names["5"]).to.equal("Coach Raiff");
        expect(names["6"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(51);
        expect(scores["5"]).to.equal(49);
        expect(scores["6"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
      });

      it("scenario #8 - 3+ users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 120
              : user.name === "Stanley"
              ? 105
              : user.tiebreaker;

          if (user.name === "Joe") {
            frank = addFakeUser(user, "Frank");
            mark = addFakeUser(user, "Mark");
            sally = addFakeUser(user, "Sally");
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        frank.tiebreaker = 106;
        mark.tiebreaker = 150;
        sally.tiebreaker = 150;
        jill.tiebreaker = 179;

        users = [...users, frank, mark, sally, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Mark", "Sally"];

        expect(names["1"]).to.equal("Stanley");
        expect(names["2"]).to.equal("Frank");
        expect(names["3"]).to.equal("Joe");
        expect(tieNames.includes(names["4"])).to.equal(true);
        expect(tieNames.includes(names["5"])).to.equal(true);
        expect(names["6"]).to.equal("Jill");
        expect(names["7"]).to.equal("Kelly");
        expect(names["8"]).to.equal("Coach Raiff");
        expect(names["9"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(92);
        expect(scores["5"]).to.equal(92);
        expect(scores["6"]).to.equal(92);
        expect(scores["7"]).to.equal(51);
        expect(scores["8"]).to.equal(49);
        expect(scores["9"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(true);
        expect(tieExists["5"]).to.equal(true);
        expect(tieExists["6"]).to.equal(false);
        expect(tieExists["7"]).to.equal(false);
        expect(tieExists["8"]).to.equal(false);
        expect(tieExists["8"]).to.equal(false);
      });

      it("scenario #9 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 98
              : user.name === "Stanley"
              ? 90
              : user.tiebreaker;

          if (user.name === "Coach Raiff") {
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        jill.tiebreaker = 60;

        users = [...users, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        expect(names["1"]).to.equal("Joe");
        expect(names["2"]).to.equal("Stanley");
        expect(names["3"]).to.equal("Kelly");
        expect(names["4"]).to.equal("Jill");
        expect(names["5"]).to.equal("Coach Raiff");
        expect(names["6"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(49);
        expect(scores["5"]).to.equal(49);
        expect(scores["6"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(false);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
      });

      it("scenario #9 - 3+ users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe"
              ? 98
              : user.name === "Stanley"
              ? 90
              : user.tiebreaker;

          if (user.name === "Joe") {
            frank = addFakeUser(user, "Frank");
            mark = addFakeUser(user, "Mark");
            sally = addFakeUser(user, "Sally");
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        frank.tiebreaker = 99;
        mark.tiebreaker = 96;
        sally.tiebreaker = 96;
        jill.tiebreaker = 95;

        users = [...users, frank, mark, sally, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Mark", "Sally"];

        expect(names["1"]).to.equal("Frank");
        expect(names["2"]).to.equal("Joe");
        expect(tieNames.includes(names["3"])).to.equal(true);
        expect(tieNames.includes(names["4"])).to.equal(true);
        expect(names["5"]).to.equal("Jill");
        expect(names["6"]).to.equal("Stanley");
        expect(names["7"]).to.equal("Kelly");
        expect(names["8"]).to.equal("Coach Raiff");
        expect(names["9"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(92);
        expect(scores["5"]).to.equal(92);
        expect(scores["6"]).to.equal(92);
        expect(scores["7"]).to.equal(51);
        expect(scores["8"]).to.equal(49);
        expect(scores["9"]).to.equal(39);

        expect(tieExists["1"]).to.equal(false);
        expect(tieExists["2"]).to.equal(false);
        expect(tieExists["3"]).to.equal(true);
        expect(tieExists["4"]).to.equal(true);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
        expect(tieExists["7"]).to.equal(false);
        expect(tieExists["8"]).to.equal(false);
        expect(tieExists["8"]).to.equal(false);
      });

      it("scenario #11 - only 2 users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe" || user.name === "Stanley"
              ? 98
              : user.tiebreaker;

          if (user.name === "Kelly") {
            mark = addFakeUser(user, "Mark");
          }

          return user;
        });

        users = [...users, mark];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Kelly", "Mark", "Stanley", "Joe"];

        expect(tieNames.includes(names["1"])).to.equal(true);
        expect(tieNames.includes(names["2"])).to.equal(true);
        expect(tieNames.includes(names["3"])).to.equal(true);
        expect(tieNames.includes(names["4"])).to.equal(true);
        expect(names["5"]).to.equal("Coach Raiff");
        expect(names["6"]).to.equal("E");

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(51);
        expect(scores["4"]).to.equal(51);
        expect(scores["5"]).to.equal(49);
        expect(scores["6"]).to.equal(39);

        expect(tieExists["1"]).to.equal(true);
        expect(tieExists["2"]).to.equal(true);
        expect(tieExists["3"]).to.equal(true);
        expect(tieExists["4"]).to.equal(true);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(false);
      });

      it("scenario #11 - 3+ users tied", () => {
        users = users.map((user) => {
          user.tiebreaker =
            user.name === "Joe" || user.name === "Stanley"
              ? 98
              : user.tiebreaker;

          if (user.name === "Joe") {
            frank = addFakeUser(user, "Frank");
          }

          if (user.name === "E") {
            mark = addFakeUser(user, "Mark");
            sally = addFakeUser(user, "Sally");
            jill = addFakeUser(user, "Jill");
          }

          return user;
        });

        users = [...users, frank, mark, sally, jill];

        answer = currentScoresObj(users, teams, 100);

        names = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.name;
          return a;
        }, {});

        scores = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.total;
          return a;
        }, {});

        tieExists = answer.reduce((a, userObj) => {
          a[userObj.rank] = userObj.tieExists;
          return a;
        }, {});

        tieNames = ["Joe", "Stanley", "Jill", "Frank", "Mark", "Sally", "E"];

        expect(tieNames.includes(names["1"])).to.equal(true);
        expect(tieNames.includes(names["2"])).to.equal(true);
        expect(tieNames.includes(names["3"])).to.equal(true);
        expect(names["4"]).to.equal("Kelly");
        expect(names["5"]).to.equal("Coach Raiff");
        expect(tieNames.includes(names["6"])).to.equal(true);
        expect(tieNames.includes(names["7"])).to.equal(true);
        expect(tieNames.includes(names["8"])).to.equal(true);
        expect(tieNames.includes(names["9"])).to.equal(true);

        expect(scores["1"]).to.equal(92);
        expect(scores["2"]).to.equal(92);
        expect(scores["3"]).to.equal(92);
        expect(scores["4"]).to.equal(51);
        expect(scores["5"]).to.equal(49);
        expect(scores["6"]).to.equal(39);
        expect(scores["7"]).to.equal(39);
        expect(scores["8"]).to.equal(39);
        expect(scores["9"]).to.equal(39);

        expect(tieExists["1"]).to.equal(true);
        expect(tieExists["2"]).to.equal(true);
        expect(tieExists["3"]).to.equal(true);
        expect(tieExists["4"]).to.equal(false);
        expect(tieExists["5"]).to.equal(false);
        expect(tieExists["6"]).to.equal(true);
        expect(tieExists["7"]).to.equal(true);
        expect(tieExists["8"]).to.equal(true);
        expect(tieExists["8"]).to.equal(true);
      });
    });
  });

  describe("Calcs everyone's overall scores", () => {
    let joe, e, coach, kelly;

    describe("Joe's Scores", () => {
      beforeEach(() => {
        joe = users.filter((user) => user.name === "Joe")[0];
      });

      it("calculates Joe's group A correctly", () => {
        const groupA = singleGroupCalc(joe, teams, "A");

        expect(groupA.R1).to.equal(3);
        expect(groupA.R2).to.equal(2);
        expect(groupA.R3).to.equal(0);
        expect(groupA.R4).to.equal(0);
      });

      it("calculates Joe's group B correctly", () => {
        const groupB = singleGroupCalc(joe, teams, "B");

        expect(groupB.R1).to.equal(3);
        expect(groupB.R2).to.equal(2);
        expect(groupB.R3).to.equal(1);
        expect(groupB.R4).to.equal(1);
      });

      it("calculates Joe's group C correctly", () => {
        const groupC = singleGroupCalc(joe, teams, "C");

        expect(groupC.R1).to.equal(3);
        expect(groupC.R2).to.equal(0);
        expect(groupC.R3).to.equal(0);
        expect(groupC.R4).to.equal(1);
      });

      it("calculates Joe's group D correctly", () => {
        const groupD = singleGroupCalc(joe, teams, "D");

        expect(groupD.R1).to.equal(1);
        expect(groupD.R2).to.equal(1);
        expect(groupD.R3).to.equal(1);
        expect(groupD.R4).to.equal(1);
      });

      it("calculates Joe's group E correctly", () => {
        const groupE = singleGroupCalc(joe, teams, "E");

        expect(groupE.R1).to.equal(3);
        expect(groupE.R2).to.equal(2);
        expect(groupE.R3).to.equal(1);
        expect(groupE.R4).to.equal(1);
      });

      it("calculates Joe's group F correctly", () => {
        const groupF = singleGroupCalc(joe, teams, "F");

        expect(groupF.R1).to.equal(0);
        expect(groupF.R2).to.equal(2);
        expect(groupF.R3).to.equal(0);
        expect(groupF.R4).to.equal(0);
      });

      it("calculates Joe's group G correctly", () => {
        const groupG = singleGroupCalc(joe, teams, "G");

        expect(groupG.R1).to.equal(3);
        expect(groupG.R2).to.equal(2);
        expect(groupG.R3).to.equal(1);
        expect(groupG.R4).to.equal(1);
      });

      it("calculates Joe's group H correctly", () => {
        const groupH = singleGroupCalc(joe, teams, "H");

        expect(groupH.R1).to.equal(1);
        expect(groupH.R2).to.equal(0);
        expect(groupH.R3).to.equal(1);
        expect(groupH.R4).to.equal(0);
      });

      it("calculates  Joe's total group scores correctly", () => {
        const groupTotal = totalScoreCalc(
          singleGroupCalc(joe, teams, "A"),
          singleGroupCalc(joe, teams, "B"),
          singleGroupCalc(joe, teams, "C"),
          singleGroupCalc(joe, teams, "D"),
          singleGroupCalc(joe, teams, "E"),
          singleGroupCalc(joe, teams, "F"),
          singleGroupCalc(joe, teams, "G"),
          singleGroupCalc(joe, teams, "H")
        );

        expect(groupTotal).to.equal(38);
      });

      describe("Joe's Knockout Scores", () => {
        it("calculates Joe's quarters correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(joe, teams, "A"),
            singleGroupCalc(joe, teams, "B"),
            singleGroupCalc(joe, teams, "C"),
            singleGroupCalc(joe, teams, "D"),
            singleGroupCalc(joe, teams, "E"),
            singleGroupCalc(joe, teams, "F"),
            singleGroupCalc(joe, teams, "G"),
            singleGroupCalc(joe, teams, "H"),
            knockoutRoundCalc("quarters", joe, teams)
          );

          expect(total).to.equal(54);
        });

        it("calculates Joe's semis correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(joe, teams, "A"),
            singleGroupCalc(joe, teams, "B"),
            singleGroupCalc(joe, teams, "C"),
            singleGroupCalc(joe, teams, "D"),
            singleGroupCalc(joe, teams, "E"),
            singleGroupCalc(joe, teams, "F"),
            singleGroupCalc(joe, teams, "G"),
            singleGroupCalc(joe, teams, "H"),
            knockoutRoundCalc("quarters", joe, teams),
            knockoutRoundCalc("semis", joe, teams)
          );

          expect(total).to.equal(70);
        });

        it("calculates Joe's finals correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(joe, teams, "A"),
            singleGroupCalc(joe, teams, "B"),
            singleGroupCalc(joe, teams, "C"),
            singleGroupCalc(joe, teams, "D"),
            singleGroupCalc(joe, teams, "E"),
            singleGroupCalc(joe, teams, "F"),
            singleGroupCalc(joe, teams, "G"),
            singleGroupCalc(joe, teams, "H"),
            knockoutRoundCalc("quarters", joe, teams),
            knockoutRoundCalc("semis", joe, teams),
            knockoutRoundCalc("finals", joe, teams)
          );

          expect(total).to.equal(82);
        });

        it("calculates Joe's overall total correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(joe, teams, "A"),
            singleGroupCalc(joe, teams, "B"),
            singleGroupCalc(joe, teams, "C"),
            singleGroupCalc(joe, teams, "D"),
            singleGroupCalc(joe, teams, "E"),
            singleGroupCalc(joe, teams, "F"),
            singleGroupCalc(joe, teams, "G"),
            singleGroupCalc(joe, teams, "H"),
            knockoutRoundCalc("quarters", joe, teams),
            knockoutRoundCalc("semis", joe, teams),
            knockoutRoundCalc("finals", joe, teams),
            knockoutRoundCalc("champ", joe, teams)
          );

          expect(total).to.equal(92);
        });
      });
    });

    describe("E's Scores", () => {
      beforeEach(() => {
        e = users.filter((user) => user.name === "E")[0];
      });

      it("calculates E's group A correctly", () => {
        const groupA = singleGroupCalc(e, teams, "A");

        expect(groupA.R1).to.equal(1);
        expect(groupA.R2).to.equal(1);
        expect(groupA.R3).to.equal(0);
        expect(groupA.R4).to.equal(0);
      });

      it("calculates E's group B correctly", () => {
        const groupB = singleGroupCalc(e, teams, "B");

        expect(groupB.R1).to.equal(0);
        expect(groupB.R2).to.equal(0);
        expect(groupB.R3).to.equal(0);
        expect(groupB.R4).to.equal(0);
      });

      it("calculates E's group C correctly", () => {
        const groupC = singleGroupCalc(e, teams, "C");

        expect(groupC.R1).to.equal(3);
        expect(groupC.R2).to.equal(2);
        expect(groupC.R3).to.equal(1);
        expect(groupC.R4).to.equal(1);
      });

      it("calculates E's group D correctly", () => {
        const groupD = singleGroupCalc(e, teams, "D");

        expect(groupD.R1).to.equal(3);
        expect(groupD.R2).to.equal(2);
        expect(groupD.R3).to.equal(0);
        expect(groupD.R4).to.equal(0);
      });

      it("calculates E's group E correctly", () => {
        const groupE = singleGroupCalc(e, teams, "E");

        expect(groupE.R1).to.equal(0);
        expect(groupE.R2).to.equal(1);
        expect(groupE.R3).to.equal(0);
        expect(groupE.R4).to.equal(1);
      });

      it("calculates E's group F correctly", () => {
        const groupF = singleGroupCalc(e, teams, "F");

        expect(groupF.R1).to.equal(0);
        expect(groupF.R2).to.equal(2);
        expect(groupF.R3).to.equal(0);
        expect(groupF.R4).to.equal(0);
      });

      it("calculates E's group G correctly", () => {
        const groupG = singleGroupCalc(e, teams, "G");

        expect(groupG.R1).to.equal(3);
        expect(groupG.R2).to.equal(2);
        expect(groupG.R3).to.equal(1);
        expect(groupG.R4).to.equal(1);
      });

      it("calculates E's group H correctly", () => {
        const groupH = singleGroupCalc(e, teams, "H");

        expect(groupH.R1).to.equal(1);
        expect(groupH.R2).to.equal(0);
        expect(groupH.R3).to.equal(1);
        expect(groupH.R4).to.equal(0);
      });

      it("calculates E's total group scores correctly", () => {
        const groupTotal = totalScoreCalc(
          singleGroupCalc(e, teams, "A"),
          singleGroupCalc(e, teams, "B"),
          singleGroupCalc(e, teams, "C"),
          singleGroupCalc(e, teams, "D"),
          singleGroupCalc(e, teams, "E"),
          singleGroupCalc(e, teams, "F"),
          singleGroupCalc(e, teams, "G"),
          singleGroupCalc(e, teams, "H")
        );

        expect(groupTotal).to.equal(27);
      });

      describe("E's Knockout Scores", () => {
        it("calculates E's quarters correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(e, teams, "A"),
            singleGroupCalc(e, teams, "B"),
            singleGroupCalc(e, teams, "C"),
            singleGroupCalc(e, teams, "D"),
            singleGroupCalc(e, teams, "E"),
            singleGroupCalc(e, teams, "F"),
            singleGroupCalc(e, teams, "G"),
            singleGroupCalc(e, teams, "H"),
            knockoutRoundCalc("quarters", e, teams)
          );

          expect(total).to.equal(39);
        });

        it("calculates E's semis correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(e, teams, "A"),
            singleGroupCalc(e, teams, "B"),
            singleGroupCalc(e, teams, "C"),
            singleGroupCalc(e, teams, "D"),
            singleGroupCalc(e, teams, "E"),
            singleGroupCalc(e, teams, "F"),
            singleGroupCalc(e, teams, "G"),
            singleGroupCalc(e, teams, "H"),
            knockoutRoundCalc("quarters", e, teams),
            knockoutRoundCalc("semis", e, teams)
          );

          expect(total).to.equal(39);
        });

        it("calculates E's finals correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(e, teams, "A"),
            singleGroupCalc(e, teams, "B"),
            singleGroupCalc(e, teams, "C"),
            singleGroupCalc(e, teams, "D"),
            singleGroupCalc(e, teams, "E"),
            singleGroupCalc(e, teams, "F"),
            singleGroupCalc(e, teams, "G"),
            singleGroupCalc(e, teams, "H"),
            knockoutRoundCalc("quarters", e, teams),
            knockoutRoundCalc("semis", e, teams),
            knockoutRoundCalc("finals", e, teams)
          );

          expect(total).to.equal(39);
        });

        it("calculates E's overall total correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(e, teams, "A"),
            singleGroupCalc(e, teams, "B"),
            singleGroupCalc(e, teams, "C"),
            singleGroupCalc(e, teams, "D"),
            singleGroupCalc(e, teams, "E"),
            singleGroupCalc(e, teams, "F"),
            singleGroupCalc(e, teams, "G"),
            singleGroupCalc(e, teams, "H"),
            knockoutRoundCalc("quarters", e, teams),
            knockoutRoundCalc("semis", e, teams),
            knockoutRoundCalc("finals", e, teams),
            knockoutRoundCalc("champ", e, teams)
          );

          expect(total).to.equal(39);
        });
      });
    });

    describe("Coach's Scores", () => {
      beforeEach(() => {
        coach = users.find((user) => user.name === "Coach Raiff");
      });

      it("calculates Coach's group A correctly", () => {
        const groupA = singleGroupCalc(coach, teams, "A");

        expect(groupA.R1).to.equal(3);
        expect(groupA.R2).to.equal(2);
        expect(groupA.R3).to.equal(0);
        expect(groupA.R4).to.equal(0);
      });

      it("calculates Coach's group B correctly", () => {
        const groupB = singleGroupCalc(coach, teams, "B");

        expect(groupB.R1).to.equal(3);
        expect(groupB.R2).to.equal(2);
        expect(groupB.R3).to.equal(0);
        expect(groupB.R4).to.equal(0);
      });

      it("calculates Coach's group C correctly", () => {
        const groupC = singleGroupCalc(coach, teams, "C");

        expect(groupC.R1).to.equal(3);
        expect(groupC.R2).to.equal(0);
        expect(groupC.R3).to.equal(0);
        expect(groupC.R4).to.equal(1);
      });

      it("calculates Coach's group D correctly", () => {
        const groupD = singleGroupCalc(coach, teams, "D");

        expect(groupD.R1).to.equal(1);
        expect(groupD.R2).to.equal(1);
        expect(groupD.R3).to.equal(1);
        expect(groupD.R4).to.equal(1);
      });

      it("calculates Coach's group E correctly", () => {
        const groupE = singleGroupCalc(coach, teams, "E");

        expect(groupE.R1).to.equal(3);
        expect(groupE.R2).to.equal(2);
        expect(groupE.R3).to.equal(1);
        expect(groupE.R4).to.equal(1);
      });

      it("calculates Coach's group F correctly", () => {
        const groupF = singleGroupCalc(coach, teams, "F");

        expect(groupF.R1).to.equal(3);
        expect(groupF.R2).to.equal(0);
        expect(groupF.R3).to.equal(0);
        expect(groupF.R4).to.equal(0);
      });

      it("calculates Coach's group G correctly", () => {
        const groupG = singleGroupCalc(coach, teams, "G");

        expect(groupG.R1).to.equal(0);
        expect(groupG.R2).to.equal(2);
        expect(groupG.R3).to.equal(1);
        expect(groupG.R4).to.equal(0);
      });

      it("calculates Coach's group H correctly", () => {
        const groupH = singleGroupCalc(coach, teams, "H");

        expect(groupH.R1).to.equal(0);
        expect(groupH.R2).to.equal(0);
        expect(groupH.R3).to.equal(0);
        expect(groupH.R4).to.equal(0);
      });

      it("calculates  Coach's total group scores correctly", () => {
        const groupTotal = totalScoreCalc(
          singleGroupCalc(coach, teams, "A"),
          singleGroupCalc(coach, teams, "B"),
          singleGroupCalc(coach, teams, "C"),
          singleGroupCalc(coach, teams, "D"),
          singleGroupCalc(coach, teams, "E"),
          singleGroupCalc(coach, teams, "F"),
          singleGroupCalc(coach, teams, "G"),
          singleGroupCalc(coach, teams, "H")
        );

        expect(groupTotal).to.equal(31);
      });

      describe("Coach's Knockout Scores", () => {
        it("calculates Coach's quarters correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(coach, teams, "A"),
            singleGroupCalc(coach, teams, "B"),
            singleGroupCalc(coach, teams, "C"),
            singleGroupCalc(coach, teams, "D"),
            singleGroupCalc(coach, teams, "E"),
            singleGroupCalc(coach, teams, "F"),
            singleGroupCalc(coach, teams, "G"),
            singleGroupCalc(coach, teams, "H"),
            knockoutRoundCalc("quarters", coach, teams)
          );

          expect(total).to.equal(41);
        });

        it("calculates Coach's semis correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(coach, teams, "A"),
            singleGroupCalc(coach, teams, "B"),
            singleGroupCalc(coach, teams, "C"),
            singleGroupCalc(coach, teams, "D"),
            singleGroupCalc(coach, teams, "E"),
            singleGroupCalc(coach, teams, "F"),
            singleGroupCalc(coach, teams, "G"),
            singleGroupCalc(coach, teams, "H"),
            knockoutRoundCalc("quarters", coach, teams),
            knockoutRoundCalc("semis", coach, teams)
          );

          expect(total).to.equal(49);
        });

        it("calculates Coach's finals correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(coach, teams, "A"),
            singleGroupCalc(coach, teams, "B"),
            singleGroupCalc(coach, teams, "C"),
            singleGroupCalc(coach, teams, "D"),
            singleGroupCalc(coach, teams, "E"),
            singleGroupCalc(coach, teams, "F"),
            singleGroupCalc(coach, teams, "G"),
            singleGroupCalc(coach, teams, "H"),
            knockoutRoundCalc("quarters", coach, teams),
            knockoutRoundCalc("semis", coach, teams),
            knockoutRoundCalc("finals", coach, teams)
          );

          expect(total).to.equal(49);
        });

        it("calculates Coach's overall total correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(coach, teams, "A"),
            singleGroupCalc(coach, teams, "B"),
            singleGroupCalc(coach, teams, "C"),
            singleGroupCalc(coach, teams, "D"),
            singleGroupCalc(coach, teams, "E"),
            singleGroupCalc(coach, teams, "F"),
            singleGroupCalc(coach, teams, "G"),
            singleGroupCalc(coach, teams, "H"),
            knockoutRoundCalc("quarters", coach, teams),
            knockoutRoundCalc("semis", coach, teams),
            knockoutRoundCalc("finals", coach, teams),
            knockoutRoundCalc("champ", coach, teams)
          );

          expect(total).to.equal(49);
        });
      });
    });

    describe("Kelly's Scores", () => {
      beforeEach(() => {
        kelly = users.filter((user) => user.name === "Kelly")[0];
      });

      it("calculates Kelly's group A correctly", () => {
        const groupA = singleGroupCalc(kelly, teams, "A");

        expect(groupA.R1).to.equal(3);
        expect(groupA.R2).to.equal(2);
        expect(groupA.R3).to.equal(0);
        expect(groupA.R4).to.equal(0);
      });

      it("calculates Kelly's group B correctly", () => {
        const groupB = singleGroupCalc(kelly, teams, "B");

        expect(groupB.R1).to.equal(3);
        expect(groupB.R2).to.equal(2);
        expect(groupB.R3).to.equal(1);
        expect(groupB.R4).to.equal(1);
      });

      it("calculates Kelly's group C correctly", () => {
        const groupC = singleGroupCalc(kelly, teams, "C");

        expect(groupC.R1).to.equal(0);
        expect(groupC.R2).to.equal(2);
        expect(groupC.R3).to.equal(0);
        expect(groupC.R4).to.equal(0);
      });

      it("calculates Kelly's group D correctly", () => {
        const groupD = singleGroupCalc(kelly, teams, "D");

        expect(groupD.R1).to.equal(3);
        expect(groupD.R2).to.equal(0);
        expect(groupD.R3).to.equal(1);
        expect(groupD.R4).to.equal(0);
      });

      it("calculates Kelly's group E correctly", () => {
        const groupE = singleGroupCalc(kelly, teams, "E");

        expect(groupE.R1).to.equal(3);
        expect(groupE.R2).to.equal(2);
        expect(groupE.R3).to.equal(1);
        expect(groupE.R4).to.equal(1);
      });

      it("calculates Kelly's group F correctly", () => {
        const groupF = singleGroupCalc(kelly, teams, "F");

        expect(groupF.R1).to.equal(3);
        expect(groupF.R2).to.equal(0);
        expect(groupF.R3).to.equal(0);
        expect(groupF.R4).to.equal(0);
      });

      it("calculates Kelly's group G correctly", () => {
        const groupG = singleGroupCalc(kelly, teams, "G");

        expect(groupG.R1).to.equal(3);
        expect(groupG.R2).to.equal(2);
        expect(groupG.R3).to.equal(1);
        expect(groupG.R4).to.equal(1);
      });

      it("calculates Kelly's group H correctly", () => {
        const groupH = singleGroupCalc(kelly, teams, "H");

        expect(groupH.R1).to.equal(1);
        expect(groupH.R2).to.equal(0);
        expect(groupH.R3).to.equal(1);
        expect(groupH.R4).to.equal(0);
      });

      it("calculates  Kelly's total group scores correctly", () => {
        const groupTotal = totalScoreCalc(
          singleGroupCalc(kelly, teams, "A"),
          singleGroupCalc(kelly, teams, "B"),
          singleGroupCalc(kelly, teams, "C"),
          singleGroupCalc(kelly, teams, "D"),
          singleGroupCalc(kelly, teams, "E"),
          singleGroupCalc(kelly, teams, "F"),
          singleGroupCalc(kelly, teams, "G"),
          singleGroupCalc(kelly, teams, "H")
        );

        expect(groupTotal).to.equal(37);
      });

      describe("Kelly's Knockout Scores", () => {
        it("calculates Kelly's quarters correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(kelly, teams, "A"),
            singleGroupCalc(kelly, teams, "B"),
            singleGroupCalc(kelly, teams, "C"),
            singleGroupCalc(kelly, teams, "D"),
            singleGroupCalc(kelly, teams, "E"),
            singleGroupCalc(kelly, teams, "F"),
            singleGroupCalc(kelly, teams, "G"),
            singleGroupCalc(kelly, teams, "H"),
            knockoutRoundCalc("quarters", kelly, teams)
          );

          expect(total).to.equal(47);
        });

        it("calculates Kelly's semis correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(kelly, teams, "A"),
            singleGroupCalc(kelly, teams, "B"),
            singleGroupCalc(kelly, teams, "C"),
            singleGroupCalc(kelly, teams, "D"),
            singleGroupCalc(kelly, teams, "E"),
            singleGroupCalc(kelly, teams, "F"),
            singleGroupCalc(kelly, teams, "G"),
            singleGroupCalc(kelly, teams, "H"),
            knockoutRoundCalc("quarters", kelly, teams),
            knockoutRoundCalc("semis", kelly, teams)
          );

          expect(total).to.equal(51);
        });

        it("calculates Kelly's finals correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(kelly, teams, "A"),
            singleGroupCalc(kelly, teams, "B"),
            singleGroupCalc(kelly, teams, "C"),
            singleGroupCalc(kelly, teams, "D"),
            singleGroupCalc(kelly, teams, "E"),
            singleGroupCalc(kelly, teams, "F"),
            singleGroupCalc(kelly, teams, "G"),
            singleGroupCalc(kelly, teams, "H"),
            knockoutRoundCalc("quarters", kelly, teams),
            knockoutRoundCalc("semis", kelly, teams),
            knockoutRoundCalc("finals", kelly, teams)
          );

          expect(total).to.equal(51);
        });

        it("calculates Kelly's overall total correctly", () => {
          total = totalScoreCalc(
            singleGroupCalc(kelly, teams, "A"),
            singleGroupCalc(kelly, teams, "B"),
            singleGroupCalc(kelly, teams, "C"),
            singleGroupCalc(kelly, teams, "D"),
            singleGroupCalc(kelly, teams, "E"),
            singleGroupCalc(kelly, teams, "F"),
            singleGroupCalc(kelly, teams, "G"),
            singleGroupCalc(kelly, teams, "H"),
            knockoutRoundCalc("quarters", kelly, teams),
            knockoutRoundCalc("semis", kelly, teams),
            knockoutRoundCalc("finals", kelly, teams),
            knockoutRoundCalc("champ", kelly, teams)
          );

          expect(total).to.equal(51);
        });
      });
    });
  });

  describe("Calcs everyone's KO stage picks", () => {
    let joe, e, coach, kelly;

    describe("Joe's picks", () => {
      beforeEach(() => {
        joe = users.find((user) => user.name === "Joe");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartTeamPush(joe, "Q1");
        const Q2 = knockoutPartTeamPush(joe, "Q2");
        const Q3 = knockoutPartTeamPush(joe, "Q3");
        const Q4 = knockoutPartTeamPush(joe, "Q4");
        const Q5 = knockoutPartTeamPush(joe, "Q5");
        const Q6 = knockoutPartTeamPush(joe, "Q6");
        const Q7 = knockoutPartTeamPush(joe, "Q7");
        const Q8 = knockoutPartTeamPush(joe, "Q8");

        expect(Q1).to.equal("Ecuador");
        expect(Q2).to.equal("Argentina");
        expect(Q3).to.equal("Canada");
        expect(Q4).to.equal("Brasil");
        expect(Q5).to.equal("England");
        expect(Q6).to.equal("Australia");
        expect(Q7).to.equal("Belgium");
        expect(Q8).to.equal("Cameroon");
      });

      it("calculates semis correctly", () => {
        const S1 = knockoutPartTeamPush(joe, "S1");
        const S2 = knockoutPartTeamPush(joe, "S2");
        const S3 = knockoutPartTeamPush(joe, "S3");
        const S4 = knockoutPartTeamPush(joe, "S4");

        expect(S1).to.equal("Argentina");
        expect(S2).to.equal("Brasil");
        expect(S3).to.equal("Australia");
        expect(S4).to.equal("Belgium");
      });

      it("calculates final correctly", () => {
        const F1 = knockoutPartTeamPush(joe, "F1");
        const F2 = knockoutPartTeamPush(joe, "F2");

        expect(F1).to.equal("Argentina");
        expect(F2).to.equal("Australia");
      });

      it("calculates champ correctly", () => {
        const champ = knockoutPartTeamPush(joe, "Champ");

        expect(champ).to.equal("Argentina");
      });
    });

    describe("E's picks", () => {
      beforeEach(() => {
        e = users.find((user) => user.name === "E");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartTeamPush(e, "Q1");
        const Q2 = knockoutPartTeamPush(e, "Q2");
        const Q3 = knockoutPartTeamPush(e, "Q3");
        const Q4 = knockoutPartTeamPush(e, "Q4");
        const Q5 = knockoutPartTeamPush(e, "Q5");
        const Q6 = knockoutPartTeamPush(e, "Q6");
        const Q7 = knockoutPartTeamPush(e, "Q7");
        const Q8 = knockoutPartTeamPush(e, "Q8");

        expect(Q1).to.equal("Iran");
        expect(Q2).to.equal("Argentina");
        expect(Q3).to.equal("Canada");
        expect(Q4).to.equal("Brasil");
        expect(Q5).to.equal("England");
        expect(Q6).to.equal("Australia");
        expect(Q7).to.equal("Costa Rica");
        expect(Q8).to.equal("Cameroon");
      });

      it("calculates semis correctly", () => {
        const S1 = knockoutPartTeamPush(e, "S1");
        const S2 = knockoutPartTeamPush(e, "S2");
        const S3 = knockoutPartTeamPush(e, "S3");
        const S4 = knockoutPartTeamPush(e, "S4");

        expect(S1).to.equal("Iran");
        expect(S2).to.equal("Canada");
        expect(S3).to.equal("England");
        expect(S4).to.equal("Costa Rica");
      });

      it("calculates final correctly", () => {
        const F1 = knockoutPartTeamPush(e, "F1");
        const F2 = knockoutPartTeamPush(e, "F2");

        expect(F1).to.equal("Canada");
        expect(F2).to.equal("Costa Rica");
      });

      it("calculates champ correctly", () => {
        const champ = knockoutPartTeamPush(e, "Champ");

        expect(champ).to.equal("Canada");
      });
    });

    describe("Coach's picks", () => {
      beforeEach(() => {
        coach = users.find((user) => user.name === "Coach Raiff");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartTeamPush(coach, "Q1");
        const Q2 = knockoutPartTeamPush(coach, "Q2");
        const Q3 = knockoutPartTeamPush(coach, "Q3");
        const Q4 = knockoutPartTeamPush(coach, "Q4");
        const Q5 = knockoutPartTeamPush(coach, "Q5");
        const Q6 = knockoutPartTeamPush(coach, "Q6");
        const Q7 = knockoutPartTeamPush(coach, "Q7");
        const Q8 = knockoutPartTeamPush(coach, "Q8");

        expect(Q1).to.equal("Ecuador");
        expect(Q2).to.equal("Argentina");
        expect(Q3).to.equal("Germany");
        expect(Q4).to.equal("Brasil");
        expect(Q5).to.equal("England");
        expect(Q6).to.equal("Mexico");
        expect(Q7).to.equal("Belgium");
        expect(Q8).to.equal("Ghana");
      });

      it("calculates semis correctly", () => {
        const S1 = knockoutPartTeamPush(coach, "S1");
        const S2 = knockoutPartTeamPush(coach, "S2");
        const S3 = knockoutPartTeamPush(coach, "S3");
        const S4 = knockoutPartTeamPush(coach, "S4");

        expect(S1).to.equal("Ecuador");
        expect(S2).to.equal("Brasil");
        expect(S3).to.equal("Mexico");
        expect(S4).to.equal("Belgium");
      });

      it("calculates final correctly", () => {
        const F1 = knockoutPartTeamPush(coach, "F1");
        const F2 = knockoutPartTeamPush(coach, "F2");

        expect(F1).to.equal("Brasil");
        expect(F2).to.equal("Mexico");
      });

      it("calculates champ correctly", () => {
        const champ = knockoutPartTeamPush(coach, "Champ");

        expect(champ).to.equal("Brasil");
      });
    });

    describe("Kelly's picks", () => {
      beforeEach(() => {
        kelly = users.find((user) => user.name === "Kelly");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartTeamPush(kelly, "Q1");
        const Q2 = knockoutPartTeamPush(kelly, "Q2");
        const Q3 = knockoutPartTeamPush(kelly, "Q3");
        const Q4 = knockoutPartTeamPush(kelly, "Q4");
        const Q5 = knockoutPartTeamPush(kelly, "Q5");
        const Q6 = knockoutPartTeamPush(kelly, "Q6");
        const Q7 = knockoutPartTeamPush(kelly, "Q7");
        const Q8 = knockoutPartTeamPush(kelly, "Q8");

        expect(Q1).to.equal("Iran");
        expect(Q2).to.equal("Argentina");
        expect(Q3).to.equal("Germany");
        expect(Q4).to.equal("Brasil");
        expect(Q5).to.equal("England");
        expect(Q6).to.equal("Australia");
        expect(Q7).to.equal("Belgium");
        expect(Q8).to.equal("Ghana");
      });

      it("calculates semis correctly", () => {
        const S1 = knockoutPartTeamPush(kelly, "S1");
        const S2 = knockoutPartTeamPush(kelly, "S2");
        const S3 = knockoutPartTeamPush(kelly, "S3");
        const S4 = knockoutPartTeamPush(kelly, "S4");

        expect(S1).to.equal("Iran");
        expect(S2).to.equal("Germany");
        expect(S3).to.equal("Australia");
        expect(S4).to.equal("Ghana");
      });

      it("calculates final correctly", () => {
        const F1 = knockoutPartTeamPush(kelly, "F1");
        const F2 = knockoutPartTeamPush(kelly, "F2");

        expect(F1).to.equal("Germany");
        expect(F2).to.equal("Ghana");
      });

      it("calculates champ correctly", () => {
        const champ = knockoutPartTeamPush(kelly, "Champ");

        expect(champ).to.equal("Germany");
      });
    });
  });

  describe("Calcs everyone's overall correct/wrong className info in KO stage", () => {
    let joe, e, coach, kelly;

    describe("Joe's picks", () => {
      beforeEach(() => {
        joe = users.find((user) => user.name === "Joe");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartClassPush(joe, teams, "Q1");
        const Q2 = knockoutPartClassPush(joe, teams, "Q2");
        const Q3 = knockoutPartClassPush(joe, teams, "Q3");
        const Q4 = knockoutPartClassPush(joe, teams, "Q4");
        const Q5 = knockoutPartClassPush(joe, teams, "Q5");
        const Q6 = knockoutPartClassPush(joe, teams, "Q6");
        const Q7 = knockoutPartClassPush(joe, teams, "Q7");
        const Q8 = knockoutPartClassPush(joe, teams, "Q8");
        expect(Q1).to.equal("correct");
        expect(Q2).to.equal("correct");
        expect(Q3).to.equal("correct");
        expect(Q4).to.equal("correct");
        expect(Q5).to.equal("correct");
        expect(Q6).to.equal("correct");
        expect(Q7).to.equal("correct");
        expect(Q8).to.equal("correct");
      });
      it("calculates semis correctly", () => {
        const S1 = knockoutPartClassPush(joe, teams, "S1");
        const S2 = knockoutPartClassPush(joe, teams, "S2");
        const S3 = knockoutPartClassPush(joe, teams, "S3");
        const S4 = knockoutPartClassPush(joe, teams, "S4");
        expect(S1).to.equal("correct");
        expect(S2).to.equal("correct");
        expect(S3).to.equal("correct");
        expect(S4).to.equal("correct");
      });
      it("calculates final correctly", () => {
        const F1 = knockoutPartClassPush(joe, teams, "F1");
        const F2 = knockoutPartClassPush(joe, teams, "F2");
        expect(F1).to.equal("correct");
        expect(F2).to.equal("correct");
      });
      it("calculates champ correctly", () => {
        const champ = knockoutPartClassPush(joe, teams, "Champ");
        expect(champ).to.equal("correct");
      });
    });

    describe("E's picks", () => {
      beforeEach(() => {
        e = users.find((user) => user.name === "E");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartClassPush(e, teams, "Q1");
        const Q2 = knockoutPartClassPush(e, teams, "Q2");
        const Q3 = knockoutPartClassPush(e, teams, "Q3");
        const Q4 = knockoutPartClassPush(e, teams, "Q4");
        const Q5 = knockoutPartClassPush(e, teams, "Q5");
        const Q6 = knockoutPartClassPush(e, teams, "Q6");
        const Q7 = knockoutPartClassPush(e, teams, "Q7");
        const Q8 = knockoutPartClassPush(e, teams, "Q8");
        expect(Q1).to.equal("wrong");
        expect(Q2).to.equal("correct");
        expect(Q3).to.equal("correct");
        expect(Q4).to.equal("correct");
        expect(Q5).to.equal("correct");
        expect(Q6).to.equal("correct");
        expect(Q7).to.equal("wrong");
        expect(Q8).to.equal("correct");
      });
      it("calculates semis correctly", () => {
        const S1 = knockoutPartClassPush(e, teams, "S1");
        const S2 = knockoutPartClassPush(e, teams, "S2");
        const S3 = knockoutPartClassPush(e, teams, "S3");
        const S4 = knockoutPartClassPush(e, teams, "S4");
        expect(S1).to.equal("wrong");
        expect(S2).to.equal("wrong");
        expect(S3).to.equal("wrong");
        expect(S4).to.equal("wrong");
      });
      it("calculates final correctly", () => {
        const F1 = knockoutPartClassPush(e, teams, "F1");
        const F2 = knockoutPartClassPush(e, teams, "F2");
        expect(F1).to.equal("wrong");
        expect(F2).to.equal("wrong");
      });
      it("calculates champ correctly", () => {
        const champ = knockoutPartClassPush(e, teams, "Champ");
        expect(champ).to.equal("wrong");
      });
    });

    describe("coach's picks", () => {
      beforeEach(() => {
        coach = users.find((user) => user.name === "Coach Raiff");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartClassPush(coach, teams, "Q1");
        const Q2 = knockoutPartClassPush(coach, teams, "Q2");
        const Q3 = knockoutPartClassPush(coach, teams, "Q3");
        const Q4 = knockoutPartClassPush(coach, teams, "Q4");
        const Q5 = knockoutPartClassPush(coach, teams, "Q5");
        const Q6 = knockoutPartClassPush(coach, teams, "Q6");
        const Q7 = knockoutPartClassPush(coach, teams, "Q7");
        const Q8 = knockoutPartClassPush(coach, teams, "Q8");
        expect(Q1).to.equal("correct");
        expect(Q2).to.equal("correct");
        expect(Q3).to.equal("wrong");
        expect(Q4).to.equal("correct");
        expect(Q5).to.equal("correct");
        expect(Q6).to.equal("wrong");
        expect(Q7).to.equal("correct");
        expect(Q8).to.equal("wrong");
      });
      it("calculates semis correctly", () => {
        const S1 = knockoutPartClassPush(coach, teams, "S1");
        const S2 = knockoutPartClassPush(coach, teams, "S2");
        const S3 = knockoutPartClassPush(coach, teams, "S3");
        const S4 = knockoutPartClassPush(coach, teams, "S4");
        expect(S1).to.equal("wrong");
        expect(S2).to.equal("correct");
        expect(S3).to.equal("wrong");
        expect(S4).to.equal("correct");
      });
      it("calculates final correctly", () => {
        const F1 = knockoutPartClassPush(coach, teams, "F1");
        const F2 = knockoutPartClassPush(coach, teams, "F2");
        expect(F1).to.equal("wrong");
        expect(F2).to.equal("wrong");
      });
      it("calculates champ correctly", () => {
        const champ = knockoutPartClassPush(coach, teams, "Champ");
        expect(champ).to.equal("wrong");
      });
    });

    describe("kelly's picks", () => {
      beforeEach(() => {
        kelly = users.find((user) => user.name === "Kelly");
      });

      it("calculates quarters correctly", () => {
        const Q1 = knockoutPartClassPush(kelly, teams, "Q1");
        const Q2 = knockoutPartClassPush(kelly, teams, "Q2");
        const Q3 = knockoutPartClassPush(kelly, teams, "Q3");
        const Q4 = knockoutPartClassPush(kelly, teams, "Q4");
        const Q5 = knockoutPartClassPush(kelly, teams, "Q5");
        const Q6 = knockoutPartClassPush(kelly, teams, "Q6");
        const Q7 = knockoutPartClassPush(kelly, teams, "Q7");
        const Q8 = knockoutPartClassPush(kelly, teams, "Q8");
        expect(Q1).to.equal("wrong");
        expect(Q2).to.equal("correct");
        expect(Q3).to.equal("wrong");
        expect(Q4).to.equal("correct");
        expect(Q5).to.equal("correct");
        expect(Q6).to.equal("correct");
        expect(Q7).to.equal("correct");
        expect(Q8).to.equal("wrong");
      });
      it("calculates semis correctly", () => {
        const S1 = knockoutPartClassPush(kelly, teams, "S1");
        const S2 = knockoutPartClassPush(kelly, teams, "S2");
        const S3 = knockoutPartClassPush(kelly, teams, "S3");
        const S4 = knockoutPartClassPush(kelly, teams, "S4");
        expect(S1).to.equal("wrong");
        expect(S2).to.equal("wrong");
        expect(S3).to.equal("correct");
        expect(S4).to.equal("wrong");
      });
      it("calculates final correctly", () => {
        const F1 = knockoutPartClassPush(kelly, teams, "F1");
        const F2 = knockoutPartClassPush(kelly, teams, "F2");
        expect(F1).to.equal("wrong");
        expect(F2).to.equal("wrong");
      });
      it("calculates champ correctly", () => {
        const champ = knockoutPartClassPush(kelly, teams, "Champ");
        expect(champ).to.equal("wrong");
      });
    });
  });
});

describe("func testing", () => {
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
});
