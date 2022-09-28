const inputUsername = document.querySelector(".name")
const inputlastName = document.querySelector(".surname")
const inputMail = document.querySelector(".email")
const inputPassword = document.querySelector(".password")

const correo = document.querySelector(".correo-login")
const password = document.querySelector(".pass-login")

console.log(correo)

const registerBtn = window.document.getElementById("#registrar-btn")
const loginBoton = window.document.getElementById("#ingresar-btn")

const logDatos = async () => {
     const correo = correo.value
     const password = password.value
     const respuesta = { correo, password }
     const envio = await fetch('/api/login', {
         method: "POST",
         cache: "no-cache",
         mode: "cors",
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
         body: JSON.stringify({...respuesta}),
         redirect: "follow",
         referrerPolicy: "no-referrer",
         credentials: "same-origin"
     });
     console.log(JSON.stringify({...respuesta}))
     return envio;
}
//----------------------------------------------------------------
const subirDatos = async () => {
     const name = inputUsername.value
     const surname = inputlastName.value
     const email = inputMail.value
     const password = inputPassword.value
     const respuesta = {name, surname, email, password}
     const envio = await fetch('/api/register', {
         method: "POST",
         cache: "no-cache",
         mode: "cors",
         headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
         body: JSON.stringify({...respuesta}),
         redirect: "follow",
         referrerPolicy: "no-referrer",
         credentials: "same-origin"
     });
     console.log(JSON.stringify({...respuesta}))
     return envio;
}

 loginBoton.addEventListener("click", logDatos);
 registerBtn.addEventListener("click", subirDatos);











// const contenedor = document.querySelector(".contenedor")

// [{}].map((post) => {
//     contenedor.innerHTML += `
//         <section>
//             ${post.id}
//             <h1>${post.title}</h1>
//             <p>${post.description}</p>
//         </section>
//     `
// })

