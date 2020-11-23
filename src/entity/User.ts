import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "terms" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  term: string;

  @Column()
  meaning: string;
}
