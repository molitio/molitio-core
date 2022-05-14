import { config } from "../config/appConfig";
import mongoose = require("mongoose");

let db: mongoose.Connection;

export const connect = () => {
  console.log(`connecting to ${config.mongoEnv}`);
  const uri = `mongodb+srv://${config.mongoUsr}:${config.mongoSecret}@molitio-webdev.lsgom.mongodb.net/${config.mongoDb}?retryWrites=true&w=majority`;

  mongoose.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  db = mongoose.connection;
  db.once("open", async () => {
    console.log("Connected to database");
  });

  db.on("error", () => {
    console.log("Error connecting to database");
  });
  return;
};

export const disconect = () => {
  if (!db) {
    return;
  }

  mongoose.disconnect();
};
