// Dependencies import
import express from 'express';
import { Request, Response, NextFunction, Application } from 'express';

// Routes import
import menuRoutes from '../routes/menu';

const ExpressLoaders = ({ app }: { app: Application }): Application => {
  app.use(express.urlencoded({ extended: true }));

  //@ts-ignore
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
    next();
  });

  app.use(express.json({ limit: '10kb' }));
  app.use('/api/v1', menuRoutes);

  return app;
};

export default ExpressLoaders;
