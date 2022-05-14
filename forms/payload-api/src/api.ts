import { connect } from "./db/db";
import express, { Application, Request, Response } from "express";
import moFormRoutes from "./routes/moFormRoute";
import loginRoutes from "./routes/loginRoute";
import helloValuesRoutes from './routes/helloValuesRoute';

const dotenv = require('dotenv');
dotenv.config();

const API_PORT = process.env.MOFO_API_PORT;
const API_ENDPOINT = process.env.MOFO_API_ENDPOINT;
const MONGO_ENV = process.env.MOFO_MONGO_ENV;
const app: Application = express();

connect();

app.use(express.json());
app.use(`${API_ENDPOINT}/moform`, moFormRoutes);
app.use(`${API_ENDPOINT}/login`, loginRoutes);
app.use(`${API_ENDPOINT}/hellovalues`, helloValuesRoutes);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get("/", (req: Request, res: Response) => {
  res.send("get /hellovalues for example");
});

app.listen(API_PORT, () => {
  console.log(`Running on port: ${API_PORT} mongo env: ${MONGO_ENV} endpoint: ${API_ENDPOINT}`);
});
