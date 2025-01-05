import { createServer } from "http";
import { parse } from "url";
import { readFile } from "fs";

createServer((req, res) => {
  const q = parse(req.url, true);
  const pages = ["/index.html", "/about.html", "/contact-me.html"];
  const filename =
    "." +
    (pages.includes(q.pathname)
      ? q.pathname
      : q.pathname === "/"
      ? "/index.html"
      : "/404.html");

  readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404: Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
}).listen(8080);

console.log("Running on http://localhost:8080/");
