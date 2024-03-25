import { Router } from "express";
import { crearRecetas, editarRecetas, eliminarRecetas, listarRecetas, obtenerRecetas } from "../controllers/recetas.controllers.js";

const router = Router();


router.route("/recetas").get(listarRecetas).post(crearRecetas)
router.route("/recetas/:id").get(obtenerRecetas).put(editarRecetas).delete(eliminarRecetas)

export default router