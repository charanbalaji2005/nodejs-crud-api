const bodyParser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");

module.exports = async (req, res) => {
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  const id = req.url.split("/")[3];

  const uuidV4 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidV4.test(id)) {
    res.writeHead(400);
    res.end(JSON.stringify({ title: "Validation Failed", message: "Invalid UUID" }));
  } else if (baseUrl === "/api/movies/") {
    try {
      const body = await bodyParser(req);
      const index = req.movies.findIndex((m) => m.id === id);

      if (index === -1) {
        res.writeHead(404);
        res.end(JSON.stringify({ title: "Not Found", message: "Movie not found" }));
      } else {
        req.movies[index] = { id, ...body };
        await writeToFile(req.movies);

        res.writeHead(200);
        res.end(JSON.stringify(req.movies[index]));
      }
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
