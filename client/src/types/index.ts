export interface InsumoEntrada {
  id?: number;
  produto: string;
  quantidade: number;
  codigo: string;
  empresa: string;
  usuario: string;
  tipo: 'entrada' | 'saida';
  data?: string;
}