import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "app_db",
  password: "password",
  port: 5432,
});
