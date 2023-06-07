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

export { getAll, getById }