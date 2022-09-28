import { Router } from 'express'
import passport from 'passport'
const router = Router()

router
    .get('/google', passport.authenticate("google",{
        successRedirect: "/api/perfil",
        failureRedirect: "/api/register",
        passReqToCallback: true
    }))
    .get('/', (req, res) => {
        res.render("registrarse.html")
    })
    .post("/", passport.authenticate("local-register", {
        successRedirect: "/api/perfil",
        failureRedirect: "/api/register",
        passReqToCallback: true
    }))

export default router