import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'entrada', schema: 'insumos_entrada' })
export class Entrada {
  @PrimaryGeneratedColumn({ name: 'idproduto' })
  id!: number;

  @Column({ name: 'empresa', nullable: false })
  empresa!: string;

  @Column({ name: 'data_entrada', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  data!: Date;

  @Column({ name: 'tipo', type: 'varchar', default: 'entrada' })
  tipo!: string;

  @Column({ name: 'produto', type: 'varchar', nullable: false })
  produto!: string;

  @Column({ name: 'codigo', type: 'varchar', unique: true, nullable: false })
  codigo!: string;

  @Column({ name: 'quantidade', type: 'decimal', precision: 10, scale: 2, nullable: false })
  quantidade!: number;

  @Column({ name: 'posicao', type: 'varchar', nullable: false })
  posicao!: string;

  @Column({ name: 'usuario', type: 'varchar', nullable: false })
  usuario!: string;

  constructor(
    empresa?: string,
    produto?: string,
    codigo?: string,
    quantidade?: number,
    posicao?: string,
    usuario?: string
  ) {
    this.empresa = empresa || '';
    this.produto = produto || '';
    this.codigo = codigo || '';
    this.quantidade = quantidade || 0;
    this.posicao = posicao || '';
    this.usuario = usuario || '';
    this.tipo = 'entrada';
    this.data = new Date();
  }
}