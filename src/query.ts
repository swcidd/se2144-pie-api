import { pool } from "./db";

async function main() {
  const result = await pool.query(
    "SELECT name, filling, slice_count FROM pies WHERE is_baked = $1",
    [true],
  );
  console.log(result.rows);
  await pool.end();
}

main();
