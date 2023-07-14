import { Request, Response } from "express";
import bookService from "./book.service";

const createBook = async (req: Request, res: Response) => {
  try {
    const { book } = req.body;
    const result = await bookService.createBook(book);
    res.status(400).json({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to create book",
    });
  }
};
const getAllBook = async (req: Request, res: Response) => {
  try {
    const result = await bookService.getAllBook();
    res.status(400).json({
      success: true,
      message: "All book get successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Failed to get all book",
    });
  }
};

export default {
  createBook,
  getAllBook,
};
