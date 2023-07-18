export type IComment = {
  email: string;
  review: string;
};
export type IBooks = {
  title: string;
  image_link: string;
  email?: string;
  genre: string;
  author: string;
  publication: string;
  comment: IComment[];
};

export const BookFilterableFields = ["searchTerm", "title", "author", "genre"];
