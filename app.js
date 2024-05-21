import express from "express";
// const logger = require("morgan");
// const cors = require("cors");
import createError from "./src/helpers/errors.js";

const app = express();

const logFormat = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(logFormat));
// app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.use("/api/", swaggerRouter);
// app.use("/api/auth", authRouter);
// app.use("/api/users", usersRouter);

app.use((req, res) => {
  throw createError(404, "Not found");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

export default app;
