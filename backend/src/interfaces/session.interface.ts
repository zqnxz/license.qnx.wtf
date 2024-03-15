// import { SessionData } from "express-session";

export interface CustomSessionData {
    key: any;
    userId: string;
    username: string;
    avatar: string;
    email: string;
    roles: string[];
    panelId: number;
}