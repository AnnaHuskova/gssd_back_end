import express from "express";
// const logger = require("morgan");
// const cors = require("cors");
import * as bodyParser from "body-parser";
import { initialize } from 'express-openapi';
import createError from "./src/helpers/errors";

import routes from "./src/routes/api";

const app = express();

initialize({
  apiDoc: "./doc/openapi.json",
  app,
  docsPath: "/api-definition",
  exposeApiDocs: (app.get("env") === "development"),
  paths: "./src/routes/api",
  routesGlob: '**/*.{ts,js}',
  routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
});

const logFormat = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(logFormat));
// app.use(cors());

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));

//List of valid REST api routes
// app.use("/api/", swaggerRouter);
// app.use("/api/districts", routes.districts);
// app.use("/api/green_areas", routes.green_areas);
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
