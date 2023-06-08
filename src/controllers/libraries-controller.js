import { getBookLibrary } from "../services/books-services.js";
import { createLibraryRow, getAll, getById } from "../services/libraries-service.js";


const getAllLibraries = async (req, res) =>{
    try {
        const libraries = await getAll();
        res.status(200).send(libraries);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

const getLibraryById = async (req, res) =>{
    const { id } = req.params;

    //Junto las promesas para luego resolverlas juntas
    const promiseDB = [];
    promiseDB.push(getById(id));
    promiseDB.push(getBookLibrary(id));

    try {
        //Resuelvo las promesas
        const result = await Promise.all(promiseDB);
        res.status(200).send(result);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

const createLibrary = async (req, res, next) =>{
    const {name, location, telefono} = req.body;

    try {
        const library = await createLibraryRow(name, location, telefono);
        res.status(200).send(library);
    } catch (error) {
        next(error)
    }
}

export { getAllLibraries, getLibraryById, createLibrary }