const path = require("path");
const dotenv = require("dotenv")

dotenv.config({ path: path.resolve(__dirname, "..", ".env") });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL must be provided");
}

const dbURl = process.env.NODE_ENV === 'test' ? process.env.TEST_DATABASE_URL : process.env.DATABASE_URL
module.exports = {
  type: "postgres",
  url: dbURl,
  logging: process.env.NODE_ENV === 'development',
  entities: [__dirname + "/db/entities/*"],
  migrations: [__dirname + "/db/migrations/*"],
  cli: {
    entitiesDir: "db/entities",
    migrationsDir: "db/migrations"
  }
}
