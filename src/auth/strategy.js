import passport from "passport"
import { Strategy as LocalStrategy } from "passport-local"
import User from "../models/User.js"
import { generateHash, validatePassword } from "../utils/hash.js"
import { uniqueID } from "../utils/uniqueID.js"

passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
    const user = await User.deserializeUser(id) 
    done(null, user)
})

passport.use('local-register', new LocalStrategy({
    
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

    }, 
    async (req, email, password, done) => {
        //console.log(email, password)
        const thereIsUser = await User.getOneUser(email)
        console.log(thereIsUser)
        const newUser = {
            ...req.body,
            id: uniqueID(email), 
            password: generateHash(password)
        }
        console.log(newUser)
        if (thereIsUser) {
            //console.log("fail")
            return done(null, false)
        } else {
            await User.createUser(newUser)
            done(null, newUser)
        }        
}))

passport.use('local-login', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, name, password, done) => {
    const user = await User.getOneUser( name )
    if (!user) {
        return done(null, false)
    }
    if (validatePassword(password, user.password)) {
        return done(null, false)
    }
    done(null, user)
}))


export default passport