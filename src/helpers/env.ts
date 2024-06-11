import dotenv from "dotenv";

dotenv.config();

const {
  PORT,
  DB_PROTOCOL,
  DB_READONLY_USERNAME,
  DB_READONLY_SEC,
  DB_HOST: DB_ADDRESS,
} = process.env;

const DB_HOST:string = `${DB_PROTOCOL}${DB_READONLY_USERNAME}:${DB_READONLY_SEC}${DB_ADDRESS}`;

export {
  PORT,
  DB_HOST,
};
