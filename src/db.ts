import { DataSource } from "typeorm";

import { Todo } from "./models/todo";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: [Todo],
  synchronize: true,
  logging: false,
});
