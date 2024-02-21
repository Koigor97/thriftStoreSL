import bycript from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bycript.hashSync("1234567", 10),
    isAdmin: true,
  },
  {
    name: "Johnny",
    email: "johnny@email.com",
    password: bycript.hashSync("1234567", 10),
    isAdmin: false,
  },
  {
    name: "Sam Doe",
    email: "samdoe@email.com",
    password: bycript.hashSync("1234567", 10),
    isAdmin: false,
  },
];

export default users;
