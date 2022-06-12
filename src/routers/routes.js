const routes = require("express").Router();
const animeController = require("../controllers/animeControllers");

routes.get("/", animeController.getAll);
routes.get("/cadastro", animeController.criar);
routes.post("/create", animeController.create);
routes.get("/editar/:id", animeController.editar);
routes.post("/update/:id", animeController.update);
routes.get("/deletar/:id", animeController.deletar);
routes.get("/details/:id", animeController.getById);
module.exports = routes





