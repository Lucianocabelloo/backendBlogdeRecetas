import Receta from "../database/models/receta.js";

export const listarRecetas = async (req,res) =>{
    try {
        const receta = await Receta.find()
        res.status(200).json(receta);
    } catch (error) {
        console.error(error);
        res.status(400).json({
            mensaje: "No se pudo obtener la lista de recetas"
        })
    }
}
export const crearRecetas = async (req,res) =>{
    try {
        const  nuevaReceta= new Receta(req.body);
        await nuevaReceta.save();

        res.status(201).json({
            mensaje: "La receta fue creada correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(404).json({
            mensaje:"El producto no pudo ser creado"
        })
    }
}
export const obtenerRecetas = async (req,res) =>{
    try {
        const  receta = await Receta.findById(req.params.id)
        res.status(200).json(receta)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            mensaje: "No se ha encontrado la receta con esa id"
        })
    }
}
export const editarRecetas = async (req,res) =>{
    try {
        const id = req.params.id

        const recetaBuscada = await  Receta.findById(id)
        if(!recetaBuscada){
            return res.status(404).json({
                mensaje: "No se encontro la receta"
            })
        }

        await Receta.findByIdAndUpdate(id, req.body)
        res.status(200).json({
            mensaje:"Se edito la receta con exito"
        })
    } catch (error) {
        res.status(404).json({
            mensaje:"Error al intentar editar la receta",
        })
    }
}
export const eliminarRecetas = async (req,res) =>{
    try {
        const id = req.params.id

        const recetaBuscada = await  Receta.findById(id)
        if(!recetaBuscada){
            return res.status(404).json({
                mensaje: "No se encontro la receta"
            })
        }

        await Receta.findByIdAndDelete(id)
        res.status(200).json({
            mensaje:"Se elimino la receta con exito"
        })
    } catch (error) {
        res.status(404).json({
            mensaje:"Error al intentar eliminar la receta",
        })
    }
}