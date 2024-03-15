import { Request, Response } from "express";
// import { CustomSessionData } from "./session.interface"

export interface CustomRequest extends Request {}

export interface CustomResponse extends Response {}