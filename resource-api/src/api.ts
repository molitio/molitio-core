import express, { Application, Request, Response } from "express";
import { connect } from "./db/db";
import { config } from "./config/appConfig"
import helloValuesRoutes from "./routes/helloValuesRoute";
import amqpRoutes from "./routes/amqpRoutes"

const app: Application = express();

connect();

app.use(express.json());
app.use(`${config.apiEndpoint}/hellovalues`, helloValuesRoutes);
app.use(`/amqp`, amqpRoutes)

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.get("/", (req: Request, res: Response) => {
  res.send("get /hellovalues for example");
});

app.listen(config.apiPort, () => {
  console.log(`Running on port: ${config.apiPort} mongo env: ${config.mongoEnv} endpoint: ${config.apiEndpoint}`);
});
