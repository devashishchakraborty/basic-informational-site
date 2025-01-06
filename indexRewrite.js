import express from "express";
import path from "path";

const app = express();

app.get("/", (req, res) => res.sendFile(path.resolve("index.html")));

app.get("/:path", (req, res) => {
  const pathValue = req.params.path;
  const pages = ["index.html", "about.html", "contact-me.html"];
  const fileName = pages.includes(pathValue) ? pathValue : "404.html";
  res.sendFile(path.resolve(fileName));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`My first Express app - listening on port ${PORT}!`);
});
