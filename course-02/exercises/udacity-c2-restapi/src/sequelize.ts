import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

// Instantiate new Sequelize instance!
export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,

  dialect: "postgres",
  storage: ":memory:",
  logging: console.log,
});
