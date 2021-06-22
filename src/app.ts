import Pool from "pg-pool";
import express from "express";
import cors from "cors";
import config from "./pgConfig";

const PORT = "3000";
const reactUi = "8000";
// const nx = "4200";

const app = express();

const pool = new Pool(config);

pool
    .connect()
    .then(data => console.log("hello im connected:", data))
    .catch(error => console.log(error))

app.use(cors({
    origin: [`http://localhost:${reactUi}`]
}));

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })

app.listen(PORT, () => {
    console.log(`hello microservices: listening to ${PORT}`);
})