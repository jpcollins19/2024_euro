const app = require("express").Router();
const {
  models: { Team, Player },
} = require("../db/postgres_info.js");

app.get("/api/teams", async (req, res, next) => {
  try {
    const teams = await Team.findAll({
      include: [
        {
          model: Player,
          as: "players",
        },
      ],
    });
    res.send(teams);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
