const mongoose = require('mongoose')


//FUNCION DE CONEXION

const conectarDB = async() => {

    await mongoose.connect(process.env.MONGO_URL)
    console.log('MongoDb conectado.:'.bgGreen.red)
}

module.exports = conectarDB