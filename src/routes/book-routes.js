import express  from "express";
import { createBook, getAllBooks, getBookById, updateBook } from "../controllers/books-controller.js";
import { isAuthenticated } from "../middlewares/authentication.js";


const routerBooks = express.Router();

routerBooks.get('/all-books', getAllBooks);
routerBooks.get('/book-id/:id', getBookById);
routerBooks.post('/create-book', isAuthenticated, createBook);
routerBooks.put('/edit-book/:id', isAuthenticated, updateBook);

export { routerBooks }