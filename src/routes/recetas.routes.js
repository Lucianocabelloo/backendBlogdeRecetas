import { Router } from "express";

const router = Router();


router.route("/recetas").get().post()
router.route("/recetas/:id").get().put().delete()

export default router