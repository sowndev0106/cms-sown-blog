module.exports = {
  routes: [
    {
      method: "POST",
      path: "/subscribers/subscribe",
      handler: "subscriber.subscriber",
    },
  ],
};
