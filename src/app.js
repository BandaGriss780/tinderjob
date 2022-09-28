import express from 'express'
import path from "path"
import dotenv from 'dotenv'
import session from 'express-session'
import passport from 'passport'
import morgan from "morgan"
import cors from "cors"
import * as url from 'url'
import apiLogin from './api/routes/login.js'
import apiRegister from './api/routes/register.js'
import apiPost from './api/routes/posts.js'
import apiUsers from './api/routes/users.js'
import apiPerfil from './v1/routes/index.routes.js'
import "./auth/strategy.js"
import "./auth/oauth-strategy.js"
import cons from "consolidate"
const app = express()

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

// Inicializaciones
dotenv.config()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, "views")))
app.set('views', path.join(__dirname, 'views'))
app.engine("html", cons.swig)
app.set('view engine', 'html')

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())

app.use('/api/login', apiLogin)
app.use('/api/register', apiRegister)
app.use('/api/post', apiPost)
app.use('/api/users', apiUsers)
app.use('/api/perfil', apiPerfil)

export default app