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
  };
};
