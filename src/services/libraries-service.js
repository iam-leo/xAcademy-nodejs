import { Library } from "../models/library.js";

const getAll = async () => {
    //Obtener todas las librerias
    try {
        const listLibrary = await Library.findAll();

        //Validar si existen librerias
        if(listLibrary.length === 0){
            throw new Error('No hay librerías');
        }else{
            return listLibrary;
        }   
    } catch (error) {
        throw error;
    }
    
}

const getById = async (id) => {
    
    try {
        //Obtener todas las librerias
        const library = await Library.findByPk(id);

        //Validar que la libreria existe en la DB
        if(!library || library.existe === 0){
            throw new Error('No existe la librería');
        }else{
            return library;
        }
    } catch (error) {
        throw error;
    }
    
}

const createLibraryRow = async ( name, location, telefono, existe=1) => {
    const library = new Library();

    //Validar que los campos no vengan vacíos
    const isValid = validate(name, location, telefono);

    if(!isValid.isValid){
        throw new Error(isValid.error)
    }else{
        library.name = name;
        library.location = location;
        library.telefono = telefono;
        library.existe = existe;
    }    

    const libraryCreated = await library.save();

    return libraryCreated;
}

const updateLibraryRow = async ( id, name, location, telefono) => {
    try {
        const library = await getById(id);

        if(library){
            if(name){
                library.name = name;
            }
        
            if(location){
                library.location = location;
            }
        
            if(telefono){
                library.telefono = telefono;
            }           
        
            const libraryUpdated = await library.save();
        
            return libraryUpdated;
        }else{
            throw new Error('Librería no encontrada');
        }
        
    } catch (error) {
        throw error;
    }

    
}

const validate = (name, location, telefono) => {
    if(name === ''){
        return {
            isValid: false,
            error: "No puedes enviar el nombre vacío"
        }
    }else if(location === ''){
        return {
            isValid: false,
            error: "No puedes enviar la locación vacía"
        }
    }else if(telefono === ''){
        return {
            isValid: false,
            error: "No puedes enviar el telefono vacío"
        }
    }else{
        return {
            isValid: true
        }
    }
}

const deleteLibraryRow = async (id) => {
    try {
        const library = await getById(id);

        if(library){
            //Marcamos como libreria eliminada
            library.existe = 0           
        
            const libraryDeleted = await library.save();
        
            return libraryDeleted;
        }else{
            throw new Error('Librería no encontrada');
        }
        
    } catch (error) {
        throw error;
    }
}

export { getAll, getById, createLibraryRow, updateLibraryRow, deleteLibraryRow }