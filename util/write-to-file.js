const fs = require("fs/promises");
const path = require("path");

module.exports = async (data) => {
  await fs.writeFile(
    path.join(__dirname, "..", "data", "movies.json"),
    JSON.stringify(data, null, 2),
    "utf-8"
  );
};
