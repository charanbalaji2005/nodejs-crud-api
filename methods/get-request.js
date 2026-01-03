module.exports = (req, res) => {
  const baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  const id = req.url.split("/")[3];

  const uuidV4 =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (req.url === "/api/movies") {
    res.writeHead(200);
    res.end(JSON.stringify(req.movies));
  } else if (!uuidV4.test(id)) {
    res.writeHead(400);
    res.end(
      JSON.stringify({ title: "Validation Failed", message: "Invalid UUID" })
    );
  } else if (baseUrl === "/api/movies/") {
    const movie = req.movies.find((m) => m.id === id);

    if (!movie) {
      res.writeHead(404);
      res.end(JSON.stringify({ title: "Not Found", message: "Movie not found" }));
    } else {
      res.writeHead(200);
      res.end(JSON.stringify(movie));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ title: "Not Found", message: "Route not found" }));
  }
};
