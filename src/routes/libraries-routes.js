import express  from "express";
import { getAllLibraries } from "../controllers/libraries-controller.js";


const routerLibraries = express.Router();

routerLibraries.get('/all-libraries', getAllLibraries);

export { routerLibraries }