import dotenv from 'dotenv';

/**
 * @type {class}
 */
export default class ApiConfig {
  /**
   * @return {string}
   */
  public get apiEndpoint(): string {
    return process.env.MOLITIO_API_ENDPOINT ? process.env.MOLITIO_API_ENDPOINT : '/api';
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
   * @constructor
   */
  constructor() {
    dotenv.config();
  }
}
export const apiConfig = new ApiConfig();
