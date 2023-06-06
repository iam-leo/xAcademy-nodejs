import { getAll } from "../services/libraries-service.js";


const getAllLibraries = async (req, res) =>{
    try {
        const libraries = await getAll();
        res.status(200).send(libraries);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }    
}

export { getAllLibraries }