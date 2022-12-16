const Sequelize = require("sequelize");
const db = require("../db.js");

const { STRING, UUID, UUIDV4, INTEGER } = Sequelize;

const Updated = db.define("updated", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  idd: {
    type: INTEGER,
  },
  answer: {
    type: STRING,
  },
});

module.exports = Updated;
