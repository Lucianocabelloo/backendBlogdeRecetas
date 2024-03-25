import mongoose, {Schema} from "mongoose"


// Paso 1 : Definir el esquema de la colección en Mongo DB
const recetaSchema = new Schema({
    nombreReceta:{
        type: String,
        required: true,
        minLength:2,
        maxLength:350,
    },
    duracion:{
        type: Number, 
        required: true,
        min: 15,
        max:1000
    },
    imagen:{
        type: String,
        required: true,
        validate:{
            validator: function(valor){
                return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(valor)
            },
            message: props => `${props.value} no es una url de imagen valida`
        }
    },
    descripcionBreve:{
        type: String,
        required: true,
        minLength:10,
        maxLength:150,
    },
    ingredientes:{
        type: String,
        required: true,
        min:10,
        max:200,
    },
    preparacion:{
        type: String,
        required: true,
        minLength:10,
        maxLength:2000,
    },
    autor:{
        type: String,
        required: true,
        minLength:10,
        maxLength:150,
    },
    porciones:{
        type: Number,
        required: true,
        min:1,
        max:10,
    }
})

// Generamos el modelo de producto  a partir del schema definido anteriormente 
const Receta = mongoose.model('receta', recetaSchema)

export default Receta