export interface Insumo {
  idproduto?: number;
  produto: string;
  quantidade: number;
  data_entrada?: Date;
  codigo: string;
  empresa: string;
  tipo: 'entrada' | 'saida';
}