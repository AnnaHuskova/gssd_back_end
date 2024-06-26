import express from "express";
// const logger = require("morgan");
// const cors = require("cors");
import * as bodyParser from "body-parser";
import { initialize } from 'express-openapi';
import  swaggerUi from 'swagger-ui-express';
import createError from "./src/helpers/errors";
import apiConfigDoc from "./doc/openapi.json"

import routes from "./src/routes/api";

const app = express();

initialize({
  apiDoc: "./doc/openapi.json",
  app,
  docsPath: "/api-docs/openapi.json",
  exposeApiDocs: (app.get("env") === "development"),
  paths: "./src/routes/",
  routesGlob: '**/*.{ts,js}',
  routesIndexFileRegExp: /(?:index)?\.[tj]s$/,
});

const logFormat = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(logFormat));
// app.use(cors());

// app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("public"));

// app.use("/api/districts", routes.districts)

const options = {
  swaggerOptions: {
    url: "/api-docs/openapi.json",
  }
}

// app.get("/api-docs", (req, res) => {return res.json()})
// app.use("/api-docs", swaggerUi.serve)

app.use(["/docs"], swaggerUi.serve, swaggerUi.setup(null, options));


//List of valid REST api routes
// app.use("/api/", swaggerRouter);
// app.use("/api/districts", routes.districts);
// app.use("/api/green_areas", routes.green_areas);
// app.use("/api/users", usersRouter);

//Route 404
// app.use((req, res) => {
//   throw createError(404, "Nothing here. Do you know da wae?");
// });

//Error handler
app.use((err, req, res, next) => {
  const { status = 500, message = "Internal Server Error" } = err;
  res.status(status).json({ message });
});

export default app;
