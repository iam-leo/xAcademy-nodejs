import { Book } from "../models/book.js";

const getAll = async () => {
    //Obtener todas las librerias
    const listBook = await Book.findAll();

    return listBook;
}

const getById = async (id) => {
    //Obtener todas las librerias
    const book = await Book.findByPk(id);

    return book;
}

const getBookLibrary = async (library) => {
    //Obtener libros en una libreria
    const booksLibrary = await Book.findAll({where: {library}});

    return booksLibrary
}

export { getAll, getById, getBookLibrary }