import express from "express";
import cors from "cors";
import createError from "./src/helpers/errors";
import routes from "./src/routes/api";

const app = express();
const logFormat = app.get("env") === "development" ? "dev" : "short";

// CORS Configuration
const corsOptions: cors.CorsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000', // Replace with your frontend URL
  optionsSuccessStatus: 200,
  credentials: true, // Allows sending cookies and authentication headers
};

// Use CORS globally
app.use(cors(corsOptions));

app.use(express.json());
app.use(express.static("public"));

// API routes
app.use("/api/districts", routes.districtRoutes);
app.use("/api/green-areas", routes.greenAreaRoutes);
app.use("/api/health", routes.healthCheck);

// Route to simulate a 500 error for testing
app.get('/api/error-route', (req: express.Request, res: express.Response, next: express.NextFunction) => {
  next(new Error('Internal Server Error'));
});

// Handle 404 error
app.use((req, res, next) => {
  next(createError(404, "Nothing here. Do you know da wae?"));
});

// Error handler
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

export default app;