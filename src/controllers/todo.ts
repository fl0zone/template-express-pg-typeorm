import { Request, Response } from "express";
import { AppDataSource } from "../db";
import { Todo } from "../models/todo";

export async function getAllTodos(req: Request, res: Response) {
  const todos: Todo[] = await AppDataSource.getRepository(Todo).find();
  res.json(todos);
}

export async function createTodo(req: Request, res: Response) {
  const todo: Todo = await AppDataSource.getRepository(Todo).save({
    title: req.body.title,
    completed: false,
  });
  res.json(todo);
}

export async function toggleCompleted(req: Request, res: Response) {
  const todo: Todo | null = await AppDataSource.getRepository(Todo).findOneBy({
    id: parseInt(req.params.id),
  });
  if (!todo) {
    res.status(404).json({ message: "Todo not found" });
    return;
  }
  todo.completed = !todo.completed;
  await AppDataSource.getRepository(Todo).save(todo);

  res.json(todo);
}
