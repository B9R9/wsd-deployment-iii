import postgres from "../deps.js";

// const sql = postgres({
// 	host: "localhost",
// 	database: "FiTech",
// 	username: "admin",
// 	password: "xyz",
// 	port: 5432,
// });

let sql;
if (Deno.env.get("DATABASE_URL")) {
    sql = postgres(Deno.env.get("DATABASE_URL"));
} else {
    sql = postgres({});
}

export { sql };
