const nodemailer = require("nodemailer");

const enviarEmail = async (datos) => {
	// console.log(datos);
	const transporter = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});

	const { nombre, email, message } = datos;

	// Enviar el email
	try {
		const info = await transporter.sendMail({
			from: process.env.EMAIL_USER,
			to: process.env.EMAIL_YECHUA,
			subject: `nombre: ${nombre}, email: ${email}`,
			text: message,
		});
		console.log("Mensaje enviado: %s", info.messageId);
	} catch (error) {
		console.log(error);
	}
};

module.exports = {
	enviarEmail,
};
