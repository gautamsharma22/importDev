const mongoose = require("mongoose");
function connectDB() {
  const connectionURI =
    `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.s1a1yrw.mongodb.net/${process.env.DB_NAME}`;
  mongoose
    .connect(connectionURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => console.error("Error in connecting to DB", err));
}

module.exports = connectDB;
