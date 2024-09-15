import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { MongoDB } from "./Database/config.js"; // Importing database connection
import userRouter from "./Routers/userRouter.js"; // Importing user routes

// Load environment variables from the .env file
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(
  cors({
    origin: "*", // You might want to specify a more secure origin in production
    credentials: true,
  })
);

// DB connectivity
MongoDB();

// Access the environment variables
const port = process.env.PORT || 4000;
const message = process.env.MESSAGE || "Hello, World!";

// Default Route
app.get("/", (req, res) => {
  res.status(200).send(message);
});

// API Routes
app.use("/api/user", userRouter);

// Listen
app.listen(port, () => {
  console.log(`App is running on http://localhost:${port}`);
});
