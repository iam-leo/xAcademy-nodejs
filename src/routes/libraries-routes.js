import express  from "express";
import { createLibrary, getAllLibraries, getLibraryById } from "../controllers/libraries-controller.js";
import { isAuthenticated } from "../middlewares/authentication.js";


const routerLibraries = express.Router();

routerLibraries.get('/all-libraries', getAllLibraries);
routerLibraries.get('/library-id/:id', getLibraryById);
routerLibraries.post('/create-library', isAuthenticated, createLibrary);

export { routerLibraries }