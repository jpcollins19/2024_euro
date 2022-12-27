const { expect } = require("chai");
const {
  groupCalc,
  groupTotalCalc,
  urlWord,
  koGameCalc,
  koRoundCalc,
} = require("./src/store/funcs");

describe("Cals everthing correctly", () => {
  let teams, users;
  beforeEach(() => {
    teams = [
      {
        knockoutPosition: "A2",
        id: "0c7604a8-946e-4e60-89a2-2cc5c3988fa9",
        name: "Senegal",
        group: "A",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Senegal.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "A4",
        id: "1273a07c-f76c-42d5-a8d2-0997bc2462f7",
        name: "Qatar",
        group: "A",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Qatar.jpg",
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
        createdAt: "2022-12-21T15:09:42.302Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "C3",
        id: "5416c266-67b2-4639-8245-4f7ba4933bb3",
        name: "Mexico",
        group: "C",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "A1",
        id: "45e772db-c68a-4d9d-9690-28d2a307c401",
        name: "Netherlands",
        group: "A",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "A3",
        id: "f1917388-4887-445c-a1e7-16c7175f5cdf",
        name: "Ecuador",
        group: "A",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ecuador.jpg",
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
        createdAt: "2022-12-21T15:09:42.302Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "C2",
        id: "a9f447d3-6fd4-4f7b-aa7f-fd4f1b20626d",
        name: "Poland",
        group: "C",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "C4",
        id: "f7853646-e052-43b8-a603-04adb2ca71e2",
        name: "Saudi Arabia",
        group: "C",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Saudi_Arabia.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "E4",
        id: "f31e9a14-cea0-481b-8fca-e12b960bd801",
        name: "Costa Rica",
        group: "E",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Costa_Rica.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "C1",
        id: "32e43456-5799-4ba4-ae36-0a149578f361",
        name: "Argentina",
        group: "C",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "E3",
        id: "eb59657f-4212-4bbd-9b8f-7983eb3bf8ac",
        name: "Germany",
        group: "E",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "E1",
        id: "d091ab1f-06b6-43ee-bf82-2aef4f46c552",
        name: "Japan",
        group: "E",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "E2",
        id: "2e859bdd-525a-4c1f-9e4a-c8b78705ccf5",
        name: "Spain",
        group: "E",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "G1",
        id: "971452ea-f5f0-482e-89ad-40660d6a5ce8",
        name: "Brasil",
        group: "G",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "G3",
        id: "6ab740cd-a06b-4b39-9940-1b462abcaeb0",
        name: "Cameroon",
        group: "G",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Cameroon.jpg",
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
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "G4",
        id: "0eb6dc9b-9db8-4fb0-8890-4ca5552c3c28",
        name: "Serbia",
        group: "G",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Serbia.jpg",
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
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "G2",
        id: "b1e4049d-f9c4-4ef6-b802-5a0e7b7d5e6c",
        name: "Switz",
        group: "G",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "B1",
        id: "fd3afaae-d051-44d3-a96c-c787990eab19",
        name: "England",
        group: "B",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "B3",
        id: "9905a6b6-ff2f-43d3-808f-38e611e930c8",
        name: "Iran",
        group: "B",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Iran.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "B2",
        id: "84b80adb-a57f-401f-93d8-e5947175d8bb",
        name: "USA",
        group: "B",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "B4",
        id: "95ed97ff-4440-4a79-9cc9-f43f6c97f816",
        name: "Wales",
        group: "B",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Wales.jpg",
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
        createdAt: "2022-12-21T15:09:42.303Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "D4",
        id: "ec98063e-ba7a-4fef-b2eb-f0a87e4a042d",
        name: "Denmark",
        group: "D",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Denmark.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "D1",
        id: "4c7e44fd-b677-4ea7-a4af-ba954e466475",
        name: "France",
        group: "D",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "D2",
        id: "7f39134f-48c3-452c-8767-71f2238fa960",
        name: "Australia",
        group: "D",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Australia.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "D3",
        id: "1edc76a9-a703-425a-94cd-cd6e1473da2c",
        name: "Tunisia",
        group: "D",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Tunisia.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "F3",
        id: "5a313118-21ce-4593-832b-f884fad7a3dc",
        name: "Belgium",
        group: "F",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Belgium.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "F4",
        id: "a7ba2733-41f5-4aa8-b64a-7ed2ef58252f",
        name: "Canada",
        group: "F",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "F2",
        id: "2ec079d5-02d0-45f5-84bc-99397158a043",
        name: "Croatia",
        group: "F",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
        advanceToS: true,
        advanceToF: false,
        advanceToChamp: false,
        outOfTourney: true,
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "F1",
        id: "38c32f06-7a67-4994-b1be-6fb02ab2b3a1",
        name: "Morocco",
        group: "F",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
        createdAt: "2022-12-21T15:09:42.304Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "H4",
        id: "88537e80-479c-4e7d-a792-f44d751199ab",
        name: "Ghana",
        group: "H",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ghana.jpg",
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
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "H2",
        id: "5541cd6c-3f40-4635-8c81-b50c0a9eb01a",
        name: "S. Korea",
        group: "H",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/South_Korea.jpg",
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
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "H1",
        id: "b4f7d7e1-8d3b-4a91-ab1b-5cf146d3dd78",
        name: "Portugal",
        group: "H",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
      {
        knockoutPosition: "H3",
        id: "ac3b87b5-95db-4353-95dc-fc61dbd78ae4",
        name: "Uruguay",
        group: "H",
        flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Uruguay.jpg",
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
        createdAt: "2022-12-21T15:09:42.305Z",
        updatedAt: "2022-12-21T15:09:42.369Z",
      },
    ];

    users = [
      //frank
      {
        id: "359bb783-4032-4d47-89b0-53627adea86e",
        email: "frank@gmail.com",
        password:
          "$2b$05$x7aQMyYTWAVlwjESPQ5XT.ey1pez2lHrJLU5wg4uB0JjpivMWKRk2",
        passwordUpdated: null,
        name: "frank",
        tempPW: "e2158f89-a571-4764-9450-c208e5385993",
        pwResetURL: "89c716b8-d221-4206-a430-a085b1ed5bfe",
        admin: false,
        paid: false,
        groupA1: null,
        groupA2: null,
        groupA3: null,
        groupA4: null,
        groupB1: null,
        groupB2: null,
        groupB3: null,
        groupB4: null,
        groupC1: null,
        groupC2: null,
        groupC3: null,
        groupC4: null,
        groupD1: null,
        groupD2: null,
        groupD3: null,
        groupD4: null,
        groupE1: null,
        groupE2: null,
        groupE3: null,
        groupE4: null,
        groupF1: null,
        groupF2: null,
        groupF3: null,
        groupF4: null,
        groupG1: null,
        groupG2: null,
        groupG3: null,
        groupG4: null,
        groupH1: null,
        groupH2: null,
        groupH3: null,
        groupH4: null,
        knockQ1: null,
        knockQ2: null,
        knockQ3: null,
        knockQ4: null,
        knockQ5: null,
        knockQ6: null,
        knockQ7: null,
        knockQ8: null,
        knockS1: null,
        knockS2: null,
        knockS3: null,
        knockS4: null,
        knockF1: null,
        knockF2: null,
        knockChamp: null,
        tiebreaker: null,
        tourneyStage: 1,
        createdAt: "2022-12-21T18:06:25.610Z",
        updatedAt: "2022-12-21T18:06:25.610Z",
      },
      //joe
      {
        id: "7a0e1b7d-838f-4fb5-a1e1-dcdf9d49ffc3",
        email: "joe@gmail.com",
        password:
          "$2b$05$ytl9HrmO/RQlOj92DFrH7uYtV8jUnKAjdPAFo55W2LWre5n201lUi",
        passwordUpdated: null,
        name: "Joe",
        tempPW: "c8a0fa82-6479-4bee-be1f-c8eef6b02a64",
        pwResetURL: "a5783ddd-bc4c-4f48-80da-6844daf5418c",
        admin: true,
        paid: true,
        groupA1: {
          knockoutPosition: "A1",
          id: "9644ae2e-80d8-4233-9021-14efbe59e9b0",
          name: "Netherlands",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA2: {
          knockoutPosition: "A3",
          id: "cf9588eb-66f0-4342-a9a4-c8a73e8496b5",
          name: "Ecuador",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ecuador.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA3: {
          knockoutPosition: "A2",
          id: "9cad8b16-047f-42f1-94e0-c74f132d16c1",
          name: "Senegal",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Senegal.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA4: {
          knockoutPosition: "A4",
          id: "a3117df5-ef2f-49a2-b6f4-3de82a37e0ba",
          name: "Qatar",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Qatar.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupB1: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB2: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB3: {
          knockoutPosition: "B4",
          id: "d30b2854-418d-493d-853b-5f1f311e47af",
          name: "Wales",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Wales.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB4: {
          knockoutPosition: "B3",
          id: "79a91911-ce36-46d8-9794-2e29c031605e",
          name: "Iran",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Iran.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC2: {
          knockoutPosition: "C3",
          id: "6fad1acc-b3c3-4a4d-b9b7-ea04986e2d90",
          name: "Mexico",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC3: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC4: {
          knockoutPosition: "C4",
          id: "de58b24c-b931-494d-8c2a-03c571795e38",
          name: "Saudi Arabia",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Saudi_Arabia.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD1: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD2: {
          knockoutPosition: "D4",
          id: "10181ea8-7d95-40cd-ac47-a0efc9f8eeb2",
          name: "Denmark",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Denmark.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD3: {
          knockoutPosition: "D2",
          id: "6e965538-13cc-4e5e-8c72-04b5c8120715",
          name: "Australia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Australia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD4: {
          knockoutPosition: "D3",
          id: "2202ef7b-8405-4760-93ad-0710488f4e50",
          name: "Tunisia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Tunisia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE1: {
          knockoutPosition: "E3",
          id: "22c5ee60-849c-4f20-bccc-5b700888f7fc",
          name: "Germany",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE2: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE3: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE4: {
          knockoutPosition: "E4",
          id: "8b2b5381-76fd-4ae7-a933-df34be431a88",
          name: "Costa Rica",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Costa_Rica.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF1: {
          knockoutPosition: "F3",
          id: "ccbca171-b733-4545-8f41-7e84e9a63f59",
          name: "Belgium",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Belgium.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF2: {
          knockoutPosition: "F2",
          id: "cb3aef3d-022d-4982-8e63-44f49cc888af",
          name: "Croatia",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
          advanceToS: true,
          advanceToF: false,
          advanceToChamp: false,
          outOfTourney: true,
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF3: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF4: {
          knockoutPosition: "F4",
          id: "2fedc3fc-7d9a-40f9-9395-e8df21c73ec2",
          name: "Canada",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG2: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG3: {
          knockoutPosition: "G4",
          id: "7c43d78e-e791-43cc-9421-d9bec279b1c9",
          name: "Serbia",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Serbia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG4: {
          knockoutPosition: "G3",
          id: "02701ddd-f4a0-4c91-bfd5-369ac1bfb821",
          name: "Cameroon",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Cameroon.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH1: {
          knockoutPosition: "H1",
          id: "f7af483c-fd0a-451d-8523-d4c18d3f6f58",
          name: "Portugal",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH2: {
          knockoutPosition: "H4",
          id: "7fd18d1f-5663-4c91-891d-42a232bd264a",
          name: "Ghana",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ghana.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH3: {
          knockoutPosition: "H3",
          id: "3af0c701-ee44-44ce-8bdc-27fafe223a96",
          name: "Uruguay",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Uruguay.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH4: {
          knockoutPosition: "H2",
          id: "c9ead2d7-8f16-4c3b-9b48-66c4c5a8df8a",
          name: "S. Korea",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/South_Korea.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ1: {
          knockoutPosition: "A1",
          id: "9644ae2e-80d8-4233-9021-14efbe59e9b0",
          name: "Netherlands",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        knockQ2: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ3: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ4: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ5: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ6: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ7: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ8: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS2: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS3: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS4: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF2: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockChamp: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        tiebreaker: 165,
        tourneyStage: 1,
        createdAt: "2022-12-21T18:06:25.610Z",
        updatedAt: "2022-12-21T18:06:25.627Z",
      },
      //stan
      {
        id: "00310c87-81b1-400c-b8f5-8deb2ac94b84",
        email: "jpatcollins@gmail.com",
        password:
          "$2b$05$WGg38pSnRKvuD0a62uAKHeHmBpfJRLMl0i6w8qW35w1Z94WBTi5M6",
        passwordUpdated: null,
        name: "Stanley",
        tempPW: "a48bb1e6-c141-4bd2-8d77-93c966d1258d",
        pwResetURL: "84c5ba4b-da02-4152-93fd-a4eb7afc1b11",
        admin: false,
        paid: true,
        groupA1: {
          knockoutPosition: "A1",
          id: "9644ae2e-80d8-4233-9021-14efbe59e9b0",
          name: "Netherlands",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA2: {
          knockoutPosition: "A3",
          id: "cf9588eb-66f0-4342-a9a4-c8a73e8496b5",
          name: "Ecuador",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ecuador.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA3: {
          knockoutPosition: "A2",
          id: "9cad8b16-047f-42f1-94e0-c74f132d16c1",
          name: "Senegal",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Senegal.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA4: {
          knockoutPosition: "A4",
          id: "a3117df5-ef2f-49a2-b6f4-3de82a37e0ba",
          name: "Qatar",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Qatar.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupB1: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB2: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB3: {
          knockoutPosition: "B4",
          id: "d30b2854-418d-493d-853b-5f1f311e47af",
          name: "Wales",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Wales.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB4: {
          knockoutPosition: "B3",
          id: "79a91911-ce36-46d8-9794-2e29c031605e",
          name: "Iran",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Iran.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC2: {
          knockoutPosition: "C3",
          id: "6fad1acc-b3c3-4a4d-b9b7-ea04986e2d90",
          name: "Mexico",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC3: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC4: {
          knockoutPosition: "C4",
          id: "de58b24c-b931-494d-8c2a-03c571795e38",
          name: "Saudi Arabia",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Saudi_Arabia.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD1: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD2: {
          knockoutPosition: "D4",
          id: "10181ea8-7d95-40cd-ac47-a0efc9f8eeb2",
          name: "Denmark",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Denmark.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD3: {
          knockoutPosition: "D2",
          id: "6e965538-13cc-4e5e-8c72-04b5c8120715",
          name: "Australia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Australia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD4: {
          knockoutPosition: "D3",
          id: "2202ef7b-8405-4760-93ad-0710488f4e50",
          name: "Tunisia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Tunisia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE1: {
          knockoutPosition: "E3",
          id: "22c5ee60-849c-4f20-bccc-5b700888f7fc",
          name: "Germany",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE2: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE3: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE4: {
          knockoutPosition: "E4",
          id: "8b2b5381-76fd-4ae7-a933-df34be431a88",
          name: "Costa Rica",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Costa_Rica.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF1: {
          knockoutPosition: "F3",
          id: "ccbca171-b733-4545-8f41-7e84e9a63f59",
          name: "Belgium",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Belgium.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF2: {
          knockoutPosition: "F2",
          id: "cb3aef3d-022d-4982-8e63-44f49cc888af",
          name: "Croatia",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
          advanceToS: true,
          advanceToF: false,
          advanceToChamp: false,
          outOfTourney: true,
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF3: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF4: {
          knockoutPosition: "F4",
          id: "2fedc3fc-7d9a-40f9-9395-e8df21c73ec2",
          name: "Canada",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG2: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG3: {
          knockoutPosition: "G4",
          id: "7c43d78e-e791-43cc-9421-d9bec279b1c9",
          name: "Serbia",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Serbia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG4: {
          knockoutPosition: "G3",
          id: "02701ddd-f4a0-4c91-bfd5-369ac1bfb821",
          name: "Cameroon",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Cameroon.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH1: {
          knockoutPosition: "H1",
          id: "f7af483c-fd0a-451d-8523-d4c18d3f6f58",
          name: "Portugal",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH2: {
          knockoutPosition: "H4",
          id: "7fd18d1f-5663-4c91-891d-42a232bd264a",
          name: "Ghana",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ghana.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH3: {
          knockoutPosition: "H3",
          id: "3af0c701-ee44-44ce-8bdc-27fafe223a96",
          name: "Uruguay",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Uruguay.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH4: {
          knockoutPosition: "H2",
          id: "c9ead2d7-8f16-4c3b-9b48-66c4c5a8df8a",
          name: "S. Korea",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/South_Korea.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ1: {
          knockoutPosition: "A1",
          id: "9644ae2e-80d8-4233-9021-14efbe59e9b0",
          name: "Netherlands",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        knockQ2: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ3: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ4: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ5: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ6: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ7: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ8: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS2: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS3: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS4: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF2: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockChamp: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        tiebreaker: 165,
        tourneyStage: 1,
        createdAt: "2022-12-21T18:06:25.610Z",
        updatedAt: "2022-12-21T18:06:25.627Z",
      },
      //pat
      {
        id: "a59cd1eb-369d-4c1e-aa50-0a87bd8d9103",
        email: "pat@gmail.com",
        password:
          "$2b$05$iH/MmH8NkoW1a10GSQffceXfyBny9GLZ0EhGcJE9P0K9QL/UTdeF.",
        passwordUpdated: null,
        name: "Pat",
        tempPW: "f21d292e-cc69-44f7-aea4-a7732fce68be",
        pwResetURL: "03441ffd-95ff-42ff-8e7c-065a195a1ffe",
        admin: false,
        paid: true,
        groupA1: {
          knockoutPosition: "A1",
          id: "9644ae2e-80d8-4233-9021-14efbe59e9b0",
          name: "Netherlands",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA2: {
          knockoutPosition: "A2",
          id: "9cad8b16-047f-42f1-94e0-c74f132d16c1",
          name: "Senegal",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Senegal.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA3: {
          knockoutPosition: "A3",
          id: "cf9588eb-66f0-4342-a9a4-c8a73e8496b5",
          name: "Ecuador",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ecuador.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA4: {
          knockoutPosition: "A4",
          id: "a3117df5-ef2f-49a2-b6f4-3de82a37e0ba",
          name: "Qatar",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Qatar.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupB1: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB2: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB3: {
          knockoutPosition: "B4",
          id: "d30b2854-418d-493d-853b-5f1f311e47af",
          name: "Wales",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Wales.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB4: {
          knockoutPosition: "B3",
          id: "79a91911-ce36-46d8-9794-2e29c031605e",
          name: "Iran",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Iran.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC2: {
          knockoutPosition: "C3",
          id: "6fad1acc-b3c3-4a4d-b9b7-ea04986e2d90",
          name: "Mexico",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC3: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC4: {
          knockoutPosition: "C4",
          id: "de58b24c-b931-494d-8c2a-03c571795e38",
          name: "Saudi Arabia",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Saudi_Arabia.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD1: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD2: {
          knockoutPosition: "D4",
          id: "10181ea8-7d95-40cd-ac47-a0efc9f8eeb2",
          name: "Denmark",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Denmark.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD3: {
          knockoutPosition: "D2",
          id: "6e965538-13cc-4e5e-8c72-04b5c8120715",
          name: "Australia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Australia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD4: {
          knockoutPosition: "D3",
          id: "2202ef7b-8405-4760-93ad-0710488f4e50",
          name: "Tunisia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Tunisia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE1: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE2: {
          knockoutPosition: "E3",
          id: "22c5ee60-849c-4f20-bccc-5b700888f7fc",
          name: "Germany",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE3: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE4: {
          knockoutPosition: "E4",
          id: "8b2b5381-76fd-4ae7-a933-df34be431a88",
          name: "Costa Rica",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Costa_Rica.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF1: {
          knockoutPosition: "F3",
          id: "ccbca171-b733-4545-8f41-7e84e9a63f59",
          name: "Belgium",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Belgium.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF2: {
          knockoutPosition: "F2",
          id: "cb3aef3d-022d-4982-8e63-44f49cc888af",
          name: "Croatia",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
          advanceToS: true,
          advanceToF: false,
          advanceToChamp: false,
          outOfTourney: true,
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF3: {
          knockoutPosition: "F4",
          id: "2fedc3fc-7d9a-40f9-9395-e8df21c73ec2",
          name: "Canada",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF4: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG2: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG3: {
          knockoutPosition: "G4",
          id: "7c43d78e-e791-43cc-9421-d9bec279b1c9",
          name: "Serbia",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Serbia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG4: {
          knockoutPosition: "G3",
          id: "02701ddd-f4a0-4c91-bfd5-369ac1bfb821",
          name: "Cameroon",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Cameroon.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH1: {
          knockoutPosition: "H3",
          id: "3af0c701-ee44-44ce-8bdc-27fafe223a96",
          name: "Uruguay",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Uruguay.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH2: {
          knockoutPosition: "H4",
          id: "7fd18d1f-5663-4c91-891d-42a232bd264a",
          name: "Ghana",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ghana.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH3: {
          knockoutPosition: "H1",
          id: "f7af483c-fd0a-451d-8523-d4c18d3f6f58",
          name: "Portugal",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH4: {
          knockoutPosition: "H2",
          id: "c9ead2d7-8f16-4c3b-9b48-66c4c5a8df8a",
          name: "S. Korea",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/South_Korea.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ1: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ2: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ3: {
          knockoutPosition: "F2",
          id: "cb3aef3d-022d-4982-8e63-44f49cc888af",
          name: "Croatia",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
          advanceToS: true,
          advanceToF: false,
          advanceToChamp: false,
          outOfTourney: true,
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ4: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ5: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ6: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ7: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ8: {
          knockoutPosition: "H1",
          id: "f7af483c-fd0a-451d-8523-d4c18d3f6f58",
          name: "Portugal",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS2: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS3: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS4: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF2: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockChamp: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        tiebreaker: 163,
        tourneyStage: 1,
        createdAt: "2022-12-21T18:06:25.611Z",
        updatedAt: "2022-12-21T18:06:25.627Z",
      },
      //kevin
      {
        id: "0f8c909e-3448-4bd2-a985-9e0f7d529a92",
        email: "kevin@gmail.com",
        password:
          "$2b$05$VAJJ0mZ74mUm1WkHM/VVqOTFi11N4PdHrk0w1/U1RGy0Ivye/O8cm",
        passwordUpdated: null,
        name: "Kevin",
        tempPW: "bb277aa8-5671-43d6-85ee-7887f281e81a",
        pwResetURL: "367a4fc5-fba6-4aba-822c-3d087d23b66c",
        admin: false,
        paid: false,
        groupA1: {
          knockoutPosition: "A3",
          id: "cf9588eb-66f0-4342-a9a4-c8a73e8496b5",
          name: "Ecuador",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ecuador.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA2: {
          knockoutPosition: "A2",
          id: "9cad8b16-047f-42f1-94e0-c74f132d16c1",
          name: "Senegal",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Senegal.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA3: {
          knockoutPosition: "A4",
          id: "a3117df5-ef2f-49a2-b6f4-3de82a37e0ba",
          name: "Qatar",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Qatar.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA4: {
          knockoutPosition: "A1",
          id: "9644ae2e-80d8-4233-9021-14efbe59e9b0",
          name: "Netherlands",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupB1: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB2: {
          knockoutPosition: "B3",
          id: "79a91911-ce36-46d8-9794-2e29c031605e",
          name: "Iran",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Iran.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB3: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB4: {
          knockoutPosition: "B4",
          id: "d30b2854-418d-493d-853b-5f1f311e47af",
          name: "Wales",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Wales.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC1: {
          knockoutPosition: "C3",
          id: "6fad1acc-b3c3-4a4d-b9b7-ea04986e2d90",
          name: "Mexico",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC2: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC3: {
          knockoutPosition: "C4",
          id: "de58b24c-b931-494d-8c2a-03c571795e38",
          name: "Saudi Arabia",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Saudi_Arabia.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC4: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD1: {
          knockoutPosition: "D3",
          id: "2202ef7b-8405-4760-93ad-0710488f4e50",
          name: "Tunisia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Tunisia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD2: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD3: {
          knockoutPosition: "D4",
          id: "10181ea8-7d95-40cd-ac47-a0efc9f8eeb2",
          name: "Denmark",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Denmark.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD4: {
          knockoutPosition: "D2",
          id: "6e965538-13cc-4e5e-8c72-04b5c8120715",
          name: "Australia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Australia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE1: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE2: {
          knockoutPosition: "E4",
          id: "8b2b5381-76fd-4ae7-a933-df34be431a88",
          name: "Costa Rica",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Costa_Rica.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE3: {
          knockoutPosition: "E3",
          id: "22c5ee60-849c-4f20-bccc-5b700888f7fc",
          name: "Germany",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE4: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF1: {
          knockoutPosition: "F3",
          id: "ccbca171-b733-4545-8f41-7e84e9a63f59",
          name: "Belgium",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Belgium.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF2: {
          knockoutPosition: "F2",
          id: "cb3aef3d-022d-4982-8e63-44f49cc888af",
          name: "Croatia",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
          advanceToS: true,
          advanceToF: false,
          advanceToChamp: false,
          outOfTourney: true,
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF3: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF4: {
          knockoutPosition: "F4",
          id: "2fedc3fc-7d9a-40f9-9395-e8df21c73ec2",
          name: "Canada",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG2: {
          knockoutPosition: "G4",
          id: "7c43d78e-e791-43cc-9421-d9bec279b1c9",
          name: "Serbia",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Serbia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG3: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG4: {
          knockoutPosition: "G3",
          id: "02701ddd-f4a0-4c91-bfd5-369ac1bfb821",
          name: "Cameroon",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Cameroon.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH1: {
          knockoutPosition: "H1",
          id: "f7af483c-fd0a-451d-8523-d4c18d3f6f58",
          name: "Portugal",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH2: {
          knockoutPosition: "H3",
          id: "3af0c701-ee44-44ce-8bdc-27fafe223a96",
          name: "Uruguay",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Uruguay.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH3: {
          knockoutPosition: "H2",
          id: "c9ead2d7-8f16-4c3b-9b48-66c4c5a8df8a",
          name: "S. Korea",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/South_Korea.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH4: {
          knockoutPosition: "H4",
          id: "7fd18d1f-5663-4c91-891d-42a232bd264a",
          name: "Ghana",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ghana.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ1: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ2: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ3: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ4: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ5: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ6: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ7: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ8: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS2: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS3: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS4: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF2: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockChamp: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        tiebreaker: 159,
        tourneyStage: 1,
        createdAt: "2022-12-21T18:06:25.610Z",
        updatedAt: "2022-12-21T18:06:25.627Z",
      },
      //sarah
      {
        id: "96a3d321-f140-45ff-b983-47f33a2565f6",
        email: "sarah@gmail.com",
        password:
          "$2b$05$vIo0jo7ZVYbapYN5EZu1xO8ESljwGuYXzgpTpEzzWzqGW98uwN.Wq",
        passwordUpdated: null,
        name: "Sarah",
        tempPW: "365d79ab-4b9d-43d6-b7ad-d95093f7d0cb",
        pwResetURL: "6dc455b6-245b-432e-bfe4-05516625d3c3",
        admin: false,
        paid: true,
        groupA1: {
          knockoutPosition: "A3",
          id: "cf9588eb-66f0-4342-a9a4-c8a73e8496b5",
          name: "Ecuador",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ecuador.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA2: {
          knockoutPosition: "A4",
          id: "a3117df5-ef2f-49a2-b6f4-3de82a37e0ba",
          name: "Qatar",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Qatar.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA3: {
          knockoutPosition: "A1",
          id: "9644ae2e-80d8-4233-9021-14efbe59e9b0",
          name: "Netherlands",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA4: {
          knockoutPosition: "A2",
          id: "9cad8b16-047f-42f1-94e0-c74f132d16c1",
          name: "Senegal",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Senegal.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupB1: {
          knockoutPosition: "B4",
          id: "d30b2854-418d-493d-853b-5f1f311e47af",
          name: "Wales",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Wales.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB2: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB3: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB4: {
          knockoutPosition: "B3",
          id: "79a91911-ce36-46d8-9794-2e29c031605e",
          name: "Iran",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Iran.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC2: {
          knockoutPosition: "C3",
          id: "6fad1acc-b3c3-4a4d-b9b7-ea04986e2d90",
          name: "Mexico",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC3: {
          knockoutPosition: "C4",
          id: "de58b24c-b931-494d-8c2a-03c571795e38",
          name: "Saudi Arabia",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Saudi_Arabia.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC4: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD1: {
          knockoutPosition: "D4",
          id: "10181ea8-7d95-40cd-ac47-a0efc9f8eeb2",
          name: "Denmark",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Denmark.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD2: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD3: {
          knockoutPosition: "D3",
          id: "2202ef7b-8405-4760-93ad-0710488f4e50",
          name: "Tunisia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Tunisia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD4: {
          knockoutPosition: "D2",
          id: "6e965538-13cc-4e5e-8c72-04b5c8120715",
          name: "Australia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Australia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE1: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE2: {
          knockoutPosition: "E3",
          id: "22c5ee60-849c-4f20-bccc-5b700888f7fc",
          name: "Germany",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE3: {
          knockoutPosition: "E4",
          id: "8b2b5381-76fd-4ae7-a933-df34be431a88",
          name: "Costa Rica",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Costa_Rica.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE4: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF1: {
          knockoutPosition: "F2",
          id: "cb3aef3d-022d-4982-8e63-44f49cc888af",
          name: "Croatia",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
          advanceToS: true,
          advanceToF: false,
          advanceToChamp: false,
          outOfTourney: true,
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF2: {
          knockoutPosition: "F4",
          id: "2fedc3fc-7d9a-40f9-9395-e8df21c73ec2",
          name: "Canada",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF3: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF4: {
          knockoutPosition: "F3",
          id: "ccbca171-b733-4545-8f41-7e84e9a63f59",
          name: "Belgium",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Belgium.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG1: {
          knockoutPosition: "G4",
          id: "7c43d78e-e791-43cc-9421-d9bec279b1c9",
          name: "Serbia",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Serbia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG2: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG3: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG4: {
          knockoutPosition: "G3",
          id: "02701ddd-f4a0-4c91-bfd5-369ac1bfb821",
          name: "Cameroon",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Cameroon.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH1: {
          knockoutPosition: "H1",
          id: "f7af483c-fd0a-451d-8523-d4c18d3f6f58",
          name: "Portugal",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH2: {
          knockoutPosition: "H4",
          id: "7fd18d1f-5663-4c91-891d-42a232bd264a",
          name: "Ghana",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ghana.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH3: {
          knockoutPosition: "H3",
          id: "3af0c701-ee44-44ce-8bdc-27fafe223a96",
          name: "Uruguay",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Uruguay.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH4: {
          knockoutPosition: "H2",
          id: "c9ead2d7-8f16-4c3b-9b48-66c4c5a8df8a",
          name: "S. Korea",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/South_Korea.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ1: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ2: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ3: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ4: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ5: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ6: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ7: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ8: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS2: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS3: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS4: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF1: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF2: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockChamp: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        tiebreaker: 42,
        tourneyStage: 1,
        createdAt: "2022-12-21T18:06:25.611Z",
        updatedAt: "2022-12-21T18:06:25.627Z",
      },
      //anthony
      {
        id: "5f774052-dd72-4c79-a0fb-c975c87dd8b5",
        email: "anthony@gmail.com",
        password:
          "$2b$05$SWnCaJHQ7bmn6Y4aGdeLKuoLFrp4jkREtOxrglpg1RNrp8JFg1NNm",
        passwordUpdated: null,
        name: "Anthony",
        tempPW: "a818d08f-f939-4120-b681-6c504180e28c",
        pwResetURL: "06e15d8a-105b-4aa3-b06a-7e05eda2213f",
        admin: false,
        paid: true,
        groupA1: {
          knockoutPosition: "A1",
          id: "9644ae2e-80d8-4233-9021-14efbe59e9b0",
          name: "Netherlands",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Netherlands.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA2: {
          knockoutPosition: "A2",
          id: "9cad8b16-047f-42f1-94e0-c74f132d16c1",
          name: "Senegal",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Senegal.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA3: {
          knockoutPosition: "A3",
          id: "cf9588eb-66f0-4342-a9a4-c8a73e8496b5",
          name: "Ecuador",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ecuador.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupA4: {
          knockoutPosition: "A4",
          id: "a3117df5-ef2f-49a2-b6f4-3de82a37e0ba",
          name: "Qatar",
          group: "A",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Qatar.jpg",
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
          createdAt: "2022-12-21T18:06:25.575Z",
          updatedAt: "2022-12-21T18:06:25.626Z",
        },
        groupB1: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB2: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB3: {
          knockoutPosition: "B4",
          id: "d30b2854-418d-493d-853b-5f1f311e47af",
          name: "Wales",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Wales.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupB4: {
          knockoutPosition: "B3",
          id: "79a91911-ce36-46d8-9794-2e29c031605e",
          name: "Iran",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Iran.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC2: {
          knockoutPosition: "C3",
          id: "6fad1acc-b3c3-4a4d-b9b7-ea04986e2d90",
          name: "Mexico",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Mexico.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC3: {
          knockoutPosition: "C2",
          id: "760ef2de-46d7-4651-ac2b-23576ee9bc81",
          name: "Poland",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Poland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupC4: {
          knockoutPosition: "C4",
          id: "de58b24c-b931-494d-8c2a-03c571795e38",
          name: "Saudi Arabia",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Saudi_Arabia.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD1: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD2: {
          knockoutPosition: "D4",
          id: "10181ea8-7d95-40cd-ac47-a0efc9f8eeb2",
          name: "Denmark",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Denmark.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD3: {
          knockoutPosition: "D3",
          id: "2202ef7b-8405-4760-93ad-0710488f4e50",
          name: "Tunisia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Tunisia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupD4: {
          knockoutPosition: "D2",
          id: "6e965538-13cc-4e5e-8c72-04b5c8120715",
          name: "Australia",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Australia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE1: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE2: {
          knockoutPosition: "E3",
          id: "22c5ee60-849c-4f20-bccc-5b700888f7fc",
          name: "Germany",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Germany.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE3: {
          knockoutPosition: "E1",
          id: "a31042dc-57b2-492e-8da1-5c8ecfd7799a",
          name: "Japan",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Japan.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupE4: {
          knockoutPosition: "E4",
          id: "8b2b5381-76fd-4ae7-a933-df34be431a88",
          name: "Costa Rica",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Costa_Rica.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF1: {
          knockoutPosition: "F3",
          id: "ccbca171-b733-4545-8f41-7e84e9a63f59",
          name: "Belgium",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Belgium.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF2: {
          knockoutPosition: "F2",
          id: "cb3aef3d-022d-4982-8e63-44f49cc888af",
          name: "Croatia",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
          advanceToS: true,
          advanceToF: false,
          advanceToChamp: false,
          outOfTourney: true,
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF3: {
          knockoutPosition: "F1",
          id: "bd4531a7-9c7f-4a10-952a-0083a7572086",
          name: "Morocco",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Morocco.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupF4: {
          knockoutPosition: "F4",
          id: "2fedc3fc-7d9a-40f9-9395-e8df21c73ec2",
          name: "Canada",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Canada.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG2: {
          knockoutPosition: "G2",
          id: "14ac6710-044d-46ef-8a7b-89fe49e19f39",
          name: "Switz",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Switzerland.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG3: {
          knockoutPosition: "G3",
          id: "02701ddd-f4a0-4c91-bfd5-369ac1bfb821",
          name: "Cameroon",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Cameroon.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupG4: {
          knockoutPosition: "G4",
          id: "7c43d78e-e791-43cc-9421-d9bec279b1c9",
          name: "Serbia",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Serbia.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH1: {
          knockoutPosition: "H1",
          id: "f7af483c-fd0a-451d-8523-d4c18d3f6f58",
          name: "Portugal",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH2: {
          knockoutPosition: "H3",
          id: "3af0c701-ee44-44ce-8bdc-27fafe223a96",
          name: "Uruguay",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Uruguay.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH3: {
          knockoutPosition: "H2",
          id: "c9ead2d7-8f16-4c3b-9b48-66c4c5a8df8a",
          name: "S. Korea",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/South_Korea.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        groupH4: {
          knockoutPosition: "H4",
          id: "7fd18d1f-5663-4c91-891d-42a232bd264a",
          name: "Ghana",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Ghana.jpg",
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
          createdAt: "2022-12-21T18:06:25.578Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ1: {
          knockoutPosition: "B2",
          id: "aa7b30ec-1b47-4ffa-a69b-b5c1c2e74b4b",
          name: "USA",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/United_States.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ2: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ3: {
          knockoutPosition: "F2",
          id: "cb3aef3d-022d-4982-8e63-44f49cc888af",
          name: "Croatia",
          group: "F",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Croatia.jpg",
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
          advanceToS: true,
          advanceToF: false,
          advanceToChamp: false,
          outOfTourney: true,
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ4: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ5: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ6: {
          knockoutPosition: "D1",
          id: "73bd56d3-1ae0-4d85-92df-076333034868",
          name: "France",
          group: "D",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/France.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ7: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockQ8: {
          knockoutPosition: "H1",
          id: "f7af483c-fd0a-451d-8523-d4c18d3f6f58",
          name: "Portugal",
          group: "H",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Portugal.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS1: {
          knockoutPosition: "C1",
          id: "b995ae30-cc9c-405d-b979-96a6c1069c63",
          name: "Argentina",
          group: "C",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Argentina.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS2: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS3: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockS4: {
          knockoutPosition: "E2",
          id: "04e854fd-0087-49df-b281-9d5d3a6a9757",
          name: "Spain",
          group: "E",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Spain.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF1: {
          knockoutPosition: "G1",
          id: "3a96d9a0-b316-4090-b0f5-381e4ee426bd",
          name: "Brasil",
          group: "G",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/Brazil.jpg",
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
          createdAt: "2022-12-21T18:06:25.577Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockF2: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        knockChamp: {
          knockoutPosition: "B1",
          id: "7f100efd-8666-48ae-8378-fe0e0f7b4865",
          name: "England",
          group: "B",
          flag: "https://www.sciencekids.co.nz/images/pictures/flags680/England.jpg",
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
          createdAt: "2022-12-21T18:06:25.576Z",
          updatedAt: "2022-12-21T18:06:25.627Z",
        },
        tiebreaker: 155,
        tourneyStage: 1,
        createdAt: "2022-12-21T18:06:25.610Z",
        updatedAt: "2022-12-21T18:06:25.627Z",
      },
    ];
  });

  describe("Calcs leaderboard", () => {
    let names, scores, tieExists, answer;

    describe("no ties", () => {
      // it("calculates no ties correctly", () => {
      //   users = users.filter((part) => part.name !== "Stanley");
      //   answer = currentScoresObj(users, teams, 100);
      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});
      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});
      //   expect(names["1"]).to.equal("Joe");
      //   expect(names["2"]).to.equal("Kelly");
      //   expect(names["3"]).to.equal("Coach Raiff");
      //   expect(names["4"]).to.equal("E");
      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(51);
      //   expect(scores["3"]).to.equal(49);
      //   expect(scores["4"]).to.equal(39);
      // });
    });

    describe("with a tie", () => {
      let frank, sally, jill, mark, tieNames;

      // it("scenario #1 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 98
      //         : user.name === "Stanley"
      //         ? 102
      //         : user.tiebreaker;

      //     return user;
      //   });

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Joe");
      //   expect(names["2"]).to.equal("Stanley");
      //   expect(names["3"]).to.equal("Kelly");
      //   expect(names["4"]).to.equal("Coach Raiff");
      //   expect(names["5"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(49);
      //   expect(scores["5"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      // });

      // it("scenario #1 - 3+ users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe" || user.name === "Stanley"
      //         ? 102
      //         : user.tiebreaker;

      //     if (user.name === "Stanley") {
      //       frank = addFakeUser(user, "Frank");
      //       sally = addFakeUser(user, "Sally");
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   sally.tiebreaker = 98;

      //   users = [...users, frank, sally, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Sally");
      //   expect(names["2"]).to.equal("Joe");
      //   expect(names["3"]).to.equal("Stanley");
      //   expect(names["4"]).to.equal("Frank");
      //   expect(names["5"]).to.equal("Jill");
      //   expect(names["6"]).to.equal("Kelly");
      //   expect(names["7"]).to.equal("Coach Raiff");
      //   expect(names["8"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(92);
      //   expect(scores["5"]).to.equal(92);
      //   expect(scores["6"]).to.equal(51);
      //   expect(scores["7"]).to.equal(49);
      //   expect(scores["8"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(true);
      //   expect(tieExists["3"]).to.equal(true);
      //   expect(tieExists["4"]).to.equal(true);
      //   expect(tieExists["5"]).to.equal(true);
      //   expect(tieExists["6"]).to.equal(false);
      //   expect(tieExists["7"]).to.equal(false);
      //   expect(tieExists["8"]).to.equal(false);
      // });

      // it("scenario #2 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 102
      //         : user.name === "Stanley"
      //         ? 98
      //         : user.tiebreaker;

      //     return user;
      //   });

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Stanley");
      //   expect(names["2"]).to.equal("Joe");
      //   expect(names["3"]).to.equal("Kelly");
      //   expect(names["4"]).to.equal("Coach Raiff");
      //   expect(names["5"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(49);
      //   expect(scores["5"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      // });

      // it("scenario #2 - 3+ users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 102
      //         : user.name === "Stanley"
      //         ? 98
      //         : user.tiebreaker;

      //     if (user.name === "Joe") {
      //       frank = addFakeUser(user, "Frank");
      //     }

      //     if (user.name === "Kelly") {
      //       user.groupC1 = "Argentina";
      //       user.groupC3 = "Poland";
      //       user.groupC3 = "Saudi Arabia";
      //       user.groupD2 = "Denmark";
      //       user.groupD4 = "Tunisia";
      //       user.knockQ1 = "Ecuador";
      //       user.knockQ3 = "Canada";
      //       user.knockQ8 = "Cameroon";
      //       user.knockS1 = "Argentina";
      //       user.knockS2 = "Brasil";
      //       user.knockS4 = "Cameroon";
      //       user.knockF1 = "Argentina";
      //       user.knockF2 = "Australia";
      //       user.knockChamp = "Argentina";
      //     }

      //     return user;
      //   });

      //   users = [...users, frank];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Frank", "Joe"];

      //   expect(names["1"]).to.equal("Kelly");
      //   expect(names["2"]).to.equal("Stanley");
      //   expect(tieNames.includes(names["3"])).to.equal(true);
      //   expect(tieNames.includes(names["4"])).to.equal(true);
      //   expect(names["5"]).to.equal("Coach Raiff");
      //   expect(names["6"]).to.equal("E");

      //   expect(scores["1"]).to.equal(93);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(92);
      //   expect(scores["5"]).to.equal(49);
      //   expect(scores["6"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(true);
      //   expect(tieExists["4"]).to.equal(true);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      // });

      // it("scenario #3 - only 2 users tied", () => {
      //   //test with 2 users tied at one score, and 2 users tied at another score

      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 100
      //         : user.name === "Stanley"
      //         ? 98
      //         : user.tiebreaker;

      //     if (user.name === "Kelly") {
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   jill.tiebreaker = 90;

      //   users = [...users, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Joe");
      //   expect(names["2"]).to.equal("Stanley");
      //   expect(names["3"]).to.equal("Jill");
      //   expect(names["4"]).to.equal("Kelly");
      //   expect(names["5"]).to.equal("Coach Raiff");
      //   expect(names["6"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(51);
      //   expect(scores["5"]).to.equal(49);
      //   expect(scores["6"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      // });

      // it("scenario #3 - 3+ users tied", () => {
      //   //test with ties in the middle of the pack too
      //   //test with 2 users tied at one score, and 3+ users tied at another score

      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 100
      //         : user.name === "Stanley"
      //         ? 98
      //         : user.tiebreaker;

      //     if (user.name === "Stanley") {
      //       frank = addFakeUser(user, "Frank");
      //       sally = addFakeUser(user, "Sally");
      //       jill = addFakeUser(user, "Jill");
      //       mark = addFakeUser(user, "Mark");
      //     }

      //     return user;
      //   });

      //   frank.knockChamp = "Australia";
      //   jill.knockChamp = "Australia";
      //   mark.knockChamp = "Australia";

      //   jill.tiebreaker = 100;
      //   frank.tiebreaker = 113;

      //   users = [...users, frank, sally, jill, mark];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Stanley", "Sally"];

      //   expect(names["1"]).to.equal("Joe");
      //   expect(tieNames.includes(names["2"])).to.equal(true);
      //   expect(tieNames.includes(names["3"])).to.equal(true);
      //   expect(names["4"]).to.equal("Jill");
      //   expect(names["5"]).to.equal("Mark");
      //   expect(names["6"]).to.equal("Frank");
      //   expect(names["7"]).to.equal("Kelly");
      //   expect(names["8"]).to.equal("Coach Raiff");
      //   expect(names["9"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(82);
      //   expect(scores["5"]).to.equal(82);
      //   expect(scores["6"]).to.equal(82);
      //   expect(scores["7"]).to.equal(51);
      //   expect(scores["8"]).to.equal(49);
      //   expect(scores["9"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(true);
      //   expect(tieExists["3"]).to.equal(true);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      //   expect(tieExists["7"]).to.equal(false);
      //   expect(tieExists["8"]).to.equal(false);
      //   expect(tieExists["9"]).to.equal(false);
      // });

      // it("scenario #4 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 98
      //         : user.name === "Stanley"
      //         ? 100
      //         : user.tiebreaker;

      //     return user;
      //   });

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Stanley");
      //   expect(names["2"]).to.equal("Joe");
      //   expect(names["3"]).to.equal("Kelly");
      //   expect(names["4"]).to.equal("Coach Raiff");
      //   expect(names["5"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(49);
      //   expect(scores["5"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      // });

      // it("scenario #4 - 3+ users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 98
      //         : user.name === "Stanley"
      //         ? 100
      //         : user.tiebreaker;

      //     if (user.name === "Stanley") {
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   users = [...users, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Stanley", "Jill"];

      //   expect(tieNames.includes(names["1"])).to.equal(true);
      //   expect(tieNames.includes(names["2"])).to.equal(true);
      //   expect(names["3"]).to.equal("Joe");
      //   expect(names["4"]).to.equal("Kelly");
      //   expect(names["5"]).to.equal("Coach Raiff");
      //   expect(names["6"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(51);
      //   expect(scores["5"]).to.equal(49);
      //   expect(scores["6"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(true);
      //   expect(tieExists["2"]).to.equal(true);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      // });

      // it("scenario #5 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 100
      //         : user.name === "Stanley"
      //         ? 106
      //         : user.tiebreaker;

      //     if (user.name === "E") {
      //       mark = addFakeUser(user, "Mark");
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   mark.tiebreaker = 100;
      //   jill.tiebreaker = 100;

      //   users = [...users, mark, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Mark", "Jill"];

      //   expect(names["1"]).to.equal("Joe");
      //   expect(names["2"]).to.equal("Stanley");
      //   expect(names["3"]).to.equal("Kelly");
      //   expect(names["4"]).to.equal("Coach Raiff");
      //   expect(tieNames.includes(names["5"])).to.equal(true);
      //   expect(tieNames.includes(names["6"])).to.equal(true);
      //   expect(names["7"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(49);
      //   expect(scores["5"]).to.equal(39);
      //   expect(scores["6"]).to.equal(39);
      //   expect(scores["7"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(true);
      //   expect(tieExists["6"]).to.equal(true);
      //   expect(tieExists["7"]).to.equal(false);
      // });

      // it("scenario #5 - 3+ users tied", () => {
      //   //test with ties in the middle of the pack too
      //   //test with 2 users tied at one score, and 2 users tied at another score
      //   //test with 2 users tied at one score, and 3+ users tied at another score

      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 100
      //         : user.name === "Stanley"
      //         ? 106
      //         : user.tiebreaker;

      //     if (user.name === "Stanley") {
      //       frank = addFakeUser(user, "Frank");
      //       sally = addFakeUser(user, "Sally");
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   frank.groupA2 = "Qatar";
      //   frank.groupA4 = "Netherlands";
      //   sally.groupA2 = "Qatar";
      //   sally.groupA4 = "Netherlands";
      //   jill.groupA2 = "Qatar";
      //   jill.groupA4 = "Netherlands";

      //   jill.tiebreaker = 100;

      //   users = [...users, frank, sally, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Frank", "Sally"];

      //   expect(names["1"]).to.equal("Joe");
      //   expect(names["2"]).to.equal("Stanley");
      //   expect(names["3"]).to.equal("Jill");
      //   expect(tieNames.includes(names["4"])).to.equal(true);
      //   expect(tieNames.includes(names["5"])).to.equal(true);
      //   expect(names["6"]).to.equal("Kelly");
      //   expect(names["7"]).to.equal("Coach Raiff");
      //   expect(names["8"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(90);
      //   expect(scores["4"]).to.equal(90);
      //   expect(scores["5"]).to.equal(90);
      //   expect(scores["6"]).to.equal(51);
      //   expect(scores["7"]).to.equal(49);
      //   expect(scores["8"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(true);
      //   expect(tieExists["5"]).to.equal(true);
      //   expect(tieExists["6"]).to.equal(false);
      //   expect(tieExists["7"]).to.equal(false);
      //   expect(tieExists["8"]).to.equal(false);
      // });

      // it("scenario #6 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 102
      //         : user.name === "Stanley"
      //         ? 100
      //         : user.tiebreaker;

      //     if (user.name === "Kelly") {
      //       user.groupC1 = "Argentina";
      //       user.groupC3 = "Poland";
      //       user.groupC3 = "Saudi Arabia";
      //       user.groupD2 = "Denmark";
      //       user.groupD4 = "Tunisia";
      //       user.knockQ1 = "Ecuador";
      //       user.knockQ3 = "Canada";
      //       user.knockQ8 = "Cameroon";
      //       user.knockS1 = "Argentina";
      //       user.knockS2 = "Brasil";
      //       user.knockS4 = "Cameroon";
      //       user.knockF1 = "Argentina";
      //       user.knockF2 = "Australia";
      //       user.knockChamp = "Argentina";
      //     }

      //     return user;
      //   });

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Kelly");
      //   expect(names["2"]).to.equal("Stanley");
      //   expect(names["3"]).to.equal("Joe");
      //   expect(names["4"]).to.equal("Coach Raiff");
      //   expect(names["5"]).to.equal("E");

      //   expect(scores["1"]).to.equal(93);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(49);
      //   expect(scores["5"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      // });

      // it("scenario #6 - 3+ users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 102
      //         : user.name === "Stanley"
      //         ? 100
      //         : user.tiebreaker;

      //     if (user.name === "Joe") {
      //       frank = addFakeUser(user, "Frank");
      //     }

      //     return user;
      //   });

      //   users = [...users, frank];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Joe", "Frank"];

      //   expect(names["1"]).to.equal("Stanley");
      //   expect(tieNames.includes(names["2"])).to.equal(true);
      //   expect(tieNames.includes(names["3"])).to.equal(true);
      //   expect(names["4"]).to.equal("Kelly");
      //   expect(names["5"]).to.equal("Coach Raiff");
      //   expect(names["6"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(51);
      //   expect(scores["5"]).to.equal(49);
      //   expect(scores["6"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(true);
      //   expect(tieExists["3"]).to.equal(true);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      // });

      // it("scenario #7 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 102
      //         : user.name === "Stanley"
      //         ? 105
      //         : user.tiebreaker;

      //     if (user.name === "E") {
      //       sally = addFakeUser(user, "Sally");
      //     }

      //     return user;
      //   });

      //   sally.tiebreaker = 110;

      //   users = [...users, sally];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Joe");
      //   expect(names["2"]).to.equal("Stanley");
      //   expect(names["3"]).to.equal("Kelly");
      //   expect(names["4"]).to.equal("Coach Raiff");
      //   expect(names["5"]).to.equal("Sally");
      //   expect(names["6"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(49);
      //   expect(scores["5"]).to.equal(39);
      //   expect(scores["6"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      // });

      // it("scenario #7 - 3+ users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 102
      //         : user.name === "Stanley"
      //         ? 110
      //         : user.tiebreaker;

      //     if (user.name === "Joe") {
      //       frank = addFakeUser(user, "Frank");
      //       mark = addFakeUser(user, "Mark");
      //       sally = addFakeUser(user, "Sally");
      //     }

      //     return user;
      //   });

      //   frank.tiebreaker = 106;
      //   mark.tiebreaker = 101;
      //   sally.tiebreaker = 106;

      //   users = [...users, frank, mark, sally];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Sally", "Frank"];

      //   expect(names["1"]).to.equal("Mark");
      //   expect(names["2"]).to.equal("Joe");
      //   expect(tieNames.includes(names["3"])).to.equal(true);
      //   expect(tieNames.includes(names["4"])).to.equal(true);
      //   expect(names["5"]).to.equal("Stanley");
      //   expect(names["6"]).to.equal("Kelly");
      //   expect(names["7"]).to.equal("Coach Raiff");
      //   expect(names["8"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(92);
      //   expect(scores["5"]).to.equal(92);
      //   expect(scores["6"]).to.equal(51);
      //   expect(scores["7"]).to.equal(49);
      //   expect(scores["8"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(true);
      //   expect(tieExists["4"]).to.equal(true);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      //   expect(tieExists["7"]).to.equal(false);
      //   expect(tieExists["8"]).to.equal(false);
      // });

      // it("scenario #8 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 120
      //         : user.name === "Stanley"
      //         ? 105
      //         : user.tiebreaker;

      //     if (user.name === "Kelly") {
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   jill.tiebreaker = 110;

      //   users = [...users, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Stanley");
      //   expect(names["2"]).to.equal("Joe");
      //   expect(names["3"]).to.equal("Jill");
      //   expect(names["4"]).to.equal("Kelly");
      //   expect(names["5"]).to.equal("Coach Raiff");
      //   expect(names["6"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(51);
      //   expect(scores["5"]).to.equal(49);
      //   expect(scores["6"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      // });

      // it("scenario #8 - 3+ users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 120
      //         : user.name === "Stanley"
      //         ? 105
      //         : user.tiebreaker;

      //     if (user.name === "Joe") {
      //       frank = addFakeUser(user, "Frank");
      //       mark = addFakeUser(user, "Mark");
      //       sally = addFakeUser(user, "Sally");
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   frank.tiebreaker = 106;
      //   mark.tiebreaker = 150;
      //   sally.tiebreaker = 150;
      //   jill.tiebreaker = 179;

      //   users = [...users, frank, mark, sally, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Mark", "Sally"];

      //   expect(names["1"]).to.equal("Stanley");
      //   expect(names["2"]).to.equal("Frank");
      //   expect(names["3"]).to.equal("Joe");
      //   expect(tieNames.includes(names["4"])).to.equal(true);
      //   expect(tieNames.includes(names["5"])).to.equal(true);
      //   expect(names["6"]).to.equal("Jill");
      //   expect(names["7"]).to.equal("Kelly");
      //   expect(names["8"]).to.equal("Coach Raiff");
      //   expect(names["9"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(92);
      //   expect(scores["5"]).to.equal(92);
      //   expect(scores["6"]).to.equal(92);
      //   expect(scores["7"]).to.equal(51);
      //   expect(scores["8"]).to.equal(49);
      //   expect(scores["9"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(true);
      //   expect(tieExists["5"]).to.equal(true);
      //   expect(tieExists["6"]).to.equal(false);
      //   expect(tieExists["7"]).to.equal(false);
      //   expect(tieExists["8"]).to.equal(false);
      //   expect(tieExists["8"]).to.equal(false);
      // });

      // it("scenario #9 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 98
      //         : user.name === "Stanley"
      //         ? 90
      //         : user.tiebreaker;

      //     if (user.name === "Coach Raiff") {
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   jill.tiebreaker = 60;

      //   users = [...users, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   expect(names["1"]).to.equal("Joe");
      //   expect(names["2"]).to.equal("Stanley");
      //   expect(names["3"]).to.equal("Kelly");
      //   expect(names["4"]).to.equal("Jill");
      //   expect(names["5"]).to.equal("Coach Raiff");
      //   expect(names["6"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(49);
      //   expect(scores["5"]).to.equal(49);
      //   expect(scores["6"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(false);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      // });

      // it("scenario #9 - 3+ users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe"
      //         ? 98
      //         : user.name === "Stanley"
      //         ? 90
      //         : user.tiebreaker;

      //     if (user.name === "Joe") {
      //       frank = addFakeUser(user, "Frank");
      //       mark = addFakeUser(user, "Mark");
      //       sally = addFakeUser(user, "Sally");
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   frank.tiebreaker = 99;
      //   mark.tiebreaker = 96;
      //   sally.tiebreaker = 96;
      //   jill.tiebreaker = 95;

      //   users = [...users, frank, mark, sally, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Mark", "Sally"];

      //   expect(names["1"]).to.equal("Frank");
      //   expect(names["2"]).to.equal("Joe");
      //   expect(tieNames.includes(names["3"])).to.equal(true);
      //   expect(tieNames.includes(names["4"])).to.equal(true);
      //   expect(names["5"]).to.equal("Jill");
      //   expect(names["6"]).to.equal("Stanley");
      //   expect(names["7"]).to.equal("Kelly");
      //   expect(names["8"]).to.equal("Coach Raiff");
      //   expect(names["9"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(92);
      //   expect(scores["5"]).to.equal(92);
      //   expect(scores["6"]).to.equal(92);
      //   expect(scores["7"]).to.equal(51);
      //   expect(scores["8"]).to.equal(49);
      //   expect(scores["9"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(false);
      //   expect(tieExists["2"]).to.equal(false);
      //   expect(tieExists["3"]).to.equal(true);
      //   expect(tieExists["4"]).to.equal(true);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      //   expect(tieExists["7"]).to.equal(false);
      //   expect(tieExists["8"]).to.equal(false);
      //   expect(tieExists["8"]).to.equal(false);
      // });

      // it("scenario #11 - only 2 users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe" || user.name === "Stanley"
      //         ? 98
      //         : user.tiebreaker;

      //     if (user.name === "Kelly") {
      //       mark = addFakeUser(user, "Mark");
      //     }

      //     return user;
      //   });

      //   users = [...users, mark];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Kelly", "Mark", "Stanley", "Joe"];

      //   expect(tieNames.includes(names["1"])).to.equal(true);
      //   expect(tieNames.includes(names["2"])).to.equal(true);
      //   expect(tieNames.includes(names["3"])).to.equal(true);
      //   expect(tieNames.includes(names["4"])).to.equal(true);
      //   expect(names["5"]).to.equal("Coach Raiff");
      //   expect(names["6"]).to.equal("E");

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(51);
      //   expect(scores["4"]).to.equal(51);
      //   expect(scores["5"]).to.equal(49);
      //   expect(scores["6"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(true);
      //   expect(tieExists["2"]).to.equal(true);
      //   expect(tieExists["3"]).to.equal(true);
      //   expect(tieExists["4"]).to.equal(true);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(false);
      // });

      // it("scenario #11 - 3+ users tied", () => {
      //   users = users.map((user) => {
      //     user.tiebreaker =
      //       user.name === "Joe" || user.name === "Stanley"
      //         ? 98
      //         : user.tiebreaker;

      //     if (user.name === "Joe") {
      //       frank = addFakeUser(user, "Frank");
      //     }

      //     if (user.name === "E") {
      //       mark = addFakeUser(user, "Mark");
      //       sally = addFakeUser(user, "Sally");
      //       jill = addFakeUser(user, "Jill");
      //     }

      //     return user;
      //   });

      //   users = [...users, frank, mark, sally, jill];

      //   answer = currentScoresObj(users, teams, 100);

      //   names = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.name;
      //     return a;
      //   }, {});

      //   scores = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.total;
      //     return a;
      //   }, {});

      //   tieExists = answer.reduce((a, userObj) => {
      //     a[userObj.rank] = userObj.tieExists;
      //     return a;
      //   }, {});

      //   tieNames = ["Joe", "Stanley", "Jill", "Frank", "Mark", "Sally", "E"];

      //   expect(tieNames.includes(names["1"])).to.equal(true);
      //   expect(tieNames.includes(names["2"])).to.equal(true);
      //   expect(tieNames.includes(names["3"])).to.equal(true);
      //   expect(names["4"]).to.equal("Kelly");
      //   expect(names["5"]).to.equal("Coach Raiff");
      //   expect(tieNames.includes(names["6"])).to.equal(true);
      //   expect(tieNames.includes(names["7"])).to.equal(true);
      //   expect(tieNames.includes(names["8"])).to.equal(true);
      //   expect(tieNames.includes(names["9"])).to.equal(true);

      //   expect(scores["1"]).to.equal(92);
      //   expect(scores["2"]).to.equal(92);
      //   expect(scores["3"]).to.equal(92);
      //   expect(scores["4"]).to.equal(51);
      //   expect(scores["5"]).to.equal(49);
      //   expect(scores["6"]).to.equal(39);
      //   expect(scores["7"]).to.equal(39);
      //   expect(scores["8"]).to.equal(39);
      //   expect(scores["9"]).to.equal(39);

      //   expect(tieExists["1"]).to.equal(true);
      //   expect(tieExists["2"]).to.equal(true);
      //   expect(tieExists["3"]).to.equal(true);
      //   expect(tieExists["4"]).to.equal(false);
      //   expect(tieExists["5"]).to.equal(false);
      //   expect(tieExists["6"]).to.equal(true);
      //   expect(tieExists["7"]).to.equal(true);
      //   expect(tieExists["8"]).to.equal(true);
      //   expect(tieExists["8"]).to.equal(true);
      // });
    });
  });

  describe("Calcs everyone's overall scores", () => {
    let user, gameAnswer, koNonCompletedGames, koRoundTotal;

    const usersObj = {
      Joe: {
        groups: {
          A: [
            { points: 3, className: "blue" },
            { points: 0, className: "" },
            { points: 0, className: "" },
            { points: 1, className: "green" },
          ],
          B: [
            { points: 3, className: "blue" },
            { points: 2, className: "purple" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          C: [
            { points: 3, className: "blue" },
            { points: 0, className: "" },
            { points: 0, className: "" },
            { points: 1, className: "green" },
          ],
          D: [
            { points: 3, className: "blue" },
            { points: 0, className: "" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          E: [
            { points: 0, className: "" },
            { points: 2, className: "purple" },
            { points: 0, className: "" },
            { points: 1, className: "green" },
          ],
          F: [
            { points: 0, className: "" },
            { points: 2, className: "purple" },
            { points: 0, className: "" },
            { points: 1, className: "green" },
          ],
          G: [
            { points: 3, className: "blue" },
            { points: 2, className: "purple" },
            { points: 0, className: "" },
            { points: 0, className: "" },
          ],
          H: [
            { points: 3, className: "blue" },
            { points: 0, className: "" },
            { points: 1, className: "green" },
            { points: 0, className: "" },
          ],
        },
        midStage3: 1,
        midStage3Total: 4,
        groupsFinishedTotal: 31,
        koRounds: {
          quarters: {
            Q1: {
              usersPick: { name: "Netherlands" },
              teamThatAdvanced: { name: "Netherlands" },
              usersPickClass: "correct",
              points: 2,
            },
            Q2: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "correct",
              points: 2,
            },
            Q3: {
              usersPick: { name: "Japan" },
              teamThatAdvanced: { name: "Croatia" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q4: {
              usersPick: { name: "Brasil" },
              teamThatAdvanced: { name: "Brasil" },
              usersPickClass: "correct",
              points: 2,
            },
            Q5: {
              usersPick: { name: "England" },
              teamThatAdvanced: { name: "England" },
              usersPickClass: "correct",
              points: 2,
            },
            Q6: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 2,
            },
            Q7: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Morocco" },
              usersPickClass: "wrong",
              points: 0,
            },
            Q8: {
              usersPick: { name: "Switz" },
              teamThatAdvanced: { name: "Portugal" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
          semis: {
            S1: {
              usersPick: { name: "Argentina" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "correct",
              points: 4,
            },
            S2: {
              usersPick: { name: "Brasil" },
              teamThatAdvanced: { name: "Croatia" },
              usersPickClass: "wrong",
              points: 0,
            },
            S3: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 4,
            },
            S4: {
              usersPick: { name: "Spain" },
              teamThatAdvanced: { name: "Morocco" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
          final: {
            F1: {
              usersPick: { name: "Brasil" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "wrong",
              points: 0,
            },
            F2: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "France" },
              usersPickClass: "correct",
              points: 6,
            },
          },

          champion: {
            Champ: {
              usersPick: { name: "France" },
              teamThatAdvanced: { name: "Argentina" },
              usersPickClass: "wrong",
              points: 0,
            },
          },
        },
        midStage5_Q: 1,
        midStage5Total_Q: 2,
        koRoundFinishedTotal_Q: 10,

        midStage5_S: 1,
        midStage5Total_S: 4,
        koRoundFinishedTotal_S: 8,

        midStage5_F: 1,
        midStage5Total_F: 0,
        koRoundFinishedTotal_F: 6,

        koRoundFinishedTotal_C: 0,
      },

      // Stanley: {
      //   groups: {
      //     A: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     B: [
      //       { points: 3, className: "blue" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     C: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     D: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     E: [
      //       { points: 0, className: "" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     F: [
      //       { points: 0, className: "" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     G: [
      //       { points: 3, className: "blue" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     H: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //       { points: 0, className: "" },
      //     ],
      //   },
      //   midStage3: 2,
      //   midStage3Total: 9,
      //   groupsFinishedTotal: 31,
      // },

      // Pat: {
      //   groups: {
      //     A: [
      //       { points: 3, className: "blue" },
      //       { points: 2, className: "purple" },
      //       { points: 1, className: "green" },
      //       { points: 1, className: "green" },
      //     ],
      //     B: [
      //       { points: 3, className: "blue" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     C: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     D: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     E: [
      //       { points: 1, className: "orange" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     F: [
      //       { points: 0, className: "" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     G: [
      //       { points: 3, className: "blue" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     H: [
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //   },
      //   midStage3: 4,
      //   midStage3Total: 19,
      //   groupsFinishedTotal: 28,
      // },

      // Kevin: {
      //   groups: {
      //     A: [
      //       { points: 0, className: "" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     B: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     C: [
      //       { points: 0, className: "" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     D: [
      //       { points: 0, className: "" },
      //       { points: 1, className: "orange" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     E: [
      //       { points: 1, className: "orange" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //       { points: 0, className: "" },
      //     ],
      //     F: [
      //       { points: 0, className: "" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     G: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     H: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //   },
      //   midStage3: 5,
      //   midStage3Total: 11,
      //   groupsFinishedTotal: 21,
      // },

      // Sarah: {
      //   groups: {
      //     A: [
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     B: [
      //       { points: 0, className: "" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     C: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     D: [
      //       { points: 0, className: "" },
      //       { points: 1, className: "orange" },
      //       { points: 1, className: "green" },
      //       { points: 0, className: "" },
      //     ],
      //     E: [
      //       { points: 1, className: "orange" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     F: [
      //       { points: 1, className: "orange" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     G: [
      //       { points: 0, className: "" },
      //       { points: 1, className: "orange" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     H: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //       { points: 0, className: "" },
      //     ],
      //   },
      //   midStage3: 6,
      //   midStage3Total: 9,
      //   groupsFinishedTotal: 14,
      // },

      // Anthony: {
      //   groups: {
      //     A: [
      //       { points: 3, className: "blue" },
      //       { points: 2, className: "purple" },
      //       { points: 1, className: "green" },
      //       { points: 1, className: "green" },
      //     ],
      //     B: [
      //       { points: 3, className: "blue" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //     ],
      //     C: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     D: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //       { points: 0, className: "" },
      //     ],
      //     E: [
      //       { points: 1, className: "orange" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     F: [
      //       { points: 0, className: "" },
      //       { points: 2, className: "purple" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //     G: [
      //       { points: 3, className: "blue" },
      //       { points: 2, className: "purple" },
      //       { points: 1, className: "green" },
      //       { points: 1, className: "green" },
      //     ],
      //     H: [
      //       { points: 3, className: "blue" },
      //       { points: 0, className: "" },
      //       { points: 0, className: "" },
      //       { points: 1, className: "green" },
      //     ],
      //   },
      //   midStage3: 7,
      //   midStage3Total: 32,
      //   groupsFinishedTotal: 36,
      // },
    };

    Object.keys(usersObj).forEach((userName) => {
      describe(`${userName}'s Scores`, () => {
        beforeEach(() => {
          user = users.find((userr) => userr.name === userName);
        });

        describe(`${userName}'s Group Stage`, () => {
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

          it(`calculates ${userName}'s total group scores correctly with only ${usersObj[userName].midStage3} group(s) complete`, () => {
            let letters = ["A", "B", "C", "D", "E", "F", "G", "H"].slice(
              usersObj[userName].midStage3
            );

            const groupKeys = [];

            letters.forEach((letter) => {
              for (let i = 1; i <= 4; i++) {
                groupKeys.push(`group${letter}${i}`);
              }
            });

            groupKeys.forEach((key) => {
              user[key].groupIsFinished = false;
            });

            const groupTotal = groupTotalCalc(user);

            expect(groupTotal).to.equal(usersObj[userName].midStage3Total);
          });

          it(`calculates ${userName}'s total group scores correctly at the end of stage 3`, () => {
            const groupTotal = groupTotalCalc(user);

            expect(groupTotal).to.equal(usersObj[userName].groupsFinishedTotal);
          });
        });

        describe(`${userName}'s Knockout rounds`, () => {
          Object.keys(usersObj[userName].koRounds).forEach((round) => {
            describe(`${round}`, () => {
              const letter = round.toUpperCase().split("")[0];

              describe(`when ${round} is finished`, () => {
                Object.keys(usersObj[userName].koRounds[round]).forEach(
                  (game) => {
                    describe(`game: ${game}`, () => {
                      beforeEach(() => {
                        gameAnswer = koGameCalc(user, game, teams);
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
                  koRoundTotal = koRoundCalc(user, round, teams);

                  expect(koRoundTotal).to.equal(
                    usersObj[userName][`koRoundFinishedTotal_${letter}`]
                  );
                });
              });

              if (round !== "champion") {
                describe(`when ${round} only has ${
                  usersObj[userName][`midStage5_${letter}`]
                } game(s) completed`, () => {
                  beforeEach(() => {
                    const koRoundGames = {
                      Q: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"],
                      S: ["S1", "S2", "S3", "S4"],
                      F: ["F1", "F2"],
                    };

                    koNonCompletedGames = koRoundGames[letter].slice(
                      usersObj[userName][`midStage5_${letter}`]
                    );

                    koNonCompletedGames.forEach((game) => {
                      usersObj[userName].koRounds[round][
                        game
                      ].teamThatAdvanced = null;

                      usersObj[userName].koRounds[round][game].usersPickClass =
                        "";

                      usersObj[userName].koRounds[round][game].points = 0;
                    });

                    const koRoundGamePositions = {
                      Q: {
                        1: ["A1", "B2"],
                        2: ["C1", "D2"],
                        3: ["E1", "F2"],
                        4: ["G1", "H2"],
                        5: ["B1", "A2"],
                        6: ["D1", "C2"],
                        7: ["F1", "E2"],
                        8: ["H1", "G2"],
                      },
                      S: {
                        1: ["A1", "B2", "C1", "D2"],
                        2: ["E1", "F2", "G1", "H2"],
                        3: ["B1", "A2", "D1", "C2"],
                        4: ["F1", "E2", "H1", "G2"],
                      },
                      F: {
                        1: ["A1", "B2", "C1", "D2", "E1", "F2", "G1", "H2"],
                        2: ["B1", "A2", "D1", "C2", "F1", "E2", "H1", "G2"],
                      },
                    };

                    koNonCompletedGames.forEach((game) => {
                      const letter = game.split("")[0];
                      const number = game.split("")[1];

                      koRoundGamePositions[letter][number].forEach(
                        (finishingPosition) => {
                          teams.forEach((team) => {
                            if (team.knockoutPosition === finishingPosition) {
                              team[`advanceTo${letter}`] = false;
                              team.outOfTourney = false;
                            }
                          });
                        }
                      );
                    });
                  });

                  Object.keys(usersObj[userName].koRounds[round]).forEach(
                    (game) => {
                      describe(`game: ${game}`, () => {
                        beforeEach(() => {
                          gameAnswer = koGameCalc(user, game, teams);
                        });

                        it(`pulls in users prediction correctly`, () => {
                          expect(gameAnswer.usersPick.name).to.equal(
                            usersObj[userName].koRounds[round][game].usersPick
                              .name
                          );
                        });

                        it(`game: ${game} - pulls in the team that advanced correctly`, () => {
                          if (koNonCompletedGames.includes(game)) {
                            expect(gameAnswer.teamThatAdvanced).to.equal(
                              usersObj[userName].koRounds[round][game]
                                .teamThatAdvanced
                            );
                          } else {
                            expect(gameAnswer.teamThatAdvanced.name).to.equal(
                              usersObj[userName].koRounds[round][game]
                                .teamThatAdvanced.name
                            );
                          }
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
                    koRoundTotal = koRoundCalc(user, round, teams);

                    expect(koRoundTotal).to.equal(
                      usersObj[userName][`midStage5Total_${letter}`]
                    );
                  });
                });
              }
            });
          });
        });
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
