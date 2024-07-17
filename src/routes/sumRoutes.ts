import express, { Request, Response } from "express";
import { SumController } from "../controllers/sumController"


const routes = express.Router();

// create controller

const sumController = new SumController();

// mapping route with controller 
// already /api
routes.post('/sumNumber', sumController.getSumRequest);


export default routes;