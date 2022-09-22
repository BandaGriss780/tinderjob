import postServices from "../../services/posts/index.js"

const postController = {
 getAllPosts: async (req, res) => {
    const allPosts = await postServices.getAllPosts()
    res.status(200).json({status: "ok", data: allPosts})
},

 getOnePost: async (req, res) => {
    const { id } = req.params
    const onePost = await postServices.getOnePost(Number(id))
    res.status(200).json({status: "ok", data: onePost})
},

 createNewPost: async (req, res) => {
    const { body, multimedia } = req.body

    if(!body || !multimedia ) {
        res.status(400).json({status: "error", 
                  err: "Completa todos los Campos", 
                  reason:"Falta completar algun campo de texto"
        })
    } 
 const idGenerado = Number(String(new Date().getTime()).slice(-7,-1))
    //console.log(idGenerado)
    const newPost = {
        id: idGenerado,
        body: body,
        multimedia: multimedia  
    }
        // Servicio de crear usuario
        const createdPost = await postServices.createNewPost(newPost)
        res.status(201).json({msg: "Posteo creado correctamente!!", data: createdPost})
    
},

 updatePost: async (req, res) => {
    const { id } = req.params
    const  data  = req.body
    console.log(data)
    await postServices.updatePost(Number(id), data)
    //Servicio para editar
    res.status(200).json({msg: "Posteo actualizado!"})
},

 deletePost: async (req, res) => {
    const { id } = req.params
    await postServices.deletePost(Number(id))
    // Servicio de eliminar usuario
    res.json({msg: "Posteo eliminado!"})
}
}

export default postController