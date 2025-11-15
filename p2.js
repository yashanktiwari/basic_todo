let fs = require("fs");

fs.promises
  .readFile("a.txt")
  .then((data) => {
    console.log(data.toString("utf8"));
  })
  .catch((err) => {
    console.log(err);
  });
