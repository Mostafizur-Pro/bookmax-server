"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const book_route_1 = require("./app/modules/book/book.route");
const user_router_1 = require("./app/modules/user/user.router");
const app = (0, express_1.default)();
// middleware
app.use((0, cors_1.default)());
// parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Book Application
app.use("/api/v1/books/", book_route_1.BookRoute);
app.use("/api/v1/users/", user_router_1.UserRoute);
app.get("/", (req, res) => {
    res.send("Working successfully");
});
exports.default = app;
