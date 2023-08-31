const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT || 3000 || 3333;
        this.proyectos = '/api/proyectos';

        // Middleware
        this.middleware();

        // Rutas
        this.routes();
    }

    middleware() {
        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio publico
        this.app.use( express.static('public') );
    }

    routes() {
        this.app.use( this.proyectos, require('../routes/proyectos') )
    }

    listen() {
        this.app.listen( this.port , () => {
            console.log('El servidor corre en el puerto: ' + this.port );
        })
    }
}

module.exports = Server