const mongoose = require("mongoose");

async function dbConnect(MONGO_URL) {
  await mongoose.connect(`${MONGO_URL}`);
}
mongoose.connection.once("open", () => {
  console.log("Connected to Database");
});
mongoose.connection.on("error", () => {
  console.log("An error occurred during conection to database");
});
module.exports = dbConnect;
