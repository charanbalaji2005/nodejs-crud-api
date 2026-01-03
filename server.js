const http = require("http");
require("dotenv").config();

const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");

let movies = require("./data/movies.json");

const PORT = process.env.PORT || 5001;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  req.movies = movies;

  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.writeHead(404);
      res.end(
        JSON.stringify({ title: "Not Found", message: "Route not found" })
      );
  }
});

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
