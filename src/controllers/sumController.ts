import { Request, Response } from "express";
// import model
import { SumRequest } from "../models/sumRequest";

// create controller class
export class SumController {

    constructor() {
        console.log("[SumController] Constructor");

    }

    // post logic to calculate the summary of array.
    public getSumRequest = async (req: Request, res: Response): Promise<void> => {
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
        const resultArrays: number[][] = new Array(rowOfArray); // define the result for each row.

        for (let i = 0; i < rowOfArray; i++) {

            sourceArrays[i] = new Array(lengthOfArray);
            resultArrays[i] = new Array(1); // result only 1 array length per row

            for (let j = 0; j < lengthOfArray; j++) {
                sourceArrays[i][j] = Math.floor(Math.random() * 9) + 1;

            }

        }

        console.log('random array value: ' + sourceArrays);

        const results = await Promise.all(sourceArrays.map(async (row, index) => {
            return await this.calculateArrayRow(row);

        }))

        // const results = sourceArrays.map(async (row, index) => {
        //     return await this.calculateArrayRow(row);

        // })

        // Assign results to resultArrays
        results.forEach((result, index) => {
            resultArrays[index][0] = result;
        });

        let resultTotal: number = 0;

        resultTotal = resultArrays.reduce((result, row) => {

            return result + (row[0] || 0);
        }, 0)

        console.log('total is ' + resultTotal);

        res.json(resultArrays);

    }
    // post logic to calculate the summary of array.
    public calculateArrayRow = async (inputNum: number[]): Promise<number> => {

        console.log("calculate this array: ", inputNum);

        const result = inputNum.reduce((result, current) => result + current, 0);

        console.log("result is:" + result);

        return result;
    }


}