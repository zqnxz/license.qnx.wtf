import HttpException from '../../utils/exceptions/http.exception';
import {Request, Response, NextFunction} from 'express';

const errorMiddleware = (
  // error: HttpException, 
  req: Request,
  res: Response, 
  next: NextFunction
) => {
  const status = 500;
  const message = 'Something went wrong!';

  res.status(status).send(message); 
}

export default errorMiddleware;