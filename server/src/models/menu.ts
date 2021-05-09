// Configs import
import SQL from '../configs/database';

interface Dish {
  id: number;
  initials: string | null;
  name: string | null;
  description: string | null;
  type: string | null;
}
export const getMenus = (): Promise<Dish[]> => {
  return new Promise((resolve, reject) => {
    const sqlQuery = `SELECT * FROM dishes ORDER BY id ASC`;
    SQL.query(sqlQuery, (err, res) => {
      if (err) {
        reject(err);
      }
      resolve(res.rows);
    });
  });
};
