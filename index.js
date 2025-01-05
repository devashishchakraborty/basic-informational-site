import { createServer } from "http";
import { parse } from "url";
import { readFile } from "fs";

createServer((req, res) => {
  const q = parse(req.url, true);
  const filename = "." + (q.pathname === "/" ? "/index.html" : q.pathname);
  readFile(filename, (err, data) => {
    if (err) {
      readFile("./404.html", (err, data) => {
        if (err) {
          res.writeHead(404, {"Content-Type": "text/html"});
          return res.end("404: Not Found");
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
      })
    }
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  })
}).listen(8080);

console.log("Running on http://localhost:8080/")
