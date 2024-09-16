import fs from 'node:fs/promises'
import express from "express";

const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));
console.log("env=", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
//
app.get("/*", async(req, res) => {
  let htm = await fs.readFile('./dist/index.html', 'utf-8');
  res.send(htm);
});
//start
const port = 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
  