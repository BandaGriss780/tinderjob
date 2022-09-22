import Post from '../../models/Post.js'

const postServices = {
 getAllPosts: () => {
    const allPosts =  Post.getAllPosts()
    return allPosts
},

 getOnePost: (id) => {
    const onePost = Post.getOnePost(id)
    return onePost
},

 createNewPost: (newPost) => {
    const createdPost = Post.createNewPost(newPost)
    return createdPost
},

 updatePost: (id, data) => {
    const posteoActualizado = Post.updatePost(id, data)
    return posteoActualizado
},

 deletePost: (id) => {
    const deletedPost = Post.deletePost(id)
    return deletedPost
}
}

export default postServices