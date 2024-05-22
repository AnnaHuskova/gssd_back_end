import express from "express";
// const logger = require("morgan");
// const cors = require("cors");
import createError from "./src/helpers/errors.js";

import routes from "./src/routes/api";

const app = express();

const logFormat = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(logFormat));
// app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// app.use("/api/", swaggerRouter);
app.use("/api/districts", routes.districtRoutes);
app.use("/api/green-areas", routes.greenAreaRoutes);
// app.use("/api/users", usersRouter);

app.use((req, res) => {
  throw createError(404, "Nothing here. Do you know da wae?");
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

export default app;
