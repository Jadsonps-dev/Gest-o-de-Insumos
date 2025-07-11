// server/src/routes/auth.routes.ts
import express from 'express';
import { getRepository } from 'typeorm';
import { Usuario } from '../models/Usuario';
import { AppDataSource } from '../utils/typeorm.config';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { usuario, senha, empresa } = req.body;

  if (!usuario || !senha || !empresa) {
    return res.status(400).json({ message: 'Campos obrigatórios faltando' });
  }

  if (!AppDataSource.isInitialized) {
    return res.status(500).json({ message: 'Banco de dados não conectado' });
  }

  try {
    const userRepository = AppDataSource.getRepository(Usuario);
    const user = await userRepository.findOne({ where: { usuario, empresa } });

    if (!user || user.senha !== senha) {
      return res.status(401).json({ message: 'Credenciais inválidas' });
    }

    return res.json({
      message: 'Login bem-sucedido',
      user: {
        usuario: user.usuario,
        empresa: user.empresa
      }
    });
  } catch (error) {
    console.error('Erro no login:', error);
    return res.status(500).json({ message: 'Erro interno no servidor' });
  }
});

export default router;