import { getAll, getById } from "../services/books-services.js";


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

export { getAllBooks, getBookById }