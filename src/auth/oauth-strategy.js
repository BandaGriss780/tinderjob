import passport from "passport"
import dotenv from "dotenv"
import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import User from "../../src/models/User.js"
import { uniqueID } from "../utils/uniqueID.js"

dotenv.config()

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  const user = await User.getOneUser(id)
  done(null, user)
})

passport.use(
  new GoogleStrategy(
      {
          clientID: process.env.GOOGLE_CLIENT_ID,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET,
          callbackURL: "/profile",
          scope: ['email', 'profile']
      },
      async (accessToken, refreshToken, profile, done) => {
          try {
              const user = await User.getOneUserGoogle(profile.id)

              if (user) return done(null, user)

              const newUser = {
                  name: profile.name.givenName,
                  email: profile.emails[0].value,
                  googleId: profile.id,
              }

              newUser.id = uniqueID(profile.emails[0].value)

              const createdUser = await User.createUser(newUser)

              done(null, createdUser)
          } catch (error) {
              console.log(error)
              done(error, null)
          }
      }
  )
)
