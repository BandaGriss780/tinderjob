import service from "../../services/users/index.js"
import { avatarRegex, emailRegex, phoneRegex } from "../../utils/regex.js"
import { uniqueID } from "../../utils/uniqueID.js"
import Redis from 'redis';
export const client = Redis.createClient( { host: "localhost", port: 6379 } );

export const controller = {
getAllUsers: async (req, res) => {
    const reply = await client.get("users")
    if (reply) return res.send(JSON.parse(reply))
    const users = await service.getAllUsers()
    const saveResult = await client.set("users", JSON.stringify(users), { EX: 3600 })
    res.status(200).json(users)
},

getOneUser: async (req, res) => {
    const { email } = req.params
    const user = await service.getOneUser(email)
    res.status(200).json(user)
},

createUser: async (req, res) => {
    console.log(req.body)
    // if(!req.body.email) {
    //     return res.status(400).json({msg: "Falta el mail wachin"})
    // }
    
    const newUser = {
        ...req.body,
        id: uniqueID(req.body.email)
    }

    // if(!newUser.name || !newUser.email || !newUser.password) {
    //     return res.status(400).json({
    //         message: "Please provide all required fields"
    //     })
    // }

    // if(newUser.phone) {
    //     !phoneRegex.test(newUser.phone) ? res.status(400).json({ message: "Please provide a valid phone number" }) : null
    // }

    // if(!emailRegex.test(newUser.email) || !avatarRegex.test(newUser.avatar)) {
    //     return res.status(400).json({
    //         message: "Please provide valid data"
    //     })
    // }

    const user = await service.createUser(newUser)
    res.status(200).json(user)
},

updateUser: async (req, res) => {
    const user = await service.updateUser(req.params.id, req.body)
    res.status(200).json(user)
},

deactiveUser: async (req, res) => {
    const user = await service.deactiveUser(req.params.id)
    res.status(200).json(user)
},

activeUser: async (req, res) => {
    const user = await service.activeUser(req.params.id)
    res.status(200).json(user)
}
}

export default controller;