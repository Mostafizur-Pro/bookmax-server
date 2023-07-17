"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRoute = void 0;
const express_1 = __importDefault(require("express"));
const book_controller_1 = require("./book.controller");
const router = express_1.default.Router();
router.post("/create-book", book_controller_1.BookController.createBook);
router.get("/get-book", book_controller_1.BookController.getAllBook);
router.get("/getSingle-books/:id", book_controller_1.BookController.getSingleBook);
router.patch("/updateBook/:id", book_controller_1.BookController.updateBooks);
router.delete("/deleteBook/:id", book_controller_1.BookController.deleteBook);
exports.BookRoute = router;
