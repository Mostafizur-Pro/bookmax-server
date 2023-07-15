export type IUser = {
  name: string;
  image?: string;
  email: string;
  password: string;
};

export type IUserFilters = {
  searchTerm?: string;
};
