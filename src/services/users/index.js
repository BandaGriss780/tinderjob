import User from '../../models/User.js'

export const Service = {
    getAllUsers: () => {
        const users = User.getAllUsers()
        return users
    },
    getOneUser: (email) => {
        const user = User.getOneUser(email)
        return user
    },
    createUser: (newUser) => {
        const user = User.createUser(newUser)
        return user
    },
    updateUser: (id, newUser) => {
        const user = User.updateUser(id, newUser)
        return user
    },
    deactiveUser: (id) => {
        const user = User.deactiveUser(id)
        return user
    },
    activeUser: (id) => {
        const user = User.activeUser(id)
        return user
    }
}

export default Service