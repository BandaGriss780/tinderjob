import { Router } from 'express'
import passport from 'passport'
const router = Router()

router
    .get('/', (req, res) => {
        res.send("error register")
    })
    .post("/", passport.authenticate("local-register", {
        successRedirect: "/api/login",
        failureRedirect: "/api/register",
        passReqToCallback: true
    }))

export default router