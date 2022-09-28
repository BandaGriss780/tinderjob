import { Router } from 'express'

const router = Router()

router
    .get("/", (req, res) => {
        res.send("Bienvenido a TinderJob")
    })
    .get("/profile", (req, res) => {
        res.render("/perfil.html")
    })
    .get("/timeline")
    .get("/settings")

  export default router