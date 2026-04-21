import { Request, Response } from "express";
import { UserService } from "../services/userService";

const userService = new UserService();

export const getUsersController = async (req: Request, res: Response) => {
  try {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;

    const users = await userService.getUsers(page, limit);

    res.json(users);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserController = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const user = await userService.getUserById(id);

    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
