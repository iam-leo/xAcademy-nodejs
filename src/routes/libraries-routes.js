import express  from "express";
import { createLibrary, deleteLibrary, getAllLibraries, getLibraryById, updateLibrary } from "../controllers/libraries-controller.js";
import { isAuthenticated } from "../middlewares/authentication.js";


const routerLibraries = express.Router();

routerLibraries.get('/all-libraries', getAllLibraries);
routerLibraries.get('/library-id/:id', getLibraryById);
routerLibraries.post('/create-library', isAuthenticated, createLibrary);
routerLibraries.put('/edit-library/:id', isAuthenticated, updateLibrary);
routerLibraries.put('/delete-library/:id', isAuthenticated, deleteLibrary);

export { routerLibraries }