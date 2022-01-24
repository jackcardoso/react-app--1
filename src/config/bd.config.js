module.exports = {
    host: "db",
    port: "5432",
    user: "postgres",
    password: "mypass",
    db: "postgres",
    dialect: "postgres",
    dialectOptions: {
        ssl: { rejectUnauthorized: false },
      },
  };