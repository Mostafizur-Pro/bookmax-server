import { IGenericResponse } from "../../../Interface/common";
import { IBook } from "./book.interface";
import { Book } from "./book.model";

export const createBook = async (book: IBook): Promise<IBook> => {
  const createdBook = await Book.create(book);
  if (!createBook) {
    throw new Error("Failed to create Book!");
  }

  return createdBook;
};
export const getAllBook = async (): Promise<IGenericResponse<IBook[]>> => {
  const result = await Book.find();
  const total = result.length;

  return {
    meta: {
      total,
    },
    data: result,
  };
};

export default { createBook, getAllBook };
