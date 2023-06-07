import express from "express";
import { login } from "../controllers/user-controller.js";

const routesUser = express.Router();

routesUser.post('/login', login);

export { routesUser }