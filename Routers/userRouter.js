import express from "express";
import {
  createUser,
  fetchUser,
  editUser,
  deleteUser,
} from "../Controllers/userController.js";

const router = express.Router();

// Define routes
router.post("/create-user", createUser);
router.get("/get-user", fetchUser);
router.put("/update-user/:id", editUser);
router.delete("/delete-user/:id", deleteUser);

export default router;
