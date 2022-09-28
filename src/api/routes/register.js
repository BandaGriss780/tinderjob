import { Router } from 'express'
import passport from 'passport'
const router = Router()

router
    .get('/google', passport.authenticate("google",{
        successRedirect: "/profile",
        failureRedirect: "/api/register",
        passReqToCallback: true
    }))
    .get('/', (req, res) => {
        res.send("<p>register page</p>")
    })
    .post("/", passport.authenticate("local-register", {
        successRedirect: "/api/redirect",
        failureRedirect: "/api/register",
        passReqToCallback: true
    }))

export default router