import express from "express";
import ReactDOM from 'react-dom/server';
import {indexTemplate} from "./index.template";
import {App} from "../App";

const app = express();

app.use("/static", express.static("./dist/client"));

app.get("/", (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  );
})

app.get("/auth", (req, res) => {
  console.log(req.query.code);
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  );
})

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000")
})
