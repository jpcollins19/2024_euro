const app = require("express").Router();
const {
  models: { League, Team },
} = require("../db/postgres_info.js");

app.get("/api/leagues", async (req, res, next) => {
  try {
    const leagues = await League.findAll({
      include: [
        {
          model: Team,
          as: "teams",
        },
      ],
    });
    res.send(leagues);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
