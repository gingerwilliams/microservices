import express from "express";
import cors from "cors";

const PORT = "3000";
const reactUi = "8000";
// const nx = "4200";

const app = express();

app.use(cors({
    origin: [`http://localhost:${reactUi}`]
}));

app.listen(PORT, () => {
    console.log(`hello microservices: listening to ${PORT}`);
})