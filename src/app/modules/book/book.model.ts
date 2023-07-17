import { Model, Schema, model } from "mongoose";
import { IBooks } from "./book.interface";

type BookModel = Model<IBooks, object>;

const bookSchema = new Schema<IBooks>(
  {
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
export const Book = model<IBooks, BookModel>("Book", bookSchema);
