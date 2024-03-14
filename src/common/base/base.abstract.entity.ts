import { Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { EntityHelper } from '../utils/entity-helper';

export abstract class AbstractBaseEntityEntity extends EntityHelper {
  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'usr_cre_id', type: String, nullable: false })
  usrCreId: string;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ name: 'usr_upd_id', type: String, nullable: true })
  usrUpdId: string;

  @Column({ name: 'del_flg', type: 'boolean', nullable: false, default: false })
  delFlg: boolean;
}
