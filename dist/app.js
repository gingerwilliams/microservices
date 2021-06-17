"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var PORT = "3000";
var reactUi = "8000";
// const nx = "4200";
var app = express_1.default();
app.use(cors_1.default({
    origin: ["http://localhost:" + reactUi]
}));
app.listen(PORT, function () {
    console.log("hello microservices: listening to " + PORT);
});
