const app = require("express").Router();

const {
  models: { Updated },
} = require("../db/index.js");

app.get("/api/updated", async (req, res, next) => {
  try {
    const updated = await Updated.findAll({ where: { idd: 1 } });
    res.send(updated);
  } catch (err) {
    next(err);
  }
});

app.put("/api/updated/:id", async (req, res, next) => {
  try {
    const updated = await Updated.findByPk(req.params.id);
    res.status(204).send(await updated.update(req.body));
  } catch (err) {
    next(err);
  }
});

module.exports = app;
