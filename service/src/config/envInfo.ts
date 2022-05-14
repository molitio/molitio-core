import dotenv from 'dotenv';

/**
 * @type {class}
 */
export class EnvInfo {
  /**
   * @return {string}
   */
  public get envName(): string {
    return process.env.MOLITIO_ENVIRONMENT_NAME ? process.env.MOLITIO_ENVIRONMENT_NAME : 'molitio';
  }

  /**
   * @return {string}
   */
  public get appVersionInfo(): string {
    return process.env.MOLITIO_APP_VERSION_INFO ? process.env.MOLITIO_APP_VERSION_INFO : 'latest';
  }

  /**
   * @return {string}
   */
  public get appUrl(): string {
    return process.env.MOLITIO_APP_URL ? process.env.MOLITIO_APP_URL : 'localhost';
  }
  /**
   * @constructor
   */
  constructor() {
    dotenv.config();
  }
}
export const envInfo: EnvInfo = new EnvInfo();
