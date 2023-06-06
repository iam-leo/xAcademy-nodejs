import express from "express";
import { routerLibraries } from "./src/routes/libraries-routes.js";


const app = express();

app.use(express.json());
app.use('/library', routerLibraries);

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(3000, () => {
    console.log('Servidor iniciado...!');
})