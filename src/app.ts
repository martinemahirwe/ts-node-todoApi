import express, { Application } from "express";
import mongoose from "mongoose";
import todoRoutes from "./routers/todo_router";

const app: Application = express();
const bodyParser = require("body-parser");

const PORT: number = 8080;

app.use(bodyParser.json());

const MONGO_URI: string =
  "mongodb+srv://martinemahirwe:<password>@todo.9ryubex.mongodb.net/?retryWrites=true&w=majority&appName=Todo";

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.use("/api/v1/todos", todoRoutes);
