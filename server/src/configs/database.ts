import { Pool } from 'pg';

const pool = new Pool({
  user: 'root',
  host: 'food-order-tool.ckotmeymqrtt.us-east-1.rds.amazonaws.com',
  database: 'postgres',
  password: 'Nhatnam92',
  port: 5432,
});

export default pool;
