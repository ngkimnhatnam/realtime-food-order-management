// Models import
import * as menuModel from '../models/menu';

export const getOrders = async () => {
  try {
    const result = await menuModel.getMenus();
    return {
      message: 'Menu loaded',
      status: 200,
      total_records: result.length,
      data: result,
    };
  } catch (error) {
    throw { message: 'Server error', status: 500 };
  }
};
