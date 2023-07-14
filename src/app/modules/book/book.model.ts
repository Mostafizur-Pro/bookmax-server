import { Model, Schema, model } from "mongoose";
import { IUser } from "./book.interface";

type UserModel = Model<IUser, object>;

const userSchema = new Schema<IUser>({
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
export const User = model<IUser, UserModel>("User", userSchema);
