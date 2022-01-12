const socketController=(socket) => {
    console.log("Cliente conectado", socket.id)
    socket.on("disconnect",()=>{
        console.log("Cliente desconectado");
    })

    socket.on("message",( payload, cb )=>{
       
        const id=123456;
        /**
         *  Enviar mensaje a todos los clientes conectados
         */
        // this.io.emit("message",payload);

        /**
         * Envio del callback de retroalimentacion
         */
        cb({id});

        /**
         *  Enviar mensaje al cliente conectado
         */
        // socket.emit("message",payload);

        /**
         * Envia msg a todos los clientes excepto al cliente que lo envió
         */
         socket.broadcast.emit("message",payload);

    })
}

module.exports={
    socketController
}