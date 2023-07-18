"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUser = exports.createUser = void 0;
const user_model_1 = require("./user.model");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    const createUser = yield user_model_1.User.create(user);
    if (!createUser) {
        throw new Error("Failed to create user!");
    }
    return createUser;
});
exports.createUser = createUser;
const getAllUser = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield user_model_1.User.find();
    const total = result.length;
    return {
        meta: {
            total,
        },
        data: result,
    };
});
exports.getAllUser = getAllUser;
// const getAllUser = async (
//   filters: IUserFilters,
//   paginationOptions: IPaginationOptions
// ): Promise<IGenericResponse<IUser[]>> => {
//   const { searchTerm, ...filterData } = filters;
//   const andConditions = [];
//   if (searchTerm) {
//     andConditions.push({
//       $or: userSearchableFields.map((field) => ({
//         [field]: {
//           $regex: searchTerm,
//           $options: "i",
//         },
//       })),
//     });
//   }
//   if (Object.keys(filterData).length) {
//     andConditions.push({
//       $and: Object.entries(filterData).map(([field, value]) => ({
//         [field]: value,
//       })),
//     });
//   }
//   const { page, limit, skip, sortBy, sortOrder } =
//     paginationHelpers.calculatePagination(paginationOptions);
//   const sortConditions: { [key: string]: SortOrder } = {};
//   if (sortBy && sortOrder) {
//     sortConditions[sortBy] = sortOrder;
//   }
//   const whereConditions =
//     andConditions.length > 0 ? { $and: andConditions } : {};
//   const result = await AcademicSemester.find(whereConditions)
//     .sort(sortConditions)
//     .skip(skip)
//     .limit(limit);
//   const total = await AcademicSemester.countDocuments();
//   return {
//     meta: {
//       page,
//       limit,
//       total,
//     },
//     data: result,
//   };
// };
exports.default = { createUser: exports.createUser, getAllUser: exports.getAllUser };
