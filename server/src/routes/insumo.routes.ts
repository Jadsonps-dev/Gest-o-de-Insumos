import { Router } from 'express';
import { registrarEntrada, listarInsumos } from '../services/insumoService';

const router = Router();

// Registrar nova entrada de insumo
router.post('/entrada', async (req, res) => {
  try {
    const dados = req.body;

    // Validação básica
    const camposObrigatorios = ['empresa', 'produto', 'codigo', 'quantidade', 'posicao'];
    const camposFaltando = camposObrigatorios.filter(campo => !(campo in dados));

    if (camposFaltando.length > 0) {
      return res.status(400).json({
        error: `Campos obrigatórios ausentes: ${camposFaltando.join(', ')}`,
      });
    }

    // Registra no banco
    const novoInsumo = await registrarEntrada(dados);
    return res.status(201).json(novoInsumo);

  } catch (error: any) {
    console.error('Erro ao registrar entrada:', error.message || error);
    return res.status(500).json({
      error: 'Erro interno ao registrar entrada',
      details: error.message
    });
  }
});

// Listar todos os insumos
router.get('/', async (req, res) => {
  try {
    const insumos = await listarInsumos();
    return res.json(insumos);
  } catch (error: any) {
    console.error('Erro ao buscar insumos:', error.message || error);
    return res.status(500).json({
      error: 'Erro interno ao buscar insumos',
      details: error.message
    });
  }
});

export default router;