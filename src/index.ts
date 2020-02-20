import { MongoClient } from 'mongodb';
import { RequestHandler, Request, Response, NextFunction } from 'express';

declare global {
  namespace Express {
    interface Request {
      db?: MongoClient;
    }
  }
}

/**
 * Make an express RequestHandler that sets req.db for your routes
 * @param connection - The MongoClient you want to pass
 */
export default (connection: MongoClient): RequestHandler => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!connection) return next(new Error('No connection was passed to express-mongodb.'));

    if (connection.isConnected()) {
      req.db = connection;
      return next();
    }

    connection
      .connect()
      .then(db => {
        req.db = db;
        return next();
      })
      .catch(err => {
        return next(err);
      });
  };
};
