// create an express app
const express = require("express");
const app = express();
const pg = require("pg");
const { Pool, Client } = require("pg");
// const pool = new Pool({
//   user: "aknfvgqykicyaj",
//   password: "ec54906cc75d89504edafe469d6bbdccc14920470fb8530cb693f1973231361c",
//   database: "d173srqrh9ou83",
//   host: "ec2-35-170-21-76.compute-1.amazonaws.com",
//   dialect: "postgres",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });
client = new Client({
  user: "aknfvgqykicyaj",
  password: "ec54906cc75d89504edafe469d6bbdccc14920470fb8530cb693f1973231361c",
  database: "d173srqrh9ou83",
  host: "ec2-35-170-21-76.compute-1.amazonaws.com",
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

// use the express-static middleware
app.use(express.static("public"));

// define the first route
app.get("/", function (req, res) {
  //   var connectionString =
  //     "postgres:ptudw:Kj5xlwkphoonXhFJj36LUUgGfbvkJEWN:dpg-cdi7rjsgqg4aiiseb19g-a.oregon-postgres.render.com:5432:cuoiky";

  client.connect();
  client.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
    client.end();
  });

  res.send("<h1>Hello World!adasas</h1>");
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
