import * as WebSocket from 'ws';
import {wssConfig} from '../config/wssConfig';

export interface IWebSocketService {
  wss: any;
}

export const createWebSocketService = async () => {
  // server must have a production grade configuration
  return new WebSocket.Server({
    port: Number.parseInt(wssConfig.wsPort),
  });
};

export const openWebSocketService = () => {
  // event of connection to the web socket server
  /*   console.log("websocketserver: connection");

    wss.on("connection", (ws) => {
      let msg;


      // event of web socket server receives a message
      ws.on("message", (message) => {
        console.log(`websocketserver: ${message}`);
        msg = message;
        console.log(`sending: ${msg}`);
        ws.send(msg);

        connectedChannel.publish("desideratum", "", Buffer.from(msg));
        console.log(`exchange: ${"desideratum"}, sent: ${msg}`);
      });
    }); */
};

/**
 * @class
 */
export class WebSocketService implements IWebSocketService {
  wss: any;
}
