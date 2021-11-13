// listen
// emit

const socket = require("ws");
import { config } from "../config/appConfig";


const AmqpService = new socket.Server({
    port: `${config.wsPort}`,
  }); 
    
export default AmqpService;
