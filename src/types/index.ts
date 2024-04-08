export type TList = {
  id: string;
  title: string;
  description: string;
  author: string;
  createData: number;
};
export type TItem = {
  id: string;
  list_id: string;
  title: string;
  description?: string;
  link?: string;
  image?: string;
  purchased: boolean;
  author: string;
  createData: 12312124121;
};
export type TUser = {
  id: string;
  name?: string;
  nick: string;
};
export type TUserList = {
  user_id: string;
  list_id: string;
};
