"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var pg_pool_1 = __importDefault(require("pg-pool"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var pgConfig_1 = __importDefault(require("./pgConfig"));
var PORT = "3000";
var reactUi = "8000";
// const nx = "4200";
var app = express_1.default();
var pool = new pg_pool_1.default(pgConfig_1.default);
pool
    .connect()
    .then(function (data) { return console.log("hello im connected:", data); })
    .catch(function (error) { return console.log(error); });
app.use(cors_1.default({
    origin: ["http://localhost:" + reactUi]
}));
app.get('/', function (request, response) {
    response.json({ info: 'Node.js, Express, and Postgres API' });
});
app.listen(PORT, function () {
    console.log("hello microservices: listening to " + PORT);
});
