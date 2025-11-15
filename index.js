let fs = require("fs");

function x(a) {
  fs.readFile("a.txt", (err, data) => {
    console.log(data.toString("utf8"));
    a();
  });
  console.log("x");
}

function y(b) {
  console.log("y");
  b();
}

function z() {
  console.log("z");
}

// callback hell
x(() => {
  y(() => {
    z();
  });
});

/*
x
I am 'a'
y
z
*/
