// plugins.js
export default ({ env }) => {
  return {
    wysiwyg: {
      enabled: true,
      resolve: "./src/plugins/wysiwyg", // path to plugin folder
    },
    // graphql:
    graphql: {
      config: {
        endpoint: "/graphql",
        shadowCRUD: true,
        playgroundAlways: false,
        depthLimit: 7,
        amountLimit: 100,
        apolloServer: {
          tracing: false,
        },
      },
    },
    "react-icons": true,
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: env("SMTP_HOST", "smtp.gmail.com"),
          port: env("SMTP_PORT", 587),
          auth: {
            user: env("NODEMAILER_USER"),
            pass: env("NODEMAILER_PASS"),
          },
        },
        settings: {
          defaultFrom: "form-subscribe-template",
        },
      },
    },
  };
};
