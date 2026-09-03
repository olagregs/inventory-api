import { Request, Response, NextFunction } from 'express';

interface ICustomError extends Error {
  statusCode?: number
}

const errorHandler = (error: ICustomError, _request: Request, response: Response, _next: NextFunction) => {
  const statusCode = error.statusCode || 500;
  const message = statusCode === 500 ? "Internal server error" : error.message;

  console.error(error);

  response.status(statusCode).json({
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
}

export { errorHandler }