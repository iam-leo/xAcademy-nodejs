import { createBookRow, deleteBookRow, getAll, getById, updateBookRow } from "../services/books-services.js";


const getAllBooks = async (req, res) =>{
    try {
        const books = await getAll();
        res.status(200).send(books);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

const getBookById = async (req, res) =>{
    try {
        const { id } = req.params
        const book = await getById(id);
        res.status(200).send(book);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

const createBook = async (req, res, next) =>{
    const {isbn, titulo, autor, year, library} = req.body;

    try {
        const book = await createBookRow(isbn, titulo, autor, year, library);
        res.status(200).send(book);
    } catch (error) {
        next(error)
    }
}

const updateBook = async (req, res, next) => {
    const { id } = req.params;
    const { isbn, titulo, autor, year, library } = req.body;
    try {
        const book = await updateBookRow( id, isbn, titulo, autor, year, library);
        res.status(200).send(book);
    } catch (error) {
        next(error)
    }
}

const deleteBook = async (req, res, next) => {
    const { id } = req.params;

    try {
        const book = await deleteBookRow( id );
        res.status(200).send(book);
    } catch (error) {
        next(error)
    }
}

export { getAllBooks, getBookById, createBook, updateBook, deleteBook }