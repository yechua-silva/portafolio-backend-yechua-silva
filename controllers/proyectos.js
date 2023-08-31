const { request, response } = require("express");
const { enviarEmail } = require("../helpers/emailContacto");

const getProyectos = (req = request, res = response) => {
	const data = require("../public/proyectos.json");
	res.json(data);
};

const postFormulario = (req = request, res = response) => {
	const nombre = req.body.nombre;
	const email = req.body.email;
	const message = req.body.message;

	enviarEmail({
		nombre,
		email,
		message,
	});

	res.json({
		nombre,
		email,
		message,
	});
};

module.exports = {
	getProyectos,
	postFormulario,
};
