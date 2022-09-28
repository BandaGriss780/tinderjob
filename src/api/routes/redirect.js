import { Router } from 'express'

const router = Router()

router 
    .get('/', (req, res) => {
        res.redirect("http://localhost:3000/ingresar.html")
    })

export default router    
