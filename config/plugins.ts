// plugins.js
export default ({ env }) => {
  return {
    wysiwyg: {
      enabled: true,
      resolve: "./src/plugins/wysiwyg", // path to plugin folder
    },
    // config  CLOUDINARY
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },

    // graphql: 
    graphql: {
      config: {
        endpoint: '/graphql',
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
