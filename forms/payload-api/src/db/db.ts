import mongoose = require("mongoose");

let db: mongoose.Connection;

export const connect = () => {
  console.log(`connecting to ${process.env.MOFO_MONGO_ENV}`);
  const uri = `mongodb+srv://${process.env.MOFO_MONGO_USR}:${process.env.MOFO_MONGO_SECRET}@molitio-webdev.lsgom.mongodb.net/${process.env.MOFO_MONGO_ENV}?retryWrites=true&w=majority`;

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
