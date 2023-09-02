const { Router } = require("express");
const { getProyectos, postFormulario } = require("../controllers/proyectos");
const { check } = require("express-validator");
const { validarCampos } = require("../middleware/validar-campos");

const router = Router();

// Se le llama endpoint a la ruta "/api"
router.get("/", getProyectos);

// OBtencion de datos formulario
router.post(
	"/",
	check("nombre", "El nombre es obligatorio").not().isEmpty(),
	check("email", "El email es obligatorio").not().isEmpty(),
	check("email", "El email debe de ser valido").isEmail(),
	check("message", "El message es obligatorio").not().isEmpty(),
	validarCampos,
	postFormulario
);

module.exports = router;
