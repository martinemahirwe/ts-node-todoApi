import express, { Router } from "express";
import {
  getAllTodos,
  createTodo,
  getTodoById,
  updateTodo,
  deleteTodo,
} from "../controllers/todo_controller";

const router: Router = express.Router();

router.get("/", getAllTodos);
router.post("/", createTodo);
router.get("/:id", getTodoById);
router.patch("/:id", updateTodo);
router.delete("/:id", deleteTodo);

export default router;
