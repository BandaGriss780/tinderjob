import express from "express"
import passport from "passport"
const router = express.Router()

router
    .get("/", (req, res, next) => {
        res.render("ingresar.html")
    })
    .post("/", passport.authenticate("local-login", {
        successRedirect: "/api/perfil",
        failureRedirect: "/api/login",
        passReqToCallback: true
    }))


    .get("/logout", (req, res, next) => {
        req.logout()
        res.redirect("/auth/login")
    })

// router.use((req, res, next) => {
//     isLoggedIn(req, res, next)
//     next()
// })

router
    .get("/profile", (req, res, next) => {
        res.send("Profile page")
    })

    function isLoggedIn(req, res, next) {
        if(req.isAuthenticated()) {
            return next()
        }
        res.redirect("/auth/login")
    }

export default router