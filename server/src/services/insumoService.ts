import pool from '../database';
import { Entrada } from '../models/Entrada';

export async function registrarEntrada(insumo: Omit<Entrada, 'id' | 'data' | 'tipo'>) {
  const result = await pool.query(
    `INSERT INTO insumos_entrada.entrada 
     (produto, quantidade, posicao, codigo, empresa, tipo) 
     VALUES ($1, $2, $3, $4, $5, 'entrada') 
     RETURNING *`,
    [insumo.produto, insumo.quantidade, insumo.posicao, insumo.codigo, insumo.empresa]
  );
  return result.rows[0];
}

export async function listarInsumos() {
  const result = await pool.query('SELECT * FROM insumos_entrada.entrada');
  return result.rows;
}