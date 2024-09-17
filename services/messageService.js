import { sql } from "../database/database.js";

export const getRecentMessages = async () => {
    return await sql`
    SELECT sender, message 
    FROM messages 
    ORDER BY id DESC 
    LIMIT 5
  `;
};

export const addPost = async (sender, message) => {
  try {
    await sql`INSERT INTO messages (sender, message) VALUES (${sender}, ${message})`;
  } catch (e) {
    console.error(e);
  }
};
