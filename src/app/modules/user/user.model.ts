import { Model, Schema, model } from "mongoose";
import { IUser } from "./user.interface";

type UserModel = Model<IUser, object>;

const userSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const User = model<IUser, UserModel>("User", userSchema);
