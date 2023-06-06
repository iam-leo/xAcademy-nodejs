import { Library } from "../models/library.js";

const getAll = async () => {
    //Obtener todas las librerias
    const listLibrary = await Library.findAll();

    return listLibrary;
}

export { getAll }