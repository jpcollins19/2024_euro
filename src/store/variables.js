const groupLetters = ["A", "B", "C", "D", "E", "F"];

const koLetters = ["Q", "S", "F", "Champ"];
const koLetters_maxPts = ["R16_", "Q", "S", "Champ"];

const Qs = [1, 2, 3, 4, 5, 6, 7, 8];

const Ss = [1, 2, 3, 4];

const Fs = [1, 2];

const semiMatchups = {
  Q1: ["R16_1", "R16_2"],
  Q2: ["R16_3", "R16_4"],
  Q3: ["R16_5", "R16_6"],
  Q4: ["R16_7", "R16_8"],
};

// const finalMatchups = {
//   F1: ["Q1", "Q2", "Q3", "Q4"],
//   F2: ["Q5", "Q6", "Q7", "Q8"],
// };

const finalMatchups = {
  S1: ["R16_1", "R16_2", "R16_3", "R16_4"],
  S2: ["R16_5", "R16_6", "R16_7", "R16_8"],
};

const regoinMapper = {
  1: { 1: "R16_1", 2: "R16_2" },
  2: { 1: "R16_3", 2: "R16_4" },
  3: { 1: "R16_5", 2: "R16_6" },
  4: { 1: "R16_7", 2: "R16_8" },
};

const userPickMapper_FF = {
  1: ["R16_1", "R16_2"],
  2: ["R16_3", "R16_4"],
  3: ["R16_5", "R16_6"],
  4: ["R16_7", "R16_8"],
};

// const koGameMapper = {
//   1: { 1: "R16_1", 2: "R16_2" },
//   2: { 1: "R16_3", 2: "R16_4" },
//   3: { 1: "R16_5", 2: "R16_6" },
//   4: { 1: "R16_7", 2: "R16_8" },
// };

const koGameMapper = {
  left: { 1: ["R16_1", "R16_2"], 2: ["R16_3", "R16_4"] },
  right: { 3: ["R16_5", "R16_6"], 4: ["R16_7", "R16_8"] },
};

const finalsMapper_Z_In = {
  left: ["R16_1", "R16_2", "R16_3", "R16_4"],
  right: ["R16_5", "R16_6", "R16_7", "R16_8"],
};

const games_Q = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8"];
const games_S = ["S1", "S2", "S3", "S4"];
const games_F = ["F1", "F2"];

const validKoResults = ["correct", "wrong"];

// const koGameMapper_EditUserPicks_R16 = {
//   left: { 1: { 1: "Q1", 2: "Q2" }, 2: { 1: "Q3", 2: "Q4" } },
//   right: { 1: { 1: "Q5", 2: "Q6" }, 2: { 1: "Q7", 2: "Q8" } },
// };

const koGameMapper_EditUserPicks_R16 = {
  1: { 1: "Q1", 2: "Q2" },
  2: { 1: "Q3", 2: "Q4" },
  3: { 1: "Q5", 2: "Q6" },
  4: { 1: "Q7", 2: "Q8" },
};

module.exports = {
  groupLetters,
  koLetters,
  Qs,
  Ss,
  Fs,
  // semiMatchups,
  finalMatchups,
  koLetters_maxPts,
  semiMatchups,
  regoinMapper,
  koGameMapper,
  games_Q,
  games_S,
  games_F,
  validKoResults,
  userPickMapper_FF,
  finalsMapper_Z_In,
  koGameMapper_EditUserPicks_R16,
};
