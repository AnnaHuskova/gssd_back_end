import app from "./app";
import mongoose from "mongoose";

import { DB_HOST, PORT } from "./src/helpers/env";

if (DB_HOST === undefined) {
  console.error("ERROR: Unable to read database path");
  process.exit(1);
}
mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log(`Database connection established.`);
    app.listen(PORT);
  })
  .then(() =>
    console.log(
      `Server running. Use API on port: ${PORT}. Press [Ctrl + C] in terminal to stop it.`
    )
  )
  .catch((err) => {
    console.error("ERROR ", err);
    process.exit(1);
  });

// try {
//   app.listen(PORT);

//   console.log(
//     `Server running. Use our API on port: ${PORT}. Press [Ctrl + C] in terminal to stop it.`
//   );
// } catch (err) {
//   console.error("ERROR ", err);
//   process.exit(1);
// }
