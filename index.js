import express from "express";
import { routerLibraries } from "./src/routes/libraries-routes.js";
import { routerBooks } from "./src/routes/book-routes.js";
import { createUser } from "./src/services/user-service.js";


const app = express();

app.use(express.json());

//Crear usuario inicial
createUser();

app.use('/library', routerLibraries);
app.use('/book', routerBooks);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Servidor iniciado...!');
})