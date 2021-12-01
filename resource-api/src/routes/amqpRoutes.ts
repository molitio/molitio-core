import { Router, Request, Response } from "express";
import { MolitioResource, Human } from "@molitio/molitio-lib";
import { config } from "../config/appConfig";

const amqpRoutes: Router = Router();
const amqp = require("amqplib/callback_api");
const WebSocket = require("ws");
let connectedExchanges: string[] = [];

// pass port as @Input to this module if possible
// set exchanges

const desideratiumStatic: MolitioResource[] = [
  {
    name: "Bread",
    description: "Whole grains loaf of bread",
    type: {
      name: "basic.food",
    },
  },
  {
    name: "Drinking Water",
    description: "Water is life",
    type: {
      name: "basic.food",
    },
  },
];

// server must have a production grade configuration
const wss = new WebSocket.Server({
  port: `${config.wsPort}`,
});

// event of connection to the web socket server
wss.on("connection", (ws) => {
  let msg;

  // configuring the exchanges for amqp
  setExchanges(config.exchangeList);

  console.log("websocketserver: connection");

  // event of web socket server receives a message
  ws.on("message", (message) => {
    console.log(`websocketserver: ${message}`);
    msg = message;
    console.log(`sending: ${msg}`);
    ws.send(msg);
    let human = new Human();
  });

  // event of connecting to the amqp service
  amqp.connect("amqp://localhost", (error0, connection) => {
    console.log("amqpconnection: connect");
    console;
    if (error0) {
      ws.send(error0.message);
      throw error0;
    }

    connection.

    connection.createChannel((error1, channel) => {
      if (error1) {
        ws.send(error0.message);
      }

      // connecting to all exchanges defined in the configuration
      for (let exchange of connectedExchanges)
      {

        channel.assertExchange(exchange, "fanout", {
          durable: false,
        });
        
        channel.publish(exchange, '', Buffer.from(msg));
        console.log(`exchange: ${exchange}, sent: ${msg}`);
        
      }
    });

    setTimeout(() => {
      connection.close();
      //process.exit(0);
    }, 500);
  });
});

export const setExchanges = (exchanges: string[]) => {
  connectedExchanges = exchanges;
};

export default amqpRoutes;
/* 
const ws = new WebSocket(`ws://localhost:${config.wsPort}/amqp`, {
  perMessageDeflate: false,
});

ws.on("open", () => {
  console.log("opened");
});

ws.on("connect", () => {
  ws.send(JSON.stringify(desideratiumStatic));
});

ws.on("ready", () => {
  ws.send(JSON.stringify(desideratiumStatic));
});

ws.on("message", (message) => {
  console.log(`${message}`);
}); */

/* wss.on("connection", async (ws) => {
  ws.on("open", () => {
    ws.send(JSON.stringify({name: "name data"}));
  });
  
  ws.on("message", (message) => {
    console.log(`${message}`);
  });

  

  // connect to amqp service and send messages as they arrive from the queue

  });
});
 */
