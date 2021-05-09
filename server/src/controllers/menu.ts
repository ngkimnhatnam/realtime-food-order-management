// Dependencies import
import { Request, Response } from 'express';

// Service import
import * as menuService from '../services/menu';

// @ts-ignore
export const getOrders = async (req: Request, res: Response): void => {
  try {
    const result = await menuService.getOrders();
    res.status(result.status).json({ ...result });
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
};
