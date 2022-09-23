import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const User = {
    getAllUsers: async () => {
        const users = await prisma.user.findMany()
        return users
    },
    getOneUser: async (email) => {
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        })
        return user
    },
    deserializeUser: async (id) => {
        const user = await prisma.user.findFirst({
            where: {
                id: id
            }
        })
        return user
    },
    createUser: async (data) => {
        const createdUser = await prisma.user.create({
            data: data
        })
        return createdUser
    },
    updateUser: async (id, data) => {
        const updatedUser = await prisma.user.update({
            where: {
                id: id
            },
            data: data
        })
        return updatedUser
    },
    activeUser: async (id) => {
        const activeUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                active: true
            }
        })
        return activeUser
    },
    deactiveUser: async (id) => {
        const deactiveUser = await prisma.user.update({
            where: {
                id: id
            },
            data: {
                active: false
            }
        })
        return deactiveUser
    }
}

export default User 
