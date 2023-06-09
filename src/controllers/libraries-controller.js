import { getBookLibrary } from "../services/books-services.js";
import { createLibraryRow, deleteLibraryRow, getAll, getById, updateLibraryRow } from "../services/libraries-service.js";


const getAllLibraries = async (req, res, next) =>{
    try {
        const libraries = await getAll();
        res.status(200).send(libraries);
    } catch (error) {
        next(error);
    }    
}

const getLibraryById = async (req, res, next) =>{
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
        next(error);
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

const updateLibrary = async (req, res, next) => {
    const { id } = req.params;
    const {name, location, telefono} = req.body;
    try {
        const library = await updateLibraryRow( id, name, location, telefono);
        res.status(200).send(library);
    } catch (error) {
        next(error)
    }
}

const deleteLibrary = async (req, res, next) => {
    const { id } = req.params;

    try {
        const library = await deleteLibraryRow( id );
        res.status(200).send(library);
    } catch (error) {
        next(error)
    }
}

export { getAllLibraries, getLibraryById, createLibrary, updateLibrary, deleteLibrary }