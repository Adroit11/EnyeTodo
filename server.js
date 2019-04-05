const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const todos = [
  {
    id: 1,
    name: "Install nodejs",
    completed: false
  },
  {
    id: 2,
    name: "Install nextjs.",
    completed: false
  }
];

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/todo-list", (req, res) => {
      console.log("Request received...");
      return res.status(200).json(todos);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
