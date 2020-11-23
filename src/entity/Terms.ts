import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "terms" })
export class Term {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  term: string;

  @Column()
  meaning: string;
}
