import { getById as getLibraryById }  from "./libraries-service.js";
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

const createBookRow = async ( isbn, titulo, autor, year, library) => {
    const book = new Book();

    //Validar que los campos no vengan vacíos
    const isValid = await validateFields(isbn, titulo, autor, year, library);

    if(!isValid.isValid){
        throw new Error(isValid.error)
    }else{
        book.isbn = isbn;
        book.titulo = titulo;
        book.autor = autor;
        book.year = year;
        book.existe = 1;
        book.library = library;
    }    

    const bookCreated = await book.save();

    return bookCreated;
}

const updateBookRow = async ( id, isbn, titulo, autor, year, library) => {
    try {
        const book = await getById(id);

        if(book){
            if(isbn){
                book.isbn = isbn;
            }
        
            if(titulo){
                book.titulo = titulo;
            }
        
            if(autor){
                book.autor = autor;
            }           
            
            if(year){
                book.year = year;
            }           
            
            if(library){
                book.library = library;
            }           
        
            const bookUpdated = await book.save();
        
            return bookUpdated;
        }else{
            throw new Error('Libro no encontrado');
        }
        
    } catch (error) {
        throw error;
    }
}

const validateFields = async (isbn, titulo, autor, year, library) => {
    if(typeof(isbn) !== 'number'){
        return {
            isValid: false,
            error: "No puedes enviar el isbn vacío o es incorrecto."
        }
    }else if(titulo === '' || typeof(titulo) !== 'string'){
        return {
            isValid: false,
            error: "No puedes enviar el titulo vacío es incorrecto."
        }
    }else if(autor === '' || typeof(autor) !== 'string'){
        return {
            isValid: false,
            error: "No puedes enviar el autor vacío es incorrecto."
        }
    }else if(year === '' || typeof(year) !== 'string'){
        return{
            isValid: false,
            error: "No puedes enviar el año vacío o es incorrecto"
        }
    }else if(typeof(library) !== 'number'){
        
        return {
            isValid: false,
            error: "No puedes enviar el ID de librería vacío es incorrecto."
        }
    } else{
        try {
            //Verifico en la DB si existe la libreria
            const existLibrary = await getLibraryById(library);
                        
            if(existLibrary){
                return {
                    isValid: true
                }
            }else{
                throw new Error('ID de librería inexistente');
            }               
        } catch (error) {
            throw error;
        }
    }
}

export { getAll, getById, getBookLibrary, createBookRow, updateBookRow }