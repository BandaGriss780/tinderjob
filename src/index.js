import app from './app.js'
import { client } from './controllers/users/index.js'
//import https from 'https'
//import fs from 'fs'

// https.createServer({
//     key: fs.readFileSync('./src/certs/key.pem'),
//     cert: fs.readFileSync('./src/certs/cert.pem')
// }, )
const PORT = process.env.PORT || 3000


async function main() {
    await client.connect()
    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`)
    })
  }
  
  main()