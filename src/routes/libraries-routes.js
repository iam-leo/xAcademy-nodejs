import express  from "express";
import { getAllLibraries, getLibraryById } from "../controllers/libraries-controller.js";


const routerLibraries = express.Router();

routerLibraries.get('/all-libraries', getAllLibraries);
routerLibraries.get('/library-id/:id', getLibraryById);

export { routerLibraries }