const express=require('express');
const cors=require("cors");
const { socketController } = require('./sockets/controller');

class Server {
    constructor(){

        /**
         * Inicializacion del servidor sockect
         */
        this.port   = process.env.PORT;
        this.app    = express();
        this.server = require('http').createServer(this.app);
        this.io     = require('socket.io')(this.server);



        this.paths={}

        //Connection database
        this.database();

        //Middlewares
        this.middlewares();

        //Rutas
        this.routes();

        //sockets
        this.sockets();
    }

    async database(){

    }

    middlewares(){

        //CORS
        this.app.use(cors())

        //Parse Json Request
        this.app.use( express.json() );

        //directorio publico
        this.app.use(express.static('public'));

        
    }

    routes(){

    }

    /**
     * Eventos sockets
     */
    sockets(){
        this.io.on("connection", socketController);
    }

    
    listen(){
        const server=this.server.listen(process.env.PORT,()=>{
            console.log("Servidor corriendo en el puerto "+this.port)
        })

        server.timeout = 40000;
    }

}

module.exports=Server;