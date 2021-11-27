import express, { Application, Request, Response } from "express";
import { apiConfig } from "./config/apiConfig";
import { wssConfig } from "./config/wssConfig"
import { createWebSocketService, openWebSocketService } from "./services/webSocketService"


createWebSocketService();
openWebSocketService();

// if connection is enstabilished 
// API <-> WSS model still needs to be refined this structure is a draft
console.log(`Running on port: ${wssConfig.wsPort} endpoint: ${apiConfig.apiEndpoint}`);



