import { privateDecrypt } from "crypto";

const dotenv = require("dotenv");
dotenv.config();

namespace AppConfiguration {
  class AppConfig {
    private _apiEndpoint: string;
    private _apiPort: string;
    private _wsPort: string;
    private _mongoEnv: string;
    private _mongoUsr: string;
    private _mongoSecret: string;
    private _mongoDb: string;
    private _exchangeList: string[];

    public get apiEndpoint(): string {
      return this._apiEndpoint;
    }

    public get apiPort(): string {
      return this._apiPort;
    }

    public get wsPort(): string {
      return this._wsPort;
    }

    public get mongoEnv(): string {
      return this._mongoEnv;
    }

    public get mongoUsr(): string {
      return this._mongoUsr;
    }

    public get mongoSecret() {
      return this._mongoSecret;
    }

    public get mongoDb() {
      return this._mongoDb;
    }

    public get exchangeList() {
      return this._exchangeList;
    }

    constructor() {
      this._apiEndpoint = process.env.MOLITIO_API_ENDPOINT ?? "/api";
      this._apiPort = process.env.MOLITIO_API_PORT ?? "3000";
      this._wsPort = process.env.MOLITIO_WS_PORT ?? "5000";
      this._mongoEnv = process.env.MOLITIO_MONGO_ENV ?? "molitio";
      this._mongoUsr = process.env.MOLITIO_MONGO_USR ?? "";
      this._mongoSecret = process.env.MOLITIO_MONGO_SECRET ?? "";
      this._mongoDb = process.env.MOLITIO_MONGO_DB ?? "MolitioDataStorage";
      this._exchangeList =  process.env.EXCHANGE_LIST?.split((",")) ?? ["desideratum", "contribution"];
    }
  }
  export const config: AppConfig = new AppConfig();
}

export = AppConfiguration;
