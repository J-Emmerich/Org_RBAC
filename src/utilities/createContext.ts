import { NextFunction, Response } from "express";
import { IRequest } from "../commons/types";

export const createContext = (req: IRequest, res: Response, next: NextFunction) =>{
req.context = {}; 
console.log("hi")
console.log(req.body)
next()
}