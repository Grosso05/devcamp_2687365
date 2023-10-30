const mongoose = require('mongoose')

// definir modelo 

const bootcampSchema = new mongoose.Schema ({
    name: {
        type: String,
        unique : true,
        required : [true , "El bootcamp esta repetido"],
        maxlength:[20, "el nombre solo debe tener 20 caracteres"] 
    },
    phone:{
        type: Number,
        required : [true , "El telefono esta repetido"],
        maxlength:[10, "el telefono solo debe tener 10 caracteres"] 
    },
    address:{
        type: String,
        required : [true , "direccion requerida"],
    },
    topics:{
        type:[String],
        enum:["AI","Backend","Frontend","Devops"],
        required : [true , "El bootcamp esta repetido"],
        maxlength:[20, "el nombre solo debe tener 20 caracteres"] 
    },
    averageRating:Number,
    createdAt:{
        type: Date,
        required:[true,"debe ingresarse fecha DE CREACION "]
    }
})



const Bootcamp = mongoose.model("Bootcamp", bootcampSchema)
module.exports = Bootcamp                       




