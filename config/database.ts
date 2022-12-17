export default ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", env("DATABASE_HOST")),
      port: env.int("DATABASE_PORT", env("DATABASE_PORT")),
      database: env("DATABASE_NAME", env("DATABASE_NAME")),
      user: env("DATABASE_USERNAME", env("DATABASE_USERNAME")),
      password: env("DATABASE_PASSWORD", env("DATABASE_PASSWORD")),
      ssl: { rejectUnauthorized: false },
    },
  },
});
