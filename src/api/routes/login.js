import express from "express"
import passport from "passport"
const router = express.Router()

router
    .get("/", (req, res, next) => {
        res.send("Login page")
    })
    .post("/", passport.authenticate("local-login", {
        successRedirect: "/profile",
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