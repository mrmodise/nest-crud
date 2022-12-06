import {
  Column,
  Entity, IsNull,
  PrimaryGeneratedColumn
} from "typeorm";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;
}
