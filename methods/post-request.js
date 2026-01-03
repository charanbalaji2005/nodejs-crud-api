const crypto = require("crypto");
const bodyParser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");

module.exports = async (req, res) => {
  if (req.url === "/api/movies") {
    try {
      const body = await bodyParser(req);
      body.id = crypto.randomUUID();

      req.movies.push(body);
      await writeToFile(req.movies);

      res.writeHead(201);
      res.end(JSON.stringify(body));
    } catch {
      res.writeHead(400);
      res.end(
        JSON.stringify({ title: "Validation Failed", message: "Invalid body" })
      );
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};
