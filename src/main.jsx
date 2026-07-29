import React from "react";
import { hydrateRoot } from "react-dom/client";
import { EnglishPolicy, PolishPolicy } from "./policy.jsx";
import "./globals.css";

const isPolish = window.location.pathname.endsWith("/pl") ||
  window.location.pathname.endsWith("/pl/");

document.documentElement.lang = isPolish ? "pl" : "en";
document.title = isPolish
  ? "Polityka prywatności | DataOverlay"
  : "Privacy Policy | DataOverlay";

hydrateRoot(
  document.getElementById("root"),
  isPolish ? <PolishPolicy /> : <EnglishPolicy />
);
