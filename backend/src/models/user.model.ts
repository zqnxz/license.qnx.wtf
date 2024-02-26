import { Request, Response, NextFunction } from "express";

interface UserSession {
  panelId: number;
  username: any;
  email: any;
  discordId: any;
  avatar: any;
  roles: string[];
}

declare global {
  namespace Express {  
    interface Request { 
      user: UserSession;
    }
  }
}

const authenticate = (req: Request, res: Response, next: NextFunction) => {
  req.user = { 
    panelId: (req.session as any).panelId,
    username: (req.session as any).username,
    email: (req.session as any).email,
    discordId: (req.session as any).userId, 
    avatar: (req.session as any).avatar, 
    roles: (req.session as any).roles,
  };
  next();
};

export default authenticate;