import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const Post = {
    getAllPosts: async () => {
    const allPosts = await prisma.post.findMany({
        // include: {
        //     user: {
        //         select:{
        //             id: true,
        //             name: true
                
        //         }
        //     },
        //     country: {
        //         select:{
        //             id: true,
        //             name: true
        //         },
        //     }
        // }
    })
    return allPosts
},

 getOnePost: async (id) => {
    const onePost = await prisma.post.findUnique({
        where: {
            id: id
        },
        // include: {
        //     user: {
        //         select:{
        //             name: true,
        //             id: true
                
        //         }
        //     },
        //     country: {
        //         select:{
        //             id: true,
        //             name: true
        //         }
        //     }
        // }
    })
    return onePost
},

 createNewPost: async (newPost) => {
    const createdPost = await prisma.post.create({
        data:newPost
    })
    return createdPost
},

 deletePost: async (id) => {
   const deletedPost = await prisma.post.delete({
        where: {
          id: id
        },
      })
    return deletedPost
},

 updatePost: async (id, data) => {
    const updatedPost = await prisma.Post.update({
        where: {
          id: id,
        },
        data: data
      })
    return updatedPost
}
}

export default Post