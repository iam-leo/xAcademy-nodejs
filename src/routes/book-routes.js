import express  from "express";
import { getAllBooks, getBookById } from "../controllers/books-controller.js";


const routerBooks = express.Router();

routerBooks.get('/all-books', getAllBooks);
routerBooks.get('/book-id/:id', getBookById);

export { routerBooks }