import app from "./app.js";
import mongoose from "mongoose";

import { DB_HOST, PORT } from "./src/helpers/env.js";

// mongoose
//   .connect(DB_HOST)
//   .then(() => {
//     console.log(`Database connection successful at host ${DB_HOST}`);
//     app.listen(PORT);
//   })
//   .then(() =>
//     console.log(
//       `Server running. Use our API on port: ${PORT}. Press [Ctrl + C] in terminal to stop it.`
//     )
//   )
//   .catch((err) => {
//     console.error("ERROR ", err);
//     process.exit(1);
//   });

try {
  app.listen(PORT);

  console.log(
    `Server running. Use our API on port: ${PORT}. Press [Ctrl + C] in terminal to stop it.`
  );
} catch (err) {
  console.error("ERROR ", err);
  process.exit(1);
}
