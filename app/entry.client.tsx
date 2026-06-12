import { hydrateRoot } from "react-dom/client";
import { HydratedRouter } from "react-router/dom";

// Perform the redirect logic before hydration
const redirect = sessionStorage.redirect;
if (redirect) {
  delete sessionStorage.redirect;
  const url = new URL(redirect, window.location.origin);
  const path = url.pathname.replace("/pre-gpd", "") + url.search + url.hash;
  window.history.replaceState(null, "", path);
}

hydrateRoot(
  document.getElementById("root")!,
  <HydratedRouter />
);