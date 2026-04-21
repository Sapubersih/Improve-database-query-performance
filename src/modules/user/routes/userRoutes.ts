import express from "express";
import {
  getUsersController,
  getUserController,
} from "../controllers/userController";

const router = express.Router();

router.get("/", getUsersController);       // ?page=1&limit=10
router.get("/:id", getUserController);

export default router;
