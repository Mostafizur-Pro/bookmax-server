import { IGenericResponse } from "../../../Interface/common";
import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUser = async (user: IUser): Promise<IUser> => {
  const createdUser = await User.create(user);
  if (!createUser) {
    throw new Error("Failed to create user!");
  }

  return createdUser;
};
export const getAllUser = async (): Promise<IGenericResponse<IUser[]>> => {
  const result = await User.find();
  const total = result.length;

  return {
    meta: {
      total,
    },
    data: result,
  };
};

export default { createUser, getAllUser };
