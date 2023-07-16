import { Model, Schema, model } from "mongoose";
import { IBook } from "./book.interface";

type BookModel = Model<IBook, object>;

const bookSchema = new Schema<IBook>(
  {
    _id: {
      type: String,
    },
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
    email: {
      type: String,
    },
    image_link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
export const Book = model<IBook, BookModel>("Book", bookSchema);
