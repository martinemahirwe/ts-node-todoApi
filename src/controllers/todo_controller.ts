import { Request, Response } from "express";
import Todo, { ITodo } from "../models/todo_model";

export const getAllTodos = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todos: ITodo[] = await Todo.find();
    res.status(200).json({
      success: true,
      data: todos,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const createTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todo: ITodo = await Todo.create(req.body);
    res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const getTodoById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todo: ITodo | null = await Todo.findById(req.params.id);
    if (!todo) {
      res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    } else {
      res.status(200).json({
        success: true,
        data: todo,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

export const updateTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todo: ITodo | null = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!todo) {
      res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    } else {
      res.status(200).json({
        success: true,
        data: todo,
      });
    }
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const todo: ITodo | null = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      res.status(404).json({
        success: false,
        error: "Todo not found",
      });
    } else {
      res.status(200).json({
        success: true,
        data: {},
      });
    }
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};
