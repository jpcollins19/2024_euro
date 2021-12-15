const app = require("express").Router();
const {
  models: { Player },
} = require("../db/postgres_info.js");

app.post(`/api/players`, async (req, res, next) => {
  try {
    const player = await { ...req.body };
    res.status(201).send(await Player.create(player));
  } catch (err) {
    next(err);
  }
});

app.delete(`/api/players/:id`, async (req, res, next) => {
  try {
    const player = await Player.findByPk(req.params.id);
    await player.destroy();
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.get(`/api/players`, async (req, res, next) => {
  try {
    const players = await Player.findAll();
    res.send(players);
  } catch (err) {
    next(err);
  }
});

module.exports = app;
