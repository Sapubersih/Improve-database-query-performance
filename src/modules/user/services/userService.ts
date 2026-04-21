import { pool } from "../../../core/db/db";
import { getCache, setCache } from "../../../core/cache/cache";

export class UserService {
  async getUsers(page = 1, limit = 10) {
    const cacheKey = `users:${page}:${limit}`;
    const cached = getCache(cacheKey);

    if (cached) {
      console.log("Cache hit");
      return cached;
    }

    const offset = (page - 1) * limit;

    const query = `
      SELECT id, username, email
      FROM users
      ORDER BY id DESC
      LIMIT $1 OFFSET $2
    `;

    const result = await pool.query(query, [limit, offset]);

    setCache(cacheKey, result.rows, 30);

    return result.rows;
  }

  async getUserById(id: number) {
    const query = `
      SELECT id, username, email
      FROM users
      WHERE id = $1
    `;

    const result = await pool.query(query, [id]);
    return result.rows[0];
  }
}
