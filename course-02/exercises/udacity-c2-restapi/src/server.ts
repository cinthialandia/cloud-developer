import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";

dotenv.config();

import { sequelize } from "./sequelize";
import { IndexRouter } from "./controllers/v0/index.router";
import { V0MODELS } from "./controllers/v0/model.index";

(async () => {
  sequelize.addModels(V0MODELS);
  await sequelize.sync();

  const app = express();
  const port = process.env.PORT || 8080; // default port to listen

  app.use(bodyParser.json());
  app.use(cors());

  //CORS Should be restricted
  // app.use(function (req, res, next) {
  //   res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  //   res.header(
  //     "Access-Control-Allow-Headers",
  //     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  //   );
  //   next();
  // });

  app.use("/api/v0/", IndexRouter);

  // Root URI call
  app.get("/", async (req, res) => {
    res.send("/api/v0/");
  });

  // Start the Server
  app.listen(port, () => {
    console.log(`server running http://localhost:${port}`);
    console.log(`press CTRL+C to stop server`);
  });
})();
