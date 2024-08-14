import { faker } from "@faker-js/faker";
import localforage from "localforage";
import { matchSorter } from "match-sorter";
import { sortBy } from "sort-by-typescript";

export type User = {
  id?: string;
  username?: string;
  email?: string;
  password?: string;
  phone?: string;
  address?: string;
  createdAt?: number;
};

// CREATE
export async function createUser(username: string, password: string) {
  await fakeNetwork();
  let user: User = {
    id: Math.random().toString(36).substring(2, 9),
    username,
    email: faker.internet.email(),
    password,
    phone: faker.phone.number(),
    address: faker.location.streetAddress(),
    createdAt: Date.now(),
  };
  let users: User[] = await getUsers();
  users.unshift(user);
  await set(users);
  return user;
}

// READ
export async function getUser(id: string) {
  await fakeNetwork(`userById:${id}`);
  let users: User[] | null = await localforage.getItem("users");
  let user = users?.find((user: User) => user.id === id);
  return user ?? null;
}

export async function getUserByUsername(username: string) {
  await fakeNetwork(`userByUsername:${username}`);
  let users: User[] | null = await localforage.getItem("users");
  let user = users?.find((user: User) => user.username === username);
  return user ?? null;
}

// READ (many)
export async function getUsers(query = "") {
  await fakeNetwork(`getUsers:${query}`);
  let users: User[] | null = await localforage.getItem("users");
  if (!users) users = [];
  if (query) {
    users = matchSorter(users, query, { keys: ["first", "last"] });
  }
  return users.sort(sortBy("last", "createdAt"));
}

function set(users: User[]) {
  return localforage.setItem("users", users);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache: any = {};

async function fakeNetwork(key = "") {
  if (!key) {
    fakeCache = {};
  }

  if (fakeCache[key]) {
    return;
  }

  fakeCache[key] = true;
  return new Promise((res) => {
    setTimeout(res, Math.random() * 800);
  });
}
