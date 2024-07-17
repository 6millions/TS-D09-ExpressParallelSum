import { Request, Response } from "express";
// import model
import { SumRequest } from "../models/sumRequest";

// create controller class
export class SumController {

    constructor() {
        console.log("[SumController] Constructor");

    }

    // post logic to calculate the summary of array.
    public getSumRequest = (req: Request, res: Response): void => {
        console.log("[SumController] getSumRequest");

        const { rowOfArray, lengthOfArray } = req.body;

        console.log("rowOfArray: %d, lengthOfArray: %d", rowOfArray, lengthOfArray);

        // validate the array 
        if (!rowOfArray || !lengthOfArray) {
            console.log('error param');
            res.status(400).send("missing param");
            return;
        }

        // pass to main logic
        //let sumRequest = new SumRequest(numberOfArray, lengthOfArray);

        // initiate array
        const sourceArrays: number[][] = new Array(rowOfArray);

        for (let i = 0; i < rowOfArray; i++) {

            sourceArrays[i] = new Array(lengthOfArray);

            for (let j = 0; j < lengthOfArray; j++) {
                sourceArrays[i][j] = Math.floor(Math.random() * 9) + 1;

            }

        }
        res.json(sourceArrays);

    }


}