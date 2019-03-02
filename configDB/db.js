require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");

module.exports = {
  dbConnection: () => {
    const db = process.env.DB_PASSWOR;
    mongoose.Promise = global.Promise;
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => {
        console.log("mongoDB connected");
      })
      .catch(err => {
        console.error(err);
      });
  }
};
