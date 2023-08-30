const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is Home Page");
    res.end();
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is About Page");
    res.end();
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("This is Contact Page");
    res.end();
  } else if (url === "/file-write") {
    fs.writeFile("demo.txt", "hello world", (err) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.write("Error writing to file");
      } else {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("File created and text written successfully");
      }
      res.end();
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.write("Page not found");
    res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
