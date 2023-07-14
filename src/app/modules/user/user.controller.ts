import { Request, Response } from "express";
import userService from "./user.service";

const createUser = async (req: Request, res: Response) => {
  try {
    const { user } = req.body;
    const result = await userService.createUser(user);
    res.status(400).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create user",
    });
  }
};
const getAllUser = async (req: Request, res: Response) => {
  try {
    const result = await userService.getAllUser();
    res.status(400).json({
      success: true,
      message: "All User get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get all user",
    });
  }
};

export default {
  createUser,
  getAllUser,
};
