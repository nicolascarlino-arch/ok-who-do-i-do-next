import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  const { pathname } = context.url;

  // Don't protect the login page
  if (pathname.startsWith("/login")) {
    return next();
  }

  const auth = context.cookies.get("site-auth")?.value;
  if (auth !== "okwhodoidonext2025") {
    return context.redirect("/login");
  }

  return next();
});