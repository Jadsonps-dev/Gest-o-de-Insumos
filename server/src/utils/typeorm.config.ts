import { DataSource } from 'typeorm';
import { Usuario } from '../models/Usuario';
import { Entrada } from '../models/Entrada';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5333,
  username: 'luftsolutions',
  password: 'luft@2025',
  database: 'luft',
  synchronize: true,
  logging: false,
  entities: [Usuario, Entrada],
});