/**
 * This file was automatically generated by Strapi.
 * Any modifications made will be discarded.
 */
import graphql from "@strapi/plugin-graphql/strapi-admin";
import i18N from "@strapi/plugin-i18n/strapi-admin";
import usersPermissions from "@strapi/plugin-users-permissions/strapi-admin";
import wysiwyg from "../../src/plugins/wysiwyg/strapi-admin";
import { renderAdmin } from "@strapi/strapi/admin";

renderAdmin(document.getElementById("strapi"), {
  plugins: {
    graphql: graphql,
    i18n: i18N,
    "users-permissions": usersPermissions,
    wysiwyg: wysiwyg,
  },
});
