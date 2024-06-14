import express from "express";
// const logger = require("morgan");
import cors from "cors";
import createError from "./src/helpers/errors.js";

import routes from "./src/routes/api";

const app = express();

const logFormat = app.get("env") === "development" ? "dev" : "short";

const corsOptions: cors.CorsOptions = {
  optionsSuccessStatus: 200,
}

// app.use(logger(logFormat));
//app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.options("*", cors(corsOptions));

//List of valid REST api routes
// app.use("/api/", swaggerRouter);
app.use("/api/districts", cors(corsOptions), routes.districtRoutes);
app.use("/api/green-areas", cors(corsOptions), routes.greenAreaRoutes);
// app.use("/api/users", usersRouter);

//Route 404
app.use((req, res) => {
  throw createError(404, "Nothing here. Do you know da wae?");
});

//Error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

export default app;
