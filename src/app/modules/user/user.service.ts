import { paginationHelpers } from "../../../Helpers/PaginationHelper";
import { IGenericResponse } from "../../../Interface/common";
import { IPaginationOptions } from "../../../Interface/pagination";
import { userSearchableFields } from "./user.constant";
import { IUser, IUserFilters } from "./user.interface";
import { User } from "./user.model";

export const createUser = async (user: IUser): Promise<IUser> => {
  const createUser = await User.create(user);
  if (!createUser) {
    throw new Error("Failed to create user!");
  }

  return createUser;
};
// export const getAllUser = async (): Promise<IGenericResponse<IUser[]>> => {
//   const result = await User.find();
//   const total = result.length;

//   return {
//     meta: {
//       total,
//     },
//     data: result,
//   };
// };
const getAllUser = async (
  filters: IUserFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IUser[]>> => {
  const { searchTerm, ...filterData } = filters;

  const andConditions = [];

  if (searchTerm) {
    andConditions.push({
      $or: userSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }
  if (Object.keys(filterData).length) {
    andConditions.push({
      $and: Object.entries(filterData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }
  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};
  const result = await AcademicSemester.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  const total = await AcademicSemester.countDocuments();
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

export default { createUser, getAllUser };
