import { TList, TItem, TUser, TUserList } from "../types";

export const lists: TList[] = [
  {
    id: "1",
    title: "список желаний на день рождения",
    description: "подробное описание списка покупок",
    author: "@sysdba17",
    createData: 12312124121,
  },
  {
    id: "2",
    title: "что не забыть купить в магазине",
    description: "список обязательных покупок на день",
    author: "@sysdba17",
    createData: 1231265756751,
  },
];

export const items: TItem[] = [
  {
    id: "1",
    list_id: "1",
    title: "лобзик",
    description: "хочу купить лобзик",
    link: "https://ya.ru",
    image: "https://ya.ru",
    purchased: false,
    author: "@sysdba17",
    createData: 12312124121,
  },
  {
    id: "2",
    list_id: "1",
    title: "укулеле",
    description: "хочу купить укулеле на др по сумме до 2000",
    link: "https://ya.ru",
    image: "https://ya.ru",
    purchased: false,
    author: "@sysdba17",
    createData: 12312124121,
  },
  {
    id: "3",
    list_id: "2",
    title: "яица",
    description: "кончились яица",
    purchased: false,
    author: "@sysdba17",
    createData: 12312124121,
  },
  {
    id: "4",
    list_id: "2",
    title: "купить молоко",
    description: "не забудь купить спички",
    purchased: false,
    author: "@sysdba17",
    createData: 12312124121,
  },
  {
    id: "5",
    list_id: "2",
    title: "туалетная бумага",
    description: "срочно",
    purchased: true,
    author: "@sysdba17",
    createData: 12312124121,
  },
];

export const users: TUser[] = [
  {
    id: "44",
    name: "Антон",
    nick: "@sysdba17",
  },
  {
    id: "33",
    name: "Alex",
    nick: "@su33",
  },
];

export const userList: TUserList[] = [
  {
    user_id: "44",
    list_id: "1",
  },
  {
    user_id: "44",
    list_id: "2",
  },
  {
    user_id: "33",
    list_id: "2",
  },
];
