import { defineAuth, secret } from "@aws-amplify/backend";

/**
 * Define and configure your auth resource
 * @see https://docs.amplify.aws/gen2/build-a-backend/auth
 */
export const auth = defineAuth({
  loginWith: {
    email: true,
    externalProviders: {
      oidc: [
        {
          name: "SSOProvider",
          clientId: secret("SSOSecret"),
          clientSecret: secret("FEDERATE_SECRET"),
          issuerUrl: "https://issuer-url.example.com",
          attributeMapping: {
            email: "EMAIL",
            preferredUsername: "USER_NAME",
          },
        },
      ],
      callbackUrls: ["http://localhost:5173/k"],
      logoutUrls: ["http://localhost:5173/logout"],
    },
  },
});
