const Sequelize = require("sequelize");

const config = {
  logging: false,
};

if (process.env.LOGGING) {
  delete config.logging;
}

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/euro"
);

module.exports = db;

//npm i express pg sequelize style-loader css-loader jsonwebtoken bcrypt dotenv

////////////////////////////////////////////

//do:  npm run start:dev -- this will get your dist folder to show

/* 

Move your unwanted data to the gitignore 

    echo node_modules >> .gitignore 
    echo dist/ >> .gitignore 

*/
