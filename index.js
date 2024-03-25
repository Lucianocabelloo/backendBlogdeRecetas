import  express, { urlencoded }  from "express";
import morgan from "morgan";
import cors from "cors"
import "dotenv/config"
import path from "path"
import { fileURLToPath } from "url";
const app = express()
import recetasRouter from "./src/routes/recetas.routes.js"

app.set("port", process.env.PORT || 4000)

app.listen(app.get("port"), () =>{
    console.log("Se esta usando", app.get("port"))
})

app.use(cors())

app.use(morgan("dev"))

app.use(express.json())
app.use(urlencoded({extended:true}))

const __filename = fileURLToPath(import.meta.url)
const __dirname =  path.dirname(__filename)

//Rutas
app.use(express.static(path.join(__dirname,"public")))

app.use('/api', recetasRouter)
