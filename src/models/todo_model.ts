import mongoose, { Schema, Document } from "mongoose";

export interface ITodo extends Document {
  name: string;
  due_time: Date;
  is_completed: boolean;
}

const todoSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    maxlength: [100, "Name cannot exceed 100 characters"],
  },
  due_time: {
    type: Date,
    required: [true, "Due time is required"],
  },
  is_completed: {
    type: Boolean,
    default: false,
  },
});

const Todo = mongoose.model<ITodo>("Todo", todoSchema);

export default Todo;
