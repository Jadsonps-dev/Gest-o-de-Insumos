import { Request, Response } from 'express';
import * as insumoService from '../services/insumoService';

export const listarInsumos = async (req: Request, res: Response) => {
    try {
        const insumos = await insumoService.listarInsumos();
        res.json(insumos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar insumos' });
    }
};

export const criarInsumo = async (req: Request, res: Response) => {
    try {
        const novoInsumo = await insumoService.criarInsumo(req.body);
        res.status(201).json(novoInsumo);
    } catch (error) {
        res.status(400).json({ error: 'Erro ao criar insumo' });
    }
};

// Adicione os outros métodos (atualizar, deletar, buscar por id)...