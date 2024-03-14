import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ unique: true, name: 'user_name', type: String, nullable: false })
  name: string;

  @Column()
  email: string;

  @Column({ name: 'del_flg', type: 'boolean', default: false })
  delFlg: boolean;

  @Column({ name: 'salt', type: String, nullable: false })
  salt: string;
}
