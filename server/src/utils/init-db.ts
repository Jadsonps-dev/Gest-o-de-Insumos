// src/utils/init-db.ts
import { Pool } from "pg";

const pool = new Pool({
  user: "luftsolutions",
  host: "localhost",
  database: "luft",
  password: "luft@2025",
  port: 5333,
});

export async function createSchemasIfNotExist() {
  const client = await pool.connect();

  try {
    console.log("🔄 Verificando schemas...");
    await client.query(`CREATE SCHEMA IF NOT EXISTS dados`);
    await client.query(`CREATE SCHEMA IF NOT EXISTS insumos_entrada`);
    console.log("✅ Schemas verificados/criados");
  } catch (err) {
    console.error("❌ Erro ao criar schemas:", err);
    throw err;
  } finally {
    client.release();
  }
}
