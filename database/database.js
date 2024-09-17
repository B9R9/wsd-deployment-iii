import postgres from "https://deno.land/x/postgresjs@v3.4.4/mod.js";

// const sql = postgres({
// 	host: "localhost",
// 	database: "FiTech",
// 	username: "admin",
// 	password: "xyz",
// 	port: 5432,
// });

const sql = postgres({});

export { sql };