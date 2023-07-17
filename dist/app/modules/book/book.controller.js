"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("./book.service");
const pick_1 = __importDefault(require("../../../shared/pick"));
const createBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { book } = req.body;
        console.log(book);
        const result = yield book_service_1.BookService.createBook(book);
        res.status(200).json({
            success: true,
            message: "Book added SuccessFully",
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            success: false,
            message: "Cannot created book successfully",
        });
    }
});
const getAllBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const filters = (0, pick_1.default)(req.query, ["searchTerm", "title", "author", "genre"]);
    const paginationOptions = (0, pick_1.default)(req.query, [
        "page",
        "limit",
        "sortBy",
        "sortOrder",
    ]);
    const result = yield book_service_1.BookService.getBooks(filters, paginationOptions);
    res.status(200).json({
        success: true,
        message: "Book Retrieved SuccessFully",
        meta: result.meta,
        data: result.data,
    });
});
const getSingleBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.BookService.getSingleBook(id);
    res.status(200).json({
        success: true,
        message: "Book Retrieved SuccessFully",
        data: result,
    });
});
const updateBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const updatedData = req.body;
    const result = yield book_service_1.BookService.updateBook(id, updatedData);
    res.status(200).json({
        success: true,
        message: "Book Retrieved SuccessFully",
        data: result,
    });
});
const deleteBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const result = yield book_service_1.BookService.deleteBook(id);
    res.status(200).json({
        success: true,
        message: "Book Deleted SuccessFully",
        data: result,
    });
});
exports.BookController = {
    createBook,
    getAllBook,
    getSingleBook,
    updateBooks,
    deleteBook,
};
