require("dotenv").config({ path: ".env" });
const mongoose = require("mongoose");

module.exports = {
  dbConnection: () => {
    const db =
      process.env.DB_PASSWOR || "mongodb://localhost:27017/mern_weather_app";
    mongoose.Promise = global.Promise;
    mongoose
      .connect(db, { useNewUrlParser: true })
      .then(() => {
        console.log("mongoDB connected");
      })
      .catch(err => {
        console.error(
          `message: ${err.message}  
   codeN:${err.codeName} 
   codeNumber:${err.code} 
   errName:${err.name}
  `
        );
      });
  }
};
