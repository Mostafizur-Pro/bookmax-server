import { Model, Schema, model } from "mongoose";
import { IBook } from "./book.interface";

type BookModel = Model<IBook, object>;

const bookSchema = new Schema<IBook>({
  title: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publication: {
    type: String,
    required: true,
  },
  image_link: {
    type: String,
    required: true,
  },
});
export const Book = model<IBook, BookModel>("Book", bookSchema);
