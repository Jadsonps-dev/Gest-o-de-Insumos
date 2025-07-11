import { Pool } from 'pg';

const pool = new Pool({
  user: 'luftsolutions',
  host: 'localhost',
  database: 'luft',
  password: 'luft@2025',
  port: 5333,
});

export async function initializeDatabase() {
  const client = await pool.connect();

  try {
    await client.query('CREATE SCHEMA IF NOT EXISTS dados');

    await client.query(`
      CREATE TABLE IF NOT EXISTS dados.usuarios (
        id SERIAL PRIMARY KEY,
        usuario VARCHAR(100) UNIQUE NOT NULL,
        senha VARCHAR(255) NOT NULL,
        empresa VARCHAR(100) NOT NULL
      );
    `);

    await client.query('CREATE SCHEMA IF NOT EXISTS insumos_entrada');

    await client.query(`
      CREATE TABLE IF NOT EXISTS insumos_entrada.entrada (
        idproduto SERIAL PRIMARY KEY,
        codigo VARCHAR(50) UNIQUE NOT NULL,
        produto VARCHAR(100) NOT NULL,
        quantidade DECIMAL(10,2) NOT NULL,
        tipo VARCHAR(10) DEFAULT 'entrada' NOT NULL,
        empresa VARCHAR(100) NOT NULL,
        data_entrada TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        usuario VARCHAR(100) NOT NULL
      );
    `);

    console.log('Schemas e tabelas criados com sucesso!');
  } catch (error) {
    console.error('Erro ao inicializar o banco:', error);
  } finally {
    client.release();
  }
}

export default pool;