import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('usuarios', { schema: 'dados' })
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  usuario!: string;

  @Column({ type: 'varchar', nullable: false })
  senha!: string;

  @Column({ type: 'varchar', nullable: false })
  empresa!: string;

  constructor(usuario?: string, senha?: string, empresa?: string) {
    this.usuario = usuario || '';
    this.senha = senha || '';
    this.empresa = empresa || '';
  }
}