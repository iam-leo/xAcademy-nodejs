import { Library } from "../models/library.js";

const getAll = async () => {
    //Obtener todas las librerias
    const listLibrary = await Library.findAll();

    return listLibrary;
}

const getById = async (id) => {
    //Obtener todas las librerias
    const library = await Library.findByPk(id);

    return library;
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

export { getAll, getById, createLibraryRow }