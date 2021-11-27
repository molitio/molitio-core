import dotenv from 'dotenv';
import {apiConfig} from './apiConfig';

/**
   * @type {class}
   */
export class WssConfig {
  /**
   * @return {string}
   */
  public get wsPort(): string {
    return process.env.MOLITIO_WS_PORT ? process.env.MOLITIO_WS_PORT : '5000';
  }

  /**
   * @return {string}
   */
  public get exchangeList(): string[] {
    return (
      process.env.EXCHANGE_LIST ? process.env.EXCHANGE_LIST.split(',') : ['desideratum', 'contribution']
    );
  }

  /**
   * @return {string}
   */
  public get envName(): string {
    return process.env.MOLITIO_ENVIRONMENT_NAME ? process.env.MOLITIO_ENVIRONMENT_NAME : 'none';
  }

  /**
   * @return {string}
   */
  public get wsDesideratumUrl(): string {
    return `ws://${apiConfig.apiEndpoint}:${this.wsPort}/desideratum`;
  }

  /**
   * @constructor
   */
  constructor() {
    dotenv.config();
  }
}
export const wssConfig: WssConfig = new WssConfig();
