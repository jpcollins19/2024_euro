const db = require("./db");
const User = require("./models/User");
const Team = require("./models/Team");
const Updated = require("./models/Updated");

module.exports = {
  db,
  models: {
    User,
    Team,
    Updated,
  },
};
