import express  from "express";
import { getAllLibraries, getLibraryById } from "../controllers/libraries-controller.js";
import { isAuthenticated } from "../middlewares/authentication.js";


const routerLibraries = express.Router();

routerLibraries.get('/all-libraries', isAuthenticated, getAllLibraries);
routerLibraries.get('/library-id/:id', getLibraryById);

export { routerLibraries }