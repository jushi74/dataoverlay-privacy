import fs from "node:fs";
import path from "node:path";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { createServer } from "vite";

const vite = await createServer({
  appType: "custom",
  server: { middlewareMode: true }
});
const { EnglishPolicy, PolishPolicy } = await vite.ssrLoadModule(
  "/src/policy.jsx"
);

const pages = [
  {
    file: path.resolve("dist/index.html"),
    element: React.createElement(EnglishPolicy)
  },
  {
    file: path.resolve("dist/pl/index.html"),
    element: React.createElement(PolishPolicy)
  }
];

for (const page of pages) {
  const html = fs.readFileSync(page.file, "utf8");
  const markup = renderToStaticMarkup(page.element);
  const rendered = html.replace(
    '<div id="root"></div>',
    `<div id="root">${markup}</div>`
  );

  if (rendered === html) {
    throw new Error(`Missing root placeholder in ${page.file}`);
  }

  fs.writeFileSync(page.file, rendered, "utf8");
}

await vite.close();
