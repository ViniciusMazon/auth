import 'dotenv/config';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

declare module 'express' {
  export interface Request {
    userId?: string;
  }
}

export default (request: Request, response: Response, next: NextFunction) => {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return response.status(401).json({ message: 'Token not provided' });
  }

  try {
    const [, token] = authHeader.split(' ');
    const payload: any = jwt.verify(token, process.env.SECRET as string);

    request.userId = payload.userId;

    return next();
  } catch (err) {
    console.error(err);
    return response.status(401).json({ message: 'Invalid token' });
  }
};
