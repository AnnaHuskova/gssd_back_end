import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  DB_PROTOCOL,
  DB_GUEST_USERNAME,
  DB_GUEST_SEC,
  DB_HOST: DB_ADDRESS,
  // JWT_ACCESS_SECRET,
  // JWT_REFRESH_SECRET,
} = process.env;

const DB_HOST:string = `${DB_PROTOCOL}${DB_GUEST_USERNAME}:${DB_GUEST_SEC}${DB_ADDRESS}`;

export {
  PORT,
  DB_HOST,
  // JWT_ACCESS_SECRET,
  // JWT_REFRESH_SECRET,
};
