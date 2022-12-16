const Sequelize = require("sequelize");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const db = require("../db.js");
require("dotenv").config();

const { STRING, UUID, UUIDV4, BOOLEAN, INTEGER, DATE, NOW } = Sequelize;

const SALT_ROUNDS = 5;

const User = db.define("users", {
  id: {
    type: UUID,
    primaryKey: true,
    defaultValue: UUIDV4,
  },
  email: {
    type: STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  passwordUpdated: {
    type: STRING,
    defaultValue: null,
  },
  name: {
    type: STRING,
    defaultValue: null,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
  tempPW: {
    type: UUID,
    defaultValue: UUIDV4,
  },
  pwResetURL: {
    type: UUID,
    defaultValue: UUIDV4,
  },
  admin: {
    type: BOOLEAN,
    defaultValue: false,
  },
  paid: {
    type: BOOLEAN,
    defaultValue: false,
  },
  groupA1: {
    type: STRING,
    defaultValue: null,
  },
  groupA2: {
    type: STRING,
    defaultValue: null,
  },
  groupA3: {
    type: STRING,
    defaultValue: null,
  },
  groupA4: {
    type: STRING,
    defaultValue: null,
  },

  groupB1: {
    type: STRING,
    defaultValue: null,
  },
  groupB2: {
    type: STRING,
    defaultValue: null,
  },
  groupB3: {
    type: STRING,
    defaultValue: null,
  },
  groupB4: {
    type: STRING,
    defaultValue: null,
  },

  groupC1: {
    type: STRING,
    defaultValue: null,
  },
  groupC2: {
    type: STRING,
    defaultValue: null,
  },
  groupC3: {
    type: STRING,
    defaultValue: null,
  },
  groupC4: {
    type: STRING,
    defaultValue: null,
  },

  groupD1: {
    type: STRING,
    defaultValue: null,
  },
  groupD2: {
    type: STRING,
    defaultValue: null,
  },
  groupD3: {
    type: STRING,
    defaultValue: null,
  },
  groupD4: {
    type: STRING,
    defaultValue: null,
  },

  groupE1: {
    type: STRING,
    defaultValue: null,
  },
  groupE2: {
    type: STRING,
    defaultValue: null,
  },
  groupE3: {
    type: STRING,
    defaultValue: null,
  },
  groupE4: {
    type: STRING,
    defaultValue: null,
  },
  groupF1: {
    type: STRING,
    defaultValue: null,
  },
  groupF2: {
    type: STRING,
    defaultValue: null,
  },
  groupF3: {
    type: STRING,
    defaultValue: null,
  },
  groupF4: {
    type: STRING,
    defaultValue: null,
  },
  groupG1: {
    type: STRING,
    defaultValue: null,
  },
  groupG2: {
    type: STRING,
    defaultValue: null,
  },
  groupG3: {
    type: STRING,
    defaultValue: null,
  },
  groupG4: {
    type: STRING,
    defaultValue: null,
  },
  groupH1: {
    type: STRING,
    defaultValue: null,
  },
  groupH2: {
    type: STRING,
    defaultValue: null,
  },
  groupH3: {
    type: STRING,
  },
  groupH4: {
    type: STRING,
    defaultValue: null,
  },
  knockQ1: {
    type: STRING,
  },
  knockQ2: {
    type: STRING,
  },
  knockQ3: {
    type: STRING,
  },
  knockQ4: {
    type: STRING,
  },
  knockQ5: {
    type: STRING,
  },
  knockQ6: {
    type: STRING,
  },
  knockQ7: {
    type: STRING,
  },
  knockQ8: {
    type: STRING,
  },

  knockS1: {
    type: STRING,
  },
  knockS2: {
    type: STRING,
  },
  knockS3: {
    type: STRING,
  },
  knockS4: {
    type: STRING,
  },

  knockF1: {
    type: STRING,
  },
  knockF2: {
    type: STRING,
  },

  knockChamp: {
    type: STRING,
  },

  tiebreaker: {
    type: INTEGER,
    defaultValue: null,
  },
  tourneyStage: {
    type: INTEGER,
    defaultValue: 1,
  },
});

User.addHook("beforeSave", async function (user) {
  if (user._changed.has("password")) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
});

User.byToken = async (token) => {
  try {
    const { id } = jwt.verify(token, process.env.JWT);

    const user = await User.findByPk(id);
    if (user) {
      return user;
    }
    const error = Error("bad credentials - in byToken - on try");
    error.status = 401;
    throw error;
  } catch (err) {
    console.log("REEEEED", err);
    const error = Error("bad credentials - in byToken on catch");
    error.status = 401;
    throw error;
  }
};

User.authenticate = async ({ email, password }) => {
  try {
    const user = await User.findOne({
      where: {
        email,
      },
    });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ id: user.id }, process.env.JWT, {
        expiresIn: 30 * 60,
      });
      return token;
    }
    const error = Error("bad credentials - in authenticate - try");
    error.status = 401;
    throw error;
  } catch (err) {
    console.log("REEED", err);
    const error = Error("bad credentials - in authenticate - catch");
    error.status = 401;
    throw error;
  }
};

module.exports = User;
