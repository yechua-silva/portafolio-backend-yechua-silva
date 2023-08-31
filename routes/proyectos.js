const { Router } = require("express");
const { getProyectos, postFormulario } = require("../controllers/proyectos");

const router = Router();

// Se le llama endpoint a la ruta "/api"
router.get("/", getProyectos);

// OBtencion de datos formulario
router.post("/", postFormulario);

module.exports = router;
