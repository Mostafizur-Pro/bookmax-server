import { IUser } from "./user.interface";
import { User } from "./user.model";

export const createUser = async (user: IUser): Promise<IUser> => {
  const createdUser = await User.create(user);
  if (!createUser) {
    throw new Error("Failed to create user!");
  }

  return createdUser;
};

export default { createUser };
