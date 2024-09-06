import { factories } from "@strapi/strapi";
import axios from "axios";
import { v4 } from "uuid";

export default factories.createCoreController(
  "api::subscriber.subscriber",
  ({ strapi }) => ({
    async subscribe(ctx) {
      const { email, name, captchaToken } = ctx.request.body as {
        email: string;
        name: string;
        captchaToken: string;
      };

      // Verify reCAPTCHA
      const recaptchaVerifyUrl =
        "https://www.google.com/recaptcha/api/siteverify";
      const recaptchaResponse = await axios.post(recaptchaVerifyUrl, null, {
        params: {
          secret: process.env.GOOGLE_RECAPTCHA_SECRET,
          response: captchaToken,
        },
      });

      if (!recaptchaResponse.data.success) {
        return ctx.badRequest("reCAPTCHA verification failed");
      }
      // Create subscriber
      try {
        const subscriber = await strapi.entityService.create(
          "api::subscriber.subscriber",
          {
            data: {
              email,
              name,
              isSubscribe: true,
              uuid: v4(),
            },
          }
        );

        // Send confirmation email
        await strapi.plugins["email"].services.email.send({
          cc: process.env.MAIL_CC || "nguyenthanhson162001@gmail.com",
          to: email,
          from: "no-reply@sowndev.com",
          subject: "Subscription Confirmation - sowndev",
          html: `
            <p>Hi <b>${name}</b>,</p>
            
            <p>Thank you for subscribing to sowndev. We're excited to have you on board!</p>
            
            <p>You'll now receive updates on our latest content, promotions, and news.</p>

            <p>Best regards,<br>sowndev Team</p>
          `,
        });

        return ctx.send({
          message: "Subscription successful",
          subscriber,
        });
      } catch (error) {
        console.error("Subscription or email sending failed:", error);
        return ctx.badRequest("Subscription failed");
      }
    },
  })
);
