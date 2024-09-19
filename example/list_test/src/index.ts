import fs from 'node:fs/promises'
import express from "express";
//
import commonRouter from './routes/commonRouter';
import tableData from './routes/tableData';
//
const app = express();
//
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('dist'));
console.log("env=", process.env.NODE_ENV);
//
const errorObj = {ret: "NG", messase: "Error"};
//API
const data = tableData.addList();
//console.log(data);
app.use('/api/common', commonRouter);
//console.log("#api_START");
app.post("/api/table/get_list", async(req, res) => {
  try {
    const items = tableData.getList();
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.post("/api/table/create", async(req, res) => {
  try {
console.log(req.body);
    const items = tableData.create(req.body);
    //console.log(items);
    return res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
app.post("/api/table/delete", async(req: any, res: any) => {
  try {
    console.log(req.body);
    const items = tableData.delete(req.body);
//console.log(items);
    return res.json([]);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
//router.post('/test', async function(req: any, res: any) {
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
  