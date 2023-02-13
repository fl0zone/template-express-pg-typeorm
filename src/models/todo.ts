import { Column, Entity, PrimaryGeneratedColumn  } from "typeorm";

@Entity()
export class Todo {
  @PrimaryGeneratedColumn ()
  id: number;

  @Column({
    length: 100,
    type: "varchar",
  })
  title: string;

  @Column("boolean")
  completed: boolean;
}
