import { getAll, getById } from "../services/libraries-service.js";


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
    try {
        const { id } = req.params
        const library = await getById(id);
        res.status(200).send(library);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

export { getAllLibraries, getLibraryById }