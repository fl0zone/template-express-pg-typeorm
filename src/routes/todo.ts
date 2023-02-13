import { Router } from "express";
import * as TodoController from "../controllers/todo";

const TodoRoutes = Router();

const ROUTE_PREFIX = "api";

TodoRoutes.get(`/${ROUTE_PREFIX}/todos`, TodoController.getAllTodos);
TodoRoutes.post(`/${ROUTE_PREFIX}/todos`, TodoController.createTodo);
TodoRoutes.put(`/${ROUTE_PREFIX}/todo/:id`, TodoController.toggleCompleted);

export default TodoRoutes;