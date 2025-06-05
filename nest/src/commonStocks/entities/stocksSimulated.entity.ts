import { Entity, PrimaryGeneratedColumn, Column, Index } from 'typeorm';

@Entity({ name: 'stock' })
@Index(['bas_dt', 'srtn_cd'])
export class SimulatedStock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'bas_dt', type: 'varchar', length: 8 })
  bas_dt: string;

  @Column({ name: 'srtn_cd', type: 'varchar', length: 6 })
  srtn_cd: string;

  @Column({ name: 'itms_nm', type: 'varchar', length: 100 })
  itms_nm: string;

  @Column({ name: 'clpr', type: 'int' })
  clpr: number;

  @Column({ name: 'vs', type: 'int', nullable: true })
  vs: number | null;

  @Column({ name: 'flt_rt', type: 'float', nullable: true })
  flt_rt: number | null;

  @Column({ name: 'mkp', type: 'int', nullable: true })
  mkp: number | null;

  @Column({ name: 'hipr', type: 'int', nullable: true })
  hipr: number | null;

  @Column({ name: 'lopr', type: 'int', nullable: true })
  lopr: number | null;

  @Column({ name: 'trqu', type: 'bigint', nullable: true })
  trqu: string | null;

  @Column({ name: 'tr_prc', type: 'bigint', nullable: true })
  tr_prc: string | null;

  constructor(stock: Partial<SimulatedStock>) {
    Object.assign(this, stock);
  }
}
