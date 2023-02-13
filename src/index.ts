import "reflect-metadata";
import * as express from "express";
import * as bodyParser from "body-parser";

import TodoRouter from "./routes/todo";
import { AppDataSource } from "./db";

const app = express();

app.use(bodyParser.json());

app.use(TodoRouter);

AppDataSource.connect().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
  });
}).catch((err) => {
  console.error(err);
});
