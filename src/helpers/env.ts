// require("dotenv").config();
import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  DB_HOST,
  // JWT_ACCESS_SECRET,
  // JWT_REFRESH_SECRET,
} = process.env;

export {
  PORT,
  DB_HOST,
  // JWT_ACCESS_SECRET,
  // JWT_REFRESH_SECRET,
};
