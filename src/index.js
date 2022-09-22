import app from './app.js'
//import https from 'https'
//import fs from 'fs'

// https.createServer({
//     key: fs.readFileSync('./src/certs/key.pem'),
//     cert: fs.readFileSync('./src/certs/cert.pem')
// }, )
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})