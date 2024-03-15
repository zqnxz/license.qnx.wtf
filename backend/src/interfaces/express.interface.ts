import { Request, Response, NextFunction } from "express";
// import { CustomSessionData } from "./session.interface"

export interface CustomRequest extends Request {}

export interface CustomResponse extends Response {}

export interface CustomNextFunction extends NextFunction {}